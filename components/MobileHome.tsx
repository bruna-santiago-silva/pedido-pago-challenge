import { InputAdornment } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import AgentCard from './AgentCard';
import HeaderMobile from './HeaderMobile';
import InputSearch from './InputSearch';
import PageTitle from './PageTitle';
import StyledTextField from './StyledTextField';
import ThreeDotsIcon from './ThreeDotsIcon';

const TABS = {
  AGENTS: 'agents',
  ROLES: 'roles'
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  /* border: 1px solid black; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E5E5E5;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const Divider = styled.div`
  border: 1px solid #EAEFED;
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
  align-self: start;
  margin: 40px 0 24px 16px;
`;

const CardsContainer = styled.div`
  width: 100%;
`;

const MobileHome = () => {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <PageWrapper>
        <HeaderMobile />
        <Container>
          <PageTitle>Organização</PageTitle>
          <Main>
            <TextFieldContainer>
              <StyledTextField
                placeholder='Colaboradores'
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ThreeDotsIcon />
                    </InputAdornment>
                  )
                }}
                style={{marginTop: '40px', marginBottom: '0'}}
              />
              <InputSearch
                data={[]}
                setData={setSearchText}
                paramToBeFiltered='name'
                labelText='Pesquisar por'
                placeholder='Pesquise por nome ou cpf'
                style={{margin: '40px 0'}}
              />
             </TextFieldContainer>
             <Divider></Divider>
             <SubTitle>Listagem de colaboradores</SubTitle>
             <CardsContainer>
              {/* {[].map((card) => <AgentCard agent=>)} */}
             </CardsContainer>
          </Main>
        </Container>
    </PageWrapper>
  )
}

export default MobileHome;
