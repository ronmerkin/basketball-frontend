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

const StyledDiv = styled.div`
  //background: #fff;
  //height: 375px;
  border-radius: 10px;
`
const StyledSelect = styled(Select)`
  margin-bottom: 20px;
`
const StyledSpinnerDiamond = styled(SpinnerDiamond)`
  margin-top: 100px;
`

export default function Team({ testId }) {
  const machine = Machine(stateMachine)
  const [currState, transition] = useMachine(machine)
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
  const handleSelect = async (selectedTeam) => {
    transition('switch')
    // TODO: ask tal if that shows a capability of the spinner or remove
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    try {
      const data = await apiCall('GET', `teams?team=${selectedTeam.value}`)
      if (data && data.length) {
        setTeam(data[0])
      }
    } catch (err) {
      setErrMsg(err)
    }
  }
  return (
    <StyledDiv data-testid={testId}>
      {currState !== 'success' && <StyledSelect className={`teams-select-${testId}`} options={options} onChange={handleSelect} placeholder='Select a team' />}
      {currState === 'fetch' && <StyledSpinnerDiamond className='spinner' size='100' secondaryColor='#fff'/>}
      {currState === 'success' && <TeamInfo team={currTeam}/>}
      {currState === 'failure' && <Error message={errMsg}/>}
    </StyledDiv>
  )
}
