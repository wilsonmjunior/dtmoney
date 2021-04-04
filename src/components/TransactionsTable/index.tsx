import { useCallback } from 'react';
import { useTransaction } from '../../hooks/TransactionsContext';

import * as S from './styles'

export function TransactionsTable() {
  const { transactions } = useTransaction()

  const amountFormatted = useCallback((amount) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount),
    [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                {transaction.type === 'deposit' ? (
                  <td className="deposit">{amountFormatted(transaction.amount)}</td>
                ) : (
                  <td className="withdraw">- {amountFormatted(transaction.amount)}</td>
                )}
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </S.Container>
  )
}
