import styled from 'styled-components/native'

export const Container = styled.View`
  height: 56px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: space-between;
  padding: 14px;
  width: 100%;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const Text = styled.Text`
  color: white;
  font-size: 13px;
`
