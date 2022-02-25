import { useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import HeaderMobile from './HeaderMobile';
import LoadMoreIcon from './LoadMoreIcon';
import MobileSelectModal from './MobileSelectModal';
import PageTitle from './PageTitle';
import { PAGE_DATA } from '../src/data';
import AgentsMobile from './AgentsMobile';
import RolesMobile from './RolesMobile';
import ThreeDotsIconMobile from './ThreeDotsIconMobile';

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
  margin-top: 40px;
`;

const SelectPageDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border: 2px solid #CAD6D1;
  border-color: #CAD6D1;
  border-radius: 8px;
  width: 100%;
  height: 56px;
  margin-bottom: 20px;
`;

const SelectPageTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #587169;
  margin-left: 20px;
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

  const [pageData, setPageData] = useState<string>(PAGE_DATA['AGENTS'])
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
            <SelectPageDataContainer>
              <SelectPageTitle>{pageData === PAGE_DATA['AGENTS'] ? 'Colaboradores' : 'Cargos'}</SelectPageTitle>
              <ThreeDotsIconMobile setState={setShowModal}/>
            </SelectPageDataContainer>
          </TextFieldContainer>
          {showModal && 
            <MobileSelectModal setState={setPageData} setShowModal={setShowModal}/>
          }
          {pageData === PAGE_DATA['AGENTS'] ?
            <AgentsMobile />
          :
            <RolesMobile />
          }
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
