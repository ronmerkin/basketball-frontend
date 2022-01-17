import React from 'react'
import TeamHeader from './TeamHeader'
import Player from './Player'
import styled from 'styled-components'

const StyledUl = styled.ul`
  padding-left: 0;
  text-align: left;
`

export default function TeamLineup({ team }) {
    const renderPlayers = () => {
        return team.players && team.players.map(player => {
            return (
                <Player key={player.name} player={player} />
            )
        })
    }
    return (
        <div>
            <TeamHeader name={team.full_name}/>
            <StyledUl className={`${team.name}-lineup`}>
              {renderPlayers()}
            </StyledUl>
        </div>
    )
}