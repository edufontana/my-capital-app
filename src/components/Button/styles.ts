import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

type ButtonProps = {
  typeColor: 'PRIMARY'
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ typeColor, theme }) =>
    typeColor === 'PRIMARY' && theme.COLORS.ORANGE};
`
export const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
