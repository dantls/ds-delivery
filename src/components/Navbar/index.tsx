import React from 'react';

import { Container , Logo, LogoText} from './styles';


const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />
      <LogoText href=" ">DeliveryTLA</LogoText>
    
    </Container>
  );
};

export default Navbar;
