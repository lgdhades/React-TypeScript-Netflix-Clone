import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: ReactNode
}

/*---> Component <---*/
const Navbar = ({ children }: PropsType) => {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.nav`
  /* border: 1px solid green; */
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  margin-right: auto;
  margin-left: auto;
  /* border: solid red; */

  @media (max-width: 550px) {
    margin-bottom: 100px;
  }
`

export default Navbar
