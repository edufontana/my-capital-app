import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`

export const Text = styled.Text`
  color: white;
`
