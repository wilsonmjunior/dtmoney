import styled from 'styled-components'

export const Container = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    margin-top: 5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--text-body);
      background-color: var(--shape);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
