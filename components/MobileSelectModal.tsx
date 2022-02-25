import styled from 'styled-components';
import ExitModalIcon from './ExitModalIcon';

const Container = styled.div`
  position: absolute;
  right: 7%;
  top: 7%;
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 200px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  z-index: 100;
`;

const Link = styled.a`
  text-decoration: none;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 29px 35px 24px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
  margin-left: 16px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  cursor: pointer;
`;

const CategorieTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #587169;
  margin-bottom: 24px;
`;

const MobileSelectModal = () => {
  return (
    <Container>
    <Link href={'/details'}>
      <TitleContainer>
        <Title>Categorias</Title>
        <ExitModalIcon />
      </TitleContainer>
    </Link>
    <CategoriesContainer>
      <CategorieTitle>Colaboradores</CategorieTitle>
      <CategorieTitle>Cargos</CategorieTitle>
    </CategoriesContainer>
    </Container>
  )
}

export default MobileSelectModal;
