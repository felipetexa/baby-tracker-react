import React from 'react'
import { HeaderWrapper, Title, GenderTheme } from './styles'

function Header() {
  return (
    <HeaderWrapper>
      <Title>Baby Tracker</Title>
      <GenderTheme>Choose Gender</GenderTheme>
    </HeaderWrapper>
  )
}

export default Header