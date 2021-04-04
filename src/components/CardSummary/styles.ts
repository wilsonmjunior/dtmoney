import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--shape);
  border-radius: 0.25rem;
  color: var(--text-title);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    display: block;
    margin-top:1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &.highlight-background {
    background-color: var(--green);
    color: var(--shape);
  }
`