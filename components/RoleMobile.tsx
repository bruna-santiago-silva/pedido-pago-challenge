import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackPageIcon from './BackPageIcon';
import Main from './Main';
import PageTitle from './PageTitle';
import PageWrapper from './PageWrapper';
import PermissionsTableMobile from './permissionsTableMobile/';
import { dataForPermissionsTableHead } from '../src/data';
import { challengeApi } from '../api/ChallengeApi';
import StyledTextField from './StyledTextField';
import HeaderMobile from './HeaderMobile';

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 1020px;
  background-color: #E5E5E5;
  padding: 50px 0;
`;

const Title = styled.div`
  font-size: 20px;
`;

const SubTitle = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 35px;
  width: 100%;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 35px;
  width: 100%;
`;

const Divider = styled.div`
  border: 1px solid #EAEFED;
  width: 100%;
  margin-bottom: 40px;
`;

const DataContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoleMobile = () => {

  const [role, setRole] = useState({
    name: '',
    department: '',
    grouprules: [{
      role: '',
      permissions: ['']
    }]
  })

  const fetchRole = async () => {
    await challengeApi
      .getRole()
      .then(response => {
        setRole(response.role)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {fetchRole()}, [])
  
  return (
    <PageWrapper>
      <HeaderMobile />
      <Body>
        <RightContainer>
          <PageTitle style={{width: '100%'}}>
            <BackPageIcon link='/' style={{marginLeft: '16px'}}/>
            <Title>Cargos e permissões</Title>
          </PageTitle>
          <Main style={{width: '95%', padding: '50px 0', alignItems: 'center'}}>
            <DataContainer>
              <SubTitle>Dados do cargo</SubTitle>
              <TextFieldContainer>
                <StyledTextField label="Departamento" placeholder="SAC"/>
                <StyledTextField label="Cargo" placeholder="Analista"/>
              </TextFieldContainer>
              <Divider></Divider>
              <SubTitle>Listagem de permissões</SubTitle>
              <PermissionsTableMobile bodyData={role.grouprules} headerData={dataForPermissionsTableHead}/>
            </DataContainer>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default RoleMobile;
