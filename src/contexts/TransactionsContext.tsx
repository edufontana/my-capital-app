import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'

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

  function handleAddNewStock({ code, date, name, price }: CreateStock) {
    console.log(dates)

    const formatDate = date
    const formatDate2 = formatDate.split('-')

    const newDate = new Date(formatDate2[0], formatDate2[1] - 1, formatDate2[2])
    console.log('data formatada', newDate.getTime())

    const newDateString = newDate.toISOString()

    const feriado = dates.filter((item) => {
      console.log('DASDASD', uuid.v4().toString())

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
