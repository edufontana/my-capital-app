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
export const TitleView = styled.View`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;
`

export const ViewInput = styled.View`
  margin-bottom: 20px;
`
