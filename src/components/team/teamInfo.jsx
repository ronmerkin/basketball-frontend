import React from 'react'
import styled from 'styled-components'
import TeamRoster from './teamRoster'

const StyledGrid = styled.div`
  display: grid;
  grid-auto-rows: 150px 1fr;
  height: 375px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #2A2C2F;
  box-shadow: 1px 1px 6px 1px #000000;
`

const StyledImage = styled.img`
  display: block;
  margin: auto;
`

export default function TeamInfo({team}) {
    return (
        <StyledGrid>
            <StyledImage src={team.logo} alt="Logo" />
            <TeamRoster team={team}/>
        </StyledGrid>

    )
}