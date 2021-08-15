import React, { useState, ReactNode } from 'react'
import AccordionContext from './AccordionContext'
import styled from 'styled-components'

interface defaultProps {
  children?: ReactNode
}

/*---> Component <---*/
const AccordionItem = ({ children, ...restProps }: defaultProps) => {
  const [AccordionShow, setAccordionShow] = useState(false)
  // const ContextData = [AccordionShow, setAccordionShow]

  return (
    <AccordionContext.Provider value={[AccordionShow, setAccordionShow]}>
      <Wrapper {...restProps}>{children}</Wrapper>
    </AccordionContext.Provider>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-bottom: 10px;
`

export default AccordionItem
