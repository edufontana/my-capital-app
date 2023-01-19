import styled from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  height: 56px;
  border-radius: 6px;
  padding: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
