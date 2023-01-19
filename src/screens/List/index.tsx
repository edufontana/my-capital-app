import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Container, Text, Content } from './styles'
import { Card } from '@components/Card'

export function List() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <Content>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              code={item.code}
              date={item.date}
              price={item.price}
              name={item.name}
            />
          )}
        />
      </Content>
    </Container>
  )
}
