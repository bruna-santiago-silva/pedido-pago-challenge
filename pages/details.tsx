import styled from 'styled-components';
import BackPageIcon from '../components/BackPageIcon';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import PageWrapper from '../components/PageWrapper';
import { useEffect, useState } from 'react';
import { challengeApi } from '../api/ChallengeApi';
import { IAgentDetail, IRole } from '../src/interfaces';
import DetailsContainer from '../components/DetailsContainer';

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

export const UserInformationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
`;

export const UserEmail = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #587169;
`;

export const PersonalInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
`;

export const PhoneContainer = styled.div``;

export const BirthDateContainer = styled.div``;

export const OrganizationalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #EAEFED;
  border-radius: 8px;
  padding: 24px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = () => {
  const [agent, setAgent] = useState<IAgentDetail>({
    id: 0,
    name: '',
    email: '',
    phone: {
      ddd: '',
      ddi: '',
      number: '',
    },
    document: {
      type: '',
      number: '',
    },
    birth_date: new Date(),
    image: '',
    department: '',
    branch: '',
    role: '',
    status: '',
  })
  const [roles, setRoles] = useState<IRole[]>([{
    name: '',
    departament: '',
    agents_quantity: 0
  }])
  const [department, setDepartment] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [branch, setBranch] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const fetchAgent = async () => {
    await challengeApi
      .getAgent()
      .then(response => {
        setAgent(response.agent)
        setRole(response.agent.role)
        setDepartment(response.agent.department)
        setStatus(response.agent.status)
        setBranch(response.agent.branch)
      })
      .catch(error => console.log(error))
  }

  const fetchRoles = async () => {
    await challengeApi
      .getRoles()
      .then(response => {
        setRoles(response.roles)
      })
      .catch(error => console.log(error))
  }

  const selectRolesNames = () => {
    const rolesNameArray = [] 
    roles.forEach(role => {
      if (!rolesNameArray.includes(role.name)) {
        rolesNameArray.push(role.name)
      }
    })
    return rolesNameArray
  }

  const selectDepartments = () => {
    const departments = [] 
    roles.forEach(role => {
      if (!departments.includes(role.departament)) {
        departments.push(role.departament)
      }
    })
    return departments
  }

  useEffect(() => {
    fetchAgent()
    fetchRoles()
  }, [])

  return (
    <PageWrapper>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>
           <BackPageIcon link='/'/>
            Detalhes do colaborador
          </PageTitle>
          <Main>
            <UserInformationContainer>
              <UserAvatar src={`${agent.image}`} />
              <UserDataContainer>
                <UserName>{agent.name}</UserName>
                <UserEmail>{agent.email}</UserEmail>
              </UserDataContainer>
            </UserInformationContainer>
            <PersonalInformationsContainer>
              <SubTitle>Informações pessoais</SubTitle>
              <DetailsContainer agent={agent}/>
            </PersonalInformationsContainer>
            <OrganizationalDataContainer>
              <SubTitle>Dados organizacionais</SubTitle>
              <DropdownContainer>
                <Dropdown value={department} values={selectDepartments()} label='Departamento' onChange={setDepartment}/>
                <Dropdown value={role} values={selectRolesNames()} label='Cargo' onChange={setRole}/>
              </DropdownContainer>
              <DropdownContainer>
                <Dropdown value={branch} values={['Farmácia Pedido Pago']} label='Unidade' onChange={setBranch}/>
                <Dropdown value={status} values={['active', 'inactive']} label='Status' onChange={setDepartment}/>
              </DropdownContainer>
            </OrganizationalDataContainer>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default Details;
