import { useTransaction } from '../../hooks/TransactionsContext'

import { CardSummary } from '../CardSummary'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import * as S from "./styles"

export function Summary() {
  const { transactions } = useTransaction()

  const summary = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === 'deposit') {
      accumulator.deposits += transaction.amount
      accumulator.total += transaction.amount
    } else {
      accumulator.withdraws += transaction.amount
      accumulator.total -= transaction.amount
    }

    return accumulator
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <S.Container>
      <CardSummary
        title="Entradas"
        icon={incomeImg}
        value={String(summary.deposits)}
      />
      <CardSummary
        title="Saídas"
        icon={outcomeImg}
        value={`-${String(summary.withdraws)}`}
      />
      <CardSummary
        title="Total"
        icon={totalImg}
        value={String(summary.total)}
      />
    </S.Container>
  )
}
