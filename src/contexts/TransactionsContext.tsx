import { createContext, ReactNode, useState } from 'react'

type Transactions = {
  id: number
  code: string
  name: string
  date: string
  price: number
}

type ContextType = {
  transactions: Transactions[]
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTrasactions] = useState<Transactions[]>([
    {
      id: 2323,
      code: 'dsad',
      name: 'aaaa',
      date: 'dwqewqe',
      price: 3333,
    },
  ])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
