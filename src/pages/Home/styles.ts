import styled from 'styled-components';

import landing from '../../assets/landing.svg';

export const Container = styled.div`
  padding-top: 10rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content:center;

  @media(max-width: 625px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Section = styled.div`

`;


export const Title = styled.div`
  max-width:65rem;
  margin-bottom: 6rem;
  color: var(--primary-color);
  font-weight: bold;
  line-height:8rem;
  font-size: 4.1rem;

  @media(max-width: 625px){
    max-width:45rem;
  }
`;
export const SubTitle = styled.div`
  max-width: 65rem;
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: -0.015em;
  margin-bottom: 3rem;
  color: var(--secondary-color);
  @media(max-width: 425px){
    margin-bottom: 3rem;
    max-width:45rem;
  }
`;
export const LandingPhoto = styled.img.attrs({
  src:`${landing}`
})`
  width: 60rem;
  @media(max-width: 625px){
    margin-top: 10rem;
    max-width:45rem;
  }
`;

export const Button = styled.a`
 
  background-color: var(--primary-color);
  border-radius: 1rem;
  height: 7rem;
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2.4rem;
  letter-spacing: -0.015em;
  color: #FFF;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-color-hover);
  }

`;