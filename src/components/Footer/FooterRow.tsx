import React, { ReactNode } from 'react'
import styled from "styled-components";

interface PropsType {
  children?: ReactNode
}

/*---> Component <---*/
function FooterRow({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default FooterRow;
