import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

export interface Transaction {
  id: number;
  title: string
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextProps {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get<Transaction[]>('transactions').then(response => {
      setTransactions(response.data)
    })
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const { data: transaction } = await api.post<Transaction>('/transactions', transactionInput)

    setTransactions(oldState => [...oldState, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction() {
  const transactionContext = useContext(TransactionsContext)

  return transactionContext
}
