import { useMemo } from 'react'
import * as S from './styles'

interface CardSummaryProps {
  title: string;
  icon: string;
  value: string;
}

export function CardSummary({ title, icon, value }: CardSummaryProps) {
  const formattedValue = useMemo(() => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value)), [value])

  return (
    <S.Container className={title === 'Total' ? 'highlight-background' : ''}>
      <header>
        <p>{title}</p>
        <img src={icon} alt={title} />
      </header>

      <strong>{formattedValue}</strong>
    </S.Container>
  )
}
