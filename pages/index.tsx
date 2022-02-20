import { useEffect, useState } from 'react';
import { InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import {
    Container,
    Header,
    LogoContainer,
    UserContainer,
    AvatarUser,
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
    AvatarAgent,
    AgentName,
    PaginationContainer,
    PaginationLeftContainer,
    PaginationTitle,
    Pagination,
    PaginationRightContainer,
} from '../Home/styles'
import { challengeApi } from '../api/ChallengeApi'
import ThreeDotsIcon from '../components/ThreeDotsIcon';
import Button from '../components/Button';
import NextIcon from '../components/NextIcon';
import BackIcon from '../components/BackIcon';
import LogoIcon from '../components/LogoIcon';
import SearchIcon from '../components/SearchIcon';

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

  const [filteredAgents, setFilteredAgents] = useState([{
    agent_id: 0,
    branch: '',
    department: '',
    image: '',
    name: '',
    role: '',
    status: '',
  }])

  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchText, setSearchText] = useState<string>("")
  const [textFieldFocused, setTextFieldFocused] = useState<boolean>(false)

  const tableHeader = ['Nome completo', 'Departamento', 'Cargo', 'Unidade', 'Status']

  const fetchAgents = async () => {
    await challengeApi
      .getAgents()
      .then((response) => {
        setAgents(response.items)
        setFilteredAgents(response.items)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {fetchAgents()}, [])

  useEffect(() => {setTotalPages(Math.round(agents.length / itemsPerPage))}, [agents])

  useEffect(() => {handleChangePage()}, [currentPage])

  const handleSelectItemsPerPage = (e: SelectChangeEvent<number>) => {
    setCurrentPage(1)
    const valueAsNumber = Number(e.target.value)
    setItemsPerPage(valueAsNumber)
    const slicedAgentsArray = agents.slice(0, valueAsNumber)
    setFilteredAgents(slicedAgentsArray)
    setTotalPages(Math.round(agents.length / valueAsNumber))
  }

  const handleChangePage = () => {
    const offset = (currentPage -1) * itemsPerPage
    const slicedAgentsArray = agents.slice(offset, offset+itemsPerPage)
    setFilteredAgents(slicedAgentsArray)
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoIcon />
        </LogoContainer>
        <UserContainer>
          <AvatarUser></AvatarUser>
          {/* <User>
            <UserName></UserName>
            <UserData></UserData>
          </User> */}
        </UserContainer>
      </Header>
      <Body>
        <LeftMenu></LeftMenu>
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
                className='searchTextField'
                label="Pesquisar por"
                placeholder="Pesquise por nome ou cpf"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setTextFieldFocused(true)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </InputSearch> 
            {/* <ListingContainer> */}
              <ListingTitle>Listagem de colaboradores</ListingTitle>
            {/* </ListingContainer> */}
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
                {filteredAgents.map((agent) => {
                  return (
                    <TrBody key={agent.agent_id}>
                      {/* <TdNameContainer>
                        <AvatarAgent src={agent.image}/>
                        <AgentName>{agent.name}</AgentName>
                      </TdNameContainer> */}
                      <Td className='nameBody'>
                        <AvatarAgent src={agent.image}/>
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
                <Select
                  labelId="itemsPerPage"
                  id="itemsPerPage"
                  value={itemsPerPage}
                  label="itemsPerPage"
                  onChange={(e) => handleSelectItemsPerPage(e)}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </PaginationLeftContainer>
              <PaginationRightContainer>
                <Button
                  style={{
                    borderRadius: '8px 0px 0px 8px'
                  }}
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  <BackIcon />
                </Button>
                <Pagination>{`${currentPage} de ${totalPages}`}</Pagination>
                <Button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <NextIcon />
                </Button>
              </PaginationRightContainer>
            </PaginationContainer>
          </Main>
        </RightContainer>
      </Body>
    </Container>
  )
}

export default Home;
