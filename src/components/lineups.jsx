import React from 'react'
import Team from './team/team'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  padding: 80px;
`

const StyledGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 40px;
`

export default function Lineups() {
    return (
        <StyledGrid>
            <Team testId='team-container-1'/>
            <StyledGridItem>VS</StyledGridItem>
            <Team testId='team-container-2'/>
        </StyledGrid>
    )
}