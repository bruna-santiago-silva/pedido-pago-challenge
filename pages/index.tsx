import { useEffect, useState } from 'react';
import { Box, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Tab, Tabs, TextField } from '@mui/material';
import {
    Container,
    // Header,
    // LogoContainer,
    // UserContainer,
    // UserAvatar,
    // User,
    // UserName,
    // UserData,
    // LeftMenu,
    RightContainer,
    Body,
    // PageTitle,
    Main,
    Top,
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
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import PageTitle from '../components/PageTitle';

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
  const [searchText, setSearchText] = useState<string>('')
  const [selectedTab, setSelectedTab] = useState<number>(0)

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

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  const filterAgentsBySearchText = (searchTerm) => {
    const filteredAgentsCopy = agents.filter((agent) => {
      return agent.name.toLowerCase().includes(searchTerm.toLowerCase())}
    )
    return filteredAgentsCopy
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value)
    const searchResult = filterAgentsBySearchText(e.target.value)
    setFilteredAgents(searchResult)
  }

  return (
    <Container>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>Organização</PageTitle>
          <Main>
            <Top>
              <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={selectedTab} onChange={handleTabChange} >
                  <Tab label="Colaboradores" style={{fontSize: '14px', fontWeight: '600', color: '#34423D', width: '24%', maxWidth: '196px'}} />
                  <Tab label="Cargos" style={{fontSize: '14px', fontWeight: '600', color: '#34423D', width: '24%', maxWidth: '196px'}} />
                </Tabs>
              </Box>
            </Top>
            <InputSearch>
              <TextField
                className='searchTextField'
                label="Pesquisar por"
                placeholder="Pesquise por nome ou cpf"
                value={searchText}
                onChange={(e) => handleSearch(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </InputSearch> 
              <ListingTitle>Listagem de colaboradores</ListingTitle>
            <Table>
              <Thead>
                <TrHead>
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
