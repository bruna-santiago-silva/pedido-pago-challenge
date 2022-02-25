import { InputAdornment } from '@mui/material';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import RoleCard from '../components/RoleCard';
import { ApplicationContext } from '../src/context/ApplicationContext';
import AgentCard from './AgentCard';
import HeaderMobile from './HeaderMobile';
import InputSearch from './InputSearch';
import LoadMoreIcon from './LoadMoreIcon';
import MobileSelectModal from './MobileSelectModal';
import PageTitle from './PageTitle';
import StyledTextField from './StyledTextField';
import ThreeDotsIcon from './ThreeDotsIcon';

const TABS = {
  AGENTS: 'agents',
  ROLES: 'roles'
}

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8FAF9;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 52px;
  margin-bottom: 40px;
  margin-top: 14px;
  border: 2px solid #B5F1DD;
  border-radius: 8px;
`;

const ButtonTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`

const MobileHome = () => {
  const { agents, filteredAgents, setFilteredAgents, filteredRoles } = useContext(ApplicationContext);

  const [cardDisplayed, setCardDisplayed] = useState<string>(TABS['AGENTS'])
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <PageWrapper>
        <HeaderMobile />
        <Container>
          <PageTitle
            style={{
              fontSize: '24px',
              marginLeft: '16px',
              marginTop: '41px',
              marginBottom: '24px',
              alignSelf: 'flex-start'
            }}
          >
            Organização
          </PageTitle>
          <Main>
            <TextFieldContainer>
              <div style={{position: 'relative'}}>
                <StyledTextField
                  placeholder='Colaboradores'
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ThreeDotsIcon modalState={showModal} setState={setShowModal}/>
                      </InputAdornment>
                    )
                  }}
                  style={{marginTop: '40px', marginBottom: '0'}}
                />
              </div>
              {showModal && 
                <MobileSelectModal />
              }
              <InputSearch
                data={agents}
                setData={setFilteredAgents}
                paramToBeFiltered='name'
                labelText='Pesquisar por'
                placeholder='Pesquise por nome ou cpf'
                style={{margin: '40px 0'}}
              />
              </TextFieldContainer>
              <Divider></Divider>
              <SubTitle>{cardDisplayed === TABS['AGENTS'] ? 'Listagem de colaboradores' : 'Listagem de cargos'}</SubTitle>
              <CardsContainer>
              {cardDisplayed === TABS['AGENTS'] ? 
                filteredAgents.map(agent => <AgentCard agent={agent}/>)
              :
                filteredRoles.map(role => <RoleCard role={role}/>)
              }
              </CardsContainer>
              <LoadMoreContainer>
                <LoadMoreIcon />
                <ButtonTitle>Carregar Mais</ButtonTitle>
              </LoadMoreContainer>
          </Main>
        </Container>
    </PageWrapper>
  )
}

export default MobileHome;
