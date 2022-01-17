import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import TeamInfo from './TeamInfo'
import { TEAMS } from '../../utils/consts'
import { Machine, useMachine } from '../../finite-state-machine'
import stateMachine from '../../utils/machine'
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
  const [currState, transition] = useMachine(Machine(stateMachine))
  const [currTeam, setTeam] = useState({})
  const [errMsg, setErrMsg] = useState('')
  useEffect(() => {
    if (Object.keys(currTeam).length) {
      transition('resolve')
    }
  }, [currTeam])
  useEffect(() => {
    if (errMsg) {
      transition('reject')
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
    transition('switch')
    // Adding this set timeout in order to show the fetch state
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    await fetchTeam(selectedTeam.value)
  }
  console.log('cu: ', currState)
  return (
    <StyledDiv data-testid={testId}>
      <StyledSelect className={`teams-select-${testId}`} options={options} onChange={handleSelect} placeholder='Select a team' />
      {currState === 'fetch' && <StyledSpinnerDiamond className='spinner' size='100' secondaryColor='#fff'/>}
      {currState === 'success' && <TeamInfo team={currTeam}/>}
      {currState === 'failure' && <Error message={errMsg}/>}
    </StyledDiv>
  )
}
