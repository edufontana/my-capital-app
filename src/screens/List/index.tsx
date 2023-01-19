import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Container, Text, Content } from './styles'

export function List() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <Content>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text>{item.id}</Text>}
        />
        <Text>bb</Text>
      </Content>
    </Container>
  )
}
