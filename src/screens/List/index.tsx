import React, { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Container, Text, Content, TitleText, TitleView } from './styles'
import { Card } from '@components/Card'

export function List() {
  const { transactions, dates } = useContext(TransactionsContext)

  useEffect(() => {
    transactions.sort(function (a, b) {
      if (parseInt(a.newDateString) < parseInt(b.newDateString)) {
        return -1
      } else {
        return true
      }
    })

    console.log('esse', transactions)

    console.log(dates)
  }, [transactions])

  return (
    <Container>
      <Content>
        <TitleView>
          <TitleText>Listagem</TitleText>
        </TitleView>

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
