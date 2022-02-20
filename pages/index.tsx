import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import {
    Container,
    Header,
    LeftMenu,
    RightContainer,
    Body,
    PageTitle,
    Main,
    Top,
    TabsContainer,
    Tab,
    TabBar,
    InputSearch,
    ListingContainer,
    ListingTitle,
    Table,
    Thead,
    TrHead,
    Th,
    Tbody,
    TrBody,
    Td,
    Avatar,
    AgentName,
    PaginationContainer,
    PaginationLeftContainer,
    PaginationTitle,
    PaginationDropdown,
    Pagination,
    PaginationRightContainer,
} from '../Home/styles'
import { challengeApi } from '../api/ChallengeApi'
import { Agent } from 'http';
import ThreeDotsIcon from '../components/ThreeDotsIcon';
import Button from '../components/Button';
import NextIcon from '../components/NextIcon';
import BackIcon from '../components/BackIcon';

interface IAgents {
  agent_id: number;
    branch: string;
    department: string;
    image: string;
    name: string;
    role: string;
    status: string;
}

const Home = () => {
  const [agents, setAgents] = useState<[IAgents]>([{
    agent_id: 0,
    branch: '',
    department: '',
    image: '',
    name: '',
    role: '',
    status: '',
  }])

  console.log(agents)
  const tableHeader = ['Nome completo', 'Departamento', 'Cargo', 'Unidade', 'Status']

  const fetchAgents = async () => {
    await challengeApi
      .getAgents()
      .then((response) => {
        setAgents(response.items)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {fetchAgents()}, [])

  return (
    <Container>
      <Header>header</Header>
      <Body>
        <LeftMenu>leftmenu</LeftMenu>
        <RightContainer>
          <PageTitle>Organização</PageTitle>
          <Main>
            <Top>
              <TabsContainer>
                <Tab>Colaboradores</Tab>
                <Tab>Cargos</Tab>
              </TabsContainer>
              <TabBar>--------------------</TabBar>
            </Top>
            <InputSearch>
            <TextField
              label="Pesquisar por"
              id="outlined-size-normal"
              defaultValue="Pesquise por nome ou cpf"
            />
            </InputSearch> 
            <ListingContainer>
              <ListingTitle>Listagem de colaboradores</ListingTitle>
            </ListingContainer>
            <Table>
              <Thead>
                <TrHead>
                  {/* {tableHeader.map((th) => {
                    return(<Th key={th}>{th}</Th>)
                  })} */}
                  <Th className='nameHeader'>Nome completo</Th>
                  <Th className='departmentHeader'>Departamento</Th>
                  <Th className='roleHeader'>Cargo</Th>
                  <Th className='branchHeader'>Unidade</Th>
                  <Th className='statusHeader'>Status</Th>
                  <Th className='empty'></Th>
                </TrHead>
              </Thead>
              <Tbody>
                {agents.map((agent) => {
                  return (
                    <TrBody key={agent.agent_id}>
                      {/* <TdNameContainer>
                        <Avatar src={agent.image}/>
                        <AgentName>{agent.name}</AgentName>
                      </TdNameContainer> */}
                      <Td className='nameBody'>
                        <Avatar src={agent.image}/>
                        <AgentName>{agent.name}</AgentName>
                      </Td>
                      <Td className='departmentBody'>{agent.department}</Td>
                      <Td className='roleBody'>{agent.role}</Td>
                      <Td className='branchBody'>{agent.branch}</Td>
                      <Td className='statusBody'>{agent.status === 'active' ? 'Ativo' : 'Inativo'}</Td>
                      <Td className='dots'><ThreeDotsIcon /></Td>
                    </TrBody>
                  )
                })}
              </Tbody>
            </Table>
            <PaginationContainer>
              <PaginationLeftContainer>
                <PaginationTitle>Mostrando 10 de 50 registros</PaginationTitle>
                <PaginationDropdown></PaginationDropdown>
              </PaginationLeftContainer>
              <PaginationRightContainer>
                <Button
                  style={{
                    borderRadius: '8px 0px 0px 8px'
                  }}>
                    <BackIcon />
                </Button>
                <Pagination>1 de 10</Pagination>
                <Button><NextIcon /></Button>
              </PaginationRightContainer>
            </PaginationContainer>
          </Main>
        </RightContainer>
      </Body>
    </Container>
  )
}

export default Home;
