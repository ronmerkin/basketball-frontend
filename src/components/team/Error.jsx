import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  color: #D8000C;
  background-color: #fff;
  font-weight: bolder;
  font-size: larger;
  padding: 40px;
  border-radius: 10px;
`
export default function Error({ message }) {
    return (
        <StyledError>{message}</StyledError>
    )
}
