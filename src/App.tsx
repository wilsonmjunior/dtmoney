import { useState } from 'react'
import Modal from 'react-modal'

import { TransactionsProvider } from './hooks/TransactionsContext'

import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { Dashboard } from './pages/Dashboard'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App(): JSX.Element {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  )
}
