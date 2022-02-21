import styled from 'styled-components';
import BackPageIcon from '../components/BackPageIcon';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import PageWrapper from '../components/PageWrapper';
import { useState } from 'react';
import DocumentIcon from '../components/DocumentIcon';
import PhoneIcon from '../components/PhoneIcon';
import CalendarIcon from '../components/CalendarIcon';

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

export const UserInformationContainer = styled.div``;

export const UserAvatar = styled.img``;

export const UserDataContainer = styled.div``;

export const UserName = styled.div``;

export const UserEmail = styled.div``;

export const PersonalInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonalInformationsTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
`;


export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  width: 31%;
  height: 70px;
  background-color: #F5FAF8;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
`;

export const PhoneContainer = styled.div``;

export const BirthDateContainer = styled.div``;

export const OrganizationalDataContainer = styled.div``;

export const DropdownContainer = styled.div``;

const Details = () => {
const [department, setDepartment] = useState()
const [role, setRole] = useState()
const [branch, setBranch] = useState()
const [status, setStatus] = useState()

  return (
    <PageWrapper>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>
           <BackPageIcon />
            Detalhes do colaborador
          </PageTitle>
          <Main>
            <UserInformationContainer>
              <UserAvatar src='' />
              <UserDataContainer>
                <UserName></UserName>
                <UserEmail></UserEmail>
              </UserDataContainer>
            </UserInformationContainer>
            <PersonalInformationsContainer>
              <PersonalInformationsTitle>Informações  pessoais</PersonalInformationsTitle>
              <DataContainer>
                <Data>
                  <DocumentIcon />
                </Data>
                <Data>
                  <PhoneIcon />
                </Data>
                <Data>
                  <CalendarIcon />
                </Data>
              </DataContainer>
            </PersonalInformationsContainer>
            <OrganizationalDataContainer>
              <DropdownContainer>
                <Dropdown values={department} label='Departamento' />
                <Dropdown values={role} label='Cargo' />
              </DropdownContainer>
              <DropdownContainer>
                <Dropdown values={branch} label='Unidade' />
                <Dropdown values={status} label='Status' />
              </DropdownContainer>
            </OrganizationalDataContainer>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default Details;
