import styled from 'styled-components';
import ExitModalIcon from './ExitModalIcon';
import { PAGE_DATA } from '../src/data';
import { Dispatch, SetStateAction } from 'react';

interface IMobileSelectModal {
  setState: Dispatch<SetStateAction<string>>;
}

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

const MobileSelectModal: React.FC<IMobileSelectModal> = ({ setState }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Categorias</Title>
        <ExitModalIcon />
      </TitleContainer>
      <CategoriesContainer>
        <CategorieTitle onClick={() => setState(PAGE_DATA['AGENTS'])}>Colaboradores</CategorieTitle>
        <CategorieTitle onClick={() => setState(PAGE_DATA['ROLES'])}>Cargos</CategorieTitle>
      </CategoriesContainer>
    </Container>
  )
}

export default MobileSelectModal;
