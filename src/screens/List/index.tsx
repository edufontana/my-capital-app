import React, { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Container, Content, TitleText, TitleView, ViewInput } from './styles'
import { Card } from '@components/Card'
import { Input } from '@components/Input'

export function List() {
  const { transactions, dates } = useContext(TransactionsContext)
  const [listFilter, setListFilter] = useState(transactions)
  const [searchFilter, setSearchFilter] = useState('')

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

  useEffect(() => {
    if (searchFilter === '') {
      console.log('ASIFSHADUSAD')
      setListFilter(transactions)
    } else {
      setListFilter(
        transactions.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchFilter.toLocaleLowerCase()) >
            -1,
        ),
      )
    }
  }, [searchFilter, transactions])

  return (
    <Container>
      <Content>
        <TitleView>
          <TitleText>Listagem</TitleText>
        </TitleView>

        <ViewInput>
          <Input
            placeholder="pesquise por nome"
            onChangeText={(t) => setSearchFilter(t)}
          />
        </ViewInput>
        <FlatList
          data={listFilter}
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
