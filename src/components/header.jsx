import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  margin: 0;
  padding: 30px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bolder;
  font-size: 40px;
`

export default function Header (){
  return (
    <StyledH1>Welcome to My NBA Team Lineup</StyledH1>
  )
}
