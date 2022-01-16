import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  position: relative;
`
const StyledH1 = styled.h1`
  background: #01a4dd;
  margin: 0;
  padding: 30px;
  color: #fff;
  margin-bottom: 40px;
`

const StyledImage = styled.img`
  width: 150px;
  height: 98px;
  position: absolute;
  top: 0px;
  &.right {
    right: 0;
  }
  &.left {
    left: 0;
  }
`

export default function Header (){
    return (
        <StyledHeader>
            <StyledImage className='left' src='https://cdn.nba.com/manage/2021/10/GettyImages-1228132003.png' alt='nba-logo' />
            <StyledH1>Welcome to My NBA Team Lineup</StyledH1>
            <StyledImage className='right' src='https://cdn.nba.com/manage/2021/10/GettyImages-1228132003.png' alt='nba-logo' />
        </StyledHeader>
)
}
