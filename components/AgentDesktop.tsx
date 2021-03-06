import styled from 'styled-components';
import BackPageIcon from './BackPageIcon';
import Dropdown from './Dropdown';
import Header from './Header';
import LeftMenu from './LeftMenu';
import Main from './Main';
import PageTitle from './PageTitle';
import PageWrapper from './PageWrapper';
import { useContext, useEffect, useState } from 'react';
import { challengeApi } from '../api/ChallengeApi';
import { IAgentDetail } from '../src/interfaces';
import DetailsContainer from './DetailsContainer';
import UserInformation from './UserInformation';
import { ApplicationContext } from '../src/context/ApplicationContextProvider';

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  min-height: 1020px;
  background-color: #E5E5E5;
  padding: 50px 100px;

  @media only screen and (max-width: 1300px) {
    padding: 50px 0;
  }
`;

const PersonalInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Title = styled.div``

const OrganizationDetailsTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 24px;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;

const PersonalInformationTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;

  @media only screen and (max-width: 1300px) {
    width: 75%;
    margin-left: 8%;
  }
`;

const OrganizationalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #EAEFED;
  border-radius: 8px;
  padding: 24px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-self: center;
    width: 75%;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    width: 100%;
  }
`;

const AgentDesktop = () => {
  const {roles} = useContext(ApplicationContext)
  const [agent, setAgent] = useState<IAgentDetail>({
    id: 0,
    name: '',
    email: '',
    phone: {
      ddd: '',
      ddi: '',
      number: ''
    },
    document: {
      type: '',
      number: ''
    },
    birth_date: new Date(),
    image: '',
    department: '',
    branch: '',
    role: '',
    status: ''
  })
  
  const [department, setDepartment] = useState<string>('Comercial')
  const [role, setRole] = useState<string>('Diretor')
  const [branch, setBranch] = useState<string>('Farm??cia Pedido Pago')
  const [status, setStatus] = useState<string>('Ativo')

  const fetchAgent = async () => {
    await challengeApi
      .getAgent()
      .then(response => {
        setAgent(response.agent)
        setRole(response.agent.role)
        setDepartment(response.agent.department)
        setStatus(response.agent.status === 'active' ? 'Ativo': 'Inativo')
        setBranch(response.agent.branch)
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
  }, [])

  return (
    <PageWrapper>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>
            <BackPageIcon link='/'/>
            <Title>Detalhes do colaborador</Title>
          </PageTitle>
          <Main>
            <UserInformation agent={agent} />
            <PersonalInformationsContainer>
              <PersonalInformationTitle>Informa????es pessoais</PersonalInformationTitle>
              <DetailsContainer agent={agent} />
            </PersonalInformationsContainer>
            <OrganizationalDataContainer>
              <OrganizationDetailsTitle>Dados organizacionais</OrganizationDetailsTitle>
              <DropdownContainer>
                <Dropdown value={department} values={selectDepartments()} label='Departamento' onChange={setDepartment} />
                <Dropdown value={role} values={selectRolesNames()} label='Cargo' onChange={setRole} />
              </DropdownContainer>
              <DropdownContainer>
                <Dropdown value={branch} values={['Farm??cia Pedido Pago']} label='Unidade' onChange={setBranch} />
                <Dropdown value={status} values={['Ativo', 'Inativo']} label='Status' onChange={setStatus} />
              </DropdownContainer>
            </OrganizationalDataContainer>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default AgentDesktop;
