import { createContext, ReactNode, useState } from 'react'

type Transactions = {
  id: number
  code: string
  name: string
  date: string
  price: string
}

type ContextType = {
  transactions: Transactions[]
  handleAddNewStock: () => void
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTrasactions] = useState<Transactions[]>([
    {
      id: 2323,
      code: 'Q321',
      name: 'petrobras',
      date: '19-01-2022',
      price: 'RS 30',
    },
    {
      id: 23432423,
      code: 'Q321',
      name: 'petrobras',
      date: '19-01-2022',
      price: 'RS 30',
    },
  ])

  function handleAddNewStock({ code, date, name, price }: Transactions) {
    setTrasactions((state) => [
      ...state,
      {
        id: 23123,
        code: 'Q321',
        name: 'petrobras',
        date: '19-01-2022',
        price: 'RS 30',
      },
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, handleAddNewStock }}>
      {children}
    </TransactionsContext.Provider>
  )
}
