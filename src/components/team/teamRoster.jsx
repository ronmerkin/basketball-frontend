import React from 'react'
import TeamHeader from './teamHeader'
import Player from './player'
import styled from 'styled-components'

const StyledUl = styled.ul`
  padding-left: 0;
  text-align: left;
`
export default function TeamRoster({ team }) {
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
            <StyledUl className={`${team.name}-roster`}>
                {renderPlayers()}
            </StyledUl>
        </div>
    )
}