import React from 'react';

import { Container, Content,Section, Title, SubTitle, LandingPhoto, Button} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Section>
          <Title>
            <h1>
              Faça seu pedido que entregamos para você!
            </h1>
          </Title>
          <SubTitle>
            <h3>
              Escolha o seu pedido e em poucos minutos levaremos em sua porta.
            </h3>
          </SubTitle>
          <Button>Fazer Pedido</Button>
        </Section>
        <LandingPhoto />
      </Content>
    </Container>
  );
};

export default Home;
