import React from 'react'
import styled from 'styled-components'
import TeamLineup from './TeamLineup'

const StyledGrid = styled.div`
  display: grid;
  grid-auto-rows: 120px 1fr;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #2A2C2F;
  box-shadow: 1px 1px 6px 1px #000000;
  background: #fff;
`

const StyledImage = styled.img`
  display: block;
  margin: auto;
`

export default function TeamInfo({team}) {
    return (
        <StyledGrid>
            <StyledImage src={team.logo} alt="Logo" />
            <TeamLineup team={team}/>
        </StyledGrid>

    )
}