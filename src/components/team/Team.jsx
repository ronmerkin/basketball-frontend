import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import TeamInfo from './TeamInfo'
import { TEAMS } from '../../utils/consts'
import { Machine, useMachine } from '../../finite-state-machine'
import fetchMachine, { FETCH_TRANSITIONS, FETCH_STATES } from '../../utils/fetch.machine'
import { SpinnerDiamond } from 'spinners-react'
import apiCall from '../../utils/apiUtil'
import Error from './Error'

const options = TEAMS.map(team => {
  return {
    value: team,
    label: team
  }
})

const StyledDiv = styled.div`
  border-radius: 10px;
`
const StyledSelect = styled(Select)`
  margin-bottom: 20px;
`
const StyledSpinnerDiamond = styled(SpinnerDiamond)`
  margin-top: 100px;
`

export default function Team({ testId }) {
  const [currState, transition] = useMachine(Machine(fetchMachine))
  const [currTeam, setTeam] = useState({})
  const [errMsg, setErrMsg] = useState('')
  useEffect(() => {
    if (Object.keys(currTeam).length) {
      transition(FETCH_TRANSITIONS.RESOLVE)
    }
  }, [currTeam])
  useEffect(() => {
    if (errMsg) {
      transition(FETCH_TRANSITIONS.REJECT)
    }
  }, [errMsg])
  const fetchTeam = async (selectedTeam) => {
    try {
      const data = await apiCall('GET', `teams?team=${selectedTeam}`)
      if (data && data.length) {
        setTeam(data[0])
      }
    } catch (err) {
      setErrMsg(err)
    }
  }
  const handleSelect = async (selectedTeam) => {
    transition(FETCH_TRANSITIONS.SWITCH)
    // Adding this set timeout in order to show the fetch state
    await fetchTeam(selectedTeam.value)
  }
  return (
    <StyledDiv data-testid={testId}>
      <StyledSelect className={`teams-select-${testId}`} options={options} onChange={handleSelect} placeholder='Select a team' />
      {currState === FETCH_STATES.FETCH && <StyledSpinnerDiamond className='spinner' size='100' secondaryColor='#fff'/>}
      {currState === FETCH_STATES.SUCCESS && <TeamInfo team={currTeam}/>}
      {currState === FETCH_STATES.FAILURE && <Error message={errMsg}/>}
    </StyledDiv>
  )
}
