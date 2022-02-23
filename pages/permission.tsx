import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import BackPageIcon from '../components/BackPageIcon';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import PageWrapper from '../components/PageWrapper';
import PermissionsTable from '../components/permissionsTable/PermissionsTable';
import { dataForPermissionsTableHead } from '../src/data';
import { challengeApi } from '../api/ChallengeApi';
import { IPermissions } from '../src/interfaces';


export const Body = styled.div`
  display: flex;
  width: 100%;
  /* height: 1200px; */
  height: 100%;
  /* border: 1px solid green; */
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  background-color: #E5E5E5;
  padding: 50px 100px;
  /* border: 1px solid black; */
`;

export const Title = styled.div``;

export const SubTitle = styled.div`
font-size: 16px;
font-weight: 600;
color: #34423D;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Permission: React.FC<IPermissions> = () => {

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
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>
            <BackPageIcon link='/'/>
            <Title>Cargos e permissões</Title>
          </PageTitle>
          <Main>
            <SubTitle>Dados do cargo</SubTitle>
            <TextFieldContainer>
              <TextField
                  className='searchTextField'
                  label="Departamento"
                  placeholder="SAC"
                  // value=''
                  // onChange={}
                  style={{
                    color: '#A3B8B0',
                    borderColor: '#CAD6D1',
                    borderRadius: '8px',
                    width: '48%',
                  }}
                />
                <TextField
                  className='searchTextField'
                  label="Cargo"
                  placeholder="Analista"
                  // value=''
                  // onChange={}
                  style={{
                    color: '#A3B8B0',
                    borderColor: '#CAD6D1',
                    borderRadius: '8px',
                    width: '48%',
                  }}
                />
            </TextFieldContainer>
            <SubTitle>Listagem de permissões</SubTitle>
            <PermissionsTable bodyData={role.grouprules} headerData={dataForPermissionsTableHead}/>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default Permission;
