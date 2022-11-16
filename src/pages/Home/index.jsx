import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/InitialCard'
import { CardSection } from './styles'

function Home() {
  return (
    <div>
      <Header />
      <CardSection>
        <Card title='Sleep' data='4 hours'/>
        <Card title='Food' data='500mL of milk'/>
        <Card title='Poop' data='4 diapers'/>
      </CardSection>
    </div>
  )
}

export default Home