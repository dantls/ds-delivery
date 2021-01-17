import styled from 'styled-components';
import logo from '../../assets/logo.svg';

export const Container = styled.nav`
  background-color: var(--primary-color);
  height: 7rem;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const LogoText = styled.a`
  text-decoration: none;

  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.3rem;
  margin-left: 1.5rem;
  letter-spacing: -0.015em;
  color: #FFF;
`;

export const Logo = styled.img.attrs({
  src:`${logo}`
})`
  color: #fff;
  height: 4rem;
`;
