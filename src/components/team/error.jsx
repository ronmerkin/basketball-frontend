import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  color: #D8000C;
`
export default function Error({ message }) {
    return (
        <StyledError>{message}</StyledError>
    )
}
