import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  list-style-type: none;
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`
const StyledPlayerName = styled.div`
  font-weight: bold;
`

const StyledImg = styled.img`
  border-radius: 50%;
`

export default function Player ({player}) {
    return (
        <StyledLi>
            <StyledImg src={player.profile} alt={player.name} />
            <StyledPlayerName>{player.name}</StyledPlayerName>
            <div>{player.position}, {player.age}</div>
        </StyledLi>
    )
}