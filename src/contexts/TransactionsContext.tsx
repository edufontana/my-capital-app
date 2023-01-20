import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

type DateProps = {
  date: string
  name: string
  type: string
}

type Transactions = {
  id: string
  code: string
  name: string
  date: string
  price: string
  newDateString: string
}

type ContextType = {
  transactions: Transactions[]
  dates: DateProps[]
  handleAddNewStock: (code, date, name, price) => void
  fetchGetDate: () => any
}

type CreateStock = {
  code: string
  name: string
  date: string
  price: string
  newDateString: string
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTrasactions] = useState<Transactions[]>([])

  const [dates, setDates] = useState<DateProps[]>()

  useEffect(() => {
    async function handleDates() {
      await fetchGetDate()
    }

    handleDates()
  }, [])

  useEffect(() => {
    async function loadData() {
      try {
        const data = await AsyncStorage.getItem('@myCapital-transactions')

        if (data === null) {
          setTrasactions(transactions)
        } else {
          setTrasactions(JSON.parse(data))
        }
        console.log(JSON.parse(data))
      } catch (err) {}
    }

    loadData()
  }, [])

  async function fetchGetDate() {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    try {
      const response = await axios.get(
        `https://brasilapi.com.br/api/feriados/v1/${anoAtual}`,
      )

      setDates(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  async function handleAddNewStock({ code, date, name, price }: CreateStock) {
    if (code === '' || date === '' || name === '' || price === '') {
      return Alert.alert('Preencha todos os campos')
    }
    console.log('FSAFDFSDF', dates)

    const formatDate = date
    const formatDate2 = formatDate.split('-')

    const newDate = new Date(formatDate2[0], formatDate2[1] - 1, formatDate2[2])

    const newDateString = newDate.toISOString()

    const feriado = dates.filter((item) => {
      if (
        item.date === `${formatDate2[2]}-${formatDate2[1]}-${formatDate2[0]}`
      ) {
        return true
      }
      return false
    })

    if (feriado.length > 0) {
      return Alert.alert('essa data é um feriado!')
    }

    const data = {
      id: uuid.v4().toString(),
      code,
      name,
      date,
      price,
      newDateString,
    }

    try {
      console.log('salovuuuuu')
      const response = await AsyncStorage.getItem('@myCapital-transactions')

      const currentData = response ? JSON.parse(response) : []

      const dataFormated = [...currentData, data]

      await AsyncStorage.setItem(
        '@myCapital-transactions',
        JSON.stringify(dataFormated),
      )
    } catch (err) {
      Alert.alert(err)
    }

    setTrasactions((state) => [
      ...state,
      {
        id: uuid.v4().toString(),
        code,
        name,
        date,
        price,
        newDateString,
      },
    ])
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, handleAddNewStock, fetchGetDate, dates }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
