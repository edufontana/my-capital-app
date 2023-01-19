import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const TitleView = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;
`
export const Text = styled.Text`
  color: white;
`
