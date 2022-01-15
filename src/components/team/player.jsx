import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  list-style-type: none;
  margin: 10px;
  display: flex;
`
const StyledPlayerName = styled.div`
  font-weight: bold;
`

export default function Player ({player}) {
    return (
        <StyledLi>
            <StyledPlayerName>{player.name}</StyledPlayerName>
            <div>, {player.position}, {player.age}</div>
        </StyledLi>
    )
}