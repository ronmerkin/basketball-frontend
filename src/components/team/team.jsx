import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import TeamInfo from './teamInfo'
import { TEAMS } from '../../utils/consts'
import { Machine, useMachine } from '../../finite-state-machine'
import stateMachine from '../../utils/machine'
import { SpinnerDiamond } from 'spinners-react'
import apiCall from '../../utils/apiUtil'
import Error from './error'

const options = TEAMS.map(team => {
  return {
    value: team,
    label: team
  }
})

const StyledSelect = styled(Select)`
  margin-bottom: 20px;
`

export default function Team({ testId }) {
  const machine = Machine(stateMachine)
  const [currState, transition] = useMachine(machine)
  const [currTeam, setTeam] = useState({})
  const [errMsg, setErrMsg] = useState('')
  useEffect(() => {
    transition('switch')
  }, [])
  // TODO: handle state where we are on succeed and try to change team
  // TODO: understand how to do transition twice otherwise the loader will always load when the component renders
  const handleSelect = async (selectedTeam) => {
    try {
      const data = await apiCall('GET', `teams?team=${selectedTeam.value}`)
      if (data && data.length) {
        setTeam(data[0])
        transition('resolve')
      }
    } catch (err) {
      setErrMsg(err)
      transition('reject')
    }
  }
  return (
    <div data-testid={testId}>
      {currState !== 'success' && <StyledSelect className={`teams-select-${testId}`} options={options} onChange={handleSelect} placeholder='Select a team' />}
      {currState === 'fetch' && <SpinnerDiamond className='spinner'/>}
      {currState === 'success' && <TeamInfo team={currTeam}/>}
      {currState === 'failure' && <Error message={errMsg}/>}
    </div>
  )
}
