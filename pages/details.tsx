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
import UserInformation from '../components/UserInformation';

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

export const PersonalInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Title = styled.div``

export const OrganizationDetailsTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 24px;
  /* border: 1px solid green; */

  @media only screen and (max-width: 1300px) {
    width: 75%;
    margin-left: 8%;
  }
`;

export const PersonalInformationTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
  /* margin-bottom: 24px; */
  /* border: 1px solid green; */

  @media only screen and (max-width: 1300px) {
    width: 75%;
    margin-left: 8%;
  }
`;

export const PhoneContainer = styled.div``;

export const BirthDateContainer = styled.div``;

export const OrganizationalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #EAEFED;
  border-radius: 8px;
  padding: 24px;
  /* border: 1px solid blue; */

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-self: center;
    width: 75%;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid blue; */

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Details = () => {
  // const [agent, setAgent] = useState<IAgentDetail>({
  //   id: 0,
  //   name: '',
  //   email: '',
  //   phone: {
  //     ddd: '',
  //     ddi: '',
  //     number: '',
  //   },
  //   document: {
  //     type: '',
  //     number: '',
  //   },
  //   birth_date: new Date(),
  //   image: '',
  //   department: '',
  //   branch: '',
  //   role: '',
  //   status: '',
  // })
  const [agent, setAgent] = useState<IAgentDetail>({
    "id": 1,
    "name": "Kai Cunha Lima",
    "email": "kaicunhalinha@email.com",
    "phone": {
      "ddd": "11",
      "ddi": "55",
      "number": "987654321"
    },
    "document": {
      "type": "CPF",
      "number": "12345678901"
    },
    "birth_date": new Date("2022-02-14T23:15:14.715Z"),
    "image": "https://picsum.photos/200",
    "department": "Administrativo",
    "branch": "Farmácia Pedido Pago",
    "role": "Diretor",
    "status": "active"
  })
  // const [roles, setRoles] = useState<IRole[]>([{
  //   name: '',
  //   departament: '',
  //   agents_quantity: 0
  // }])
  const [roles, setRoles] = useState<IRole[]>([{
    "name": "Supervisor",
    "departament": "SAC",
    "agents_quantity": 5
  },
  {
    "name": "Gerente",
    "departament": "Eventos",
    "agents_quantity": 2
  },
  {
    "name": "Analista",
    "departament": "Produtivo",
    "agents_quantity": 3
  },
  {
    "name": "Gerente",
    "departament": "Garantia de qualidade",
    "agents_quantity": 2
  },
  {
    "name": "Supervisor",
    "departament": "Comercial",
    "agents_quantity": 4
  },
  {
    "name": "Supervisor",
    "departament": "Marketing",
    "agents_quantity": 3
  },
  {
    "name": "Gerente",
    "departament": "Visitação Médica",
    "agents_quantity": 4
  },
  {
    "name": "Analista",
    "departament": "Marketing",
    "agents_quantity": 1
  },
  {
    "name": "Diretor",
    "departament": "Administrativo",
    "agents_quantity": 2
  },
  {
    "name": "Analista",
    "departament": "Eventos",
    "agents_quantity": 2
  }])

  const [department, setDepartment] = useState<string>('Administrativo')
  const [role, setRole] = useState<string>('Diretor')
  const [branch, setBranch] = useState<string>('Farmácia Pedido Pago')
  const [status, setStatus] = useState<string>('active')

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
            <Title>Detalhes do colaborador</Title>
          </PageTitle>
          <Main>
            <UserInformation agent={agent} />
            <PersonalInformationsContainer>
              <PersonalInformationTitle>Informações pessoais</PersonalInformationTitle>
              <DetailsContainer agent={agent} />
            </PersonalInformationsContainer>
            <OrganizationalDataContainer>
              <OrganizationDetailsTitle>Dados organizacionais</OrganizationDetailsTitle>
              <DropdownContainer>
                <Dropdown value={department} values={selectDepartments()} label='Departamento' onChange={setDepartment} />
                <Dropdown value={role} values={selectRolesNames()} label='Cargo' onChange={setRole} />
              </DropdownContainer>
              <DropdownContainer>
                <Dropdown value={branch} values={['Farmácia Pedido Pago']} label='Unidade' onChange={setBranch} />
                <Dropdown value={status} values={['active', 'inactive']} label='Status' onChange={setStatus} />
              </DropdownContainer>
            </OrganizationalDataContainer>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default Details;
