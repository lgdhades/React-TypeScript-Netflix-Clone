import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface propsType {
  children?: string
}

/*---> Component <---*/
const AccordionTitle = ({ children }: propsType) => {
  return <Title>{children}</Title>
}

export default AccordionTitle

/*---> Styles <---*/
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 50px;
  color: #fff;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 25px;
  }
`