import { useEffect, useState } from 'react';
import { InputAdornment, SelectChangeEvent, Tab, Tabs, TextField } from '@mui/material';
import {
    RightContainer,
    Body,
    InputSearch,
    ListingTitle,
} from '../Home/styles'
import { challengeApi } from '../api/ChallengeApi'
import SearchIcon from '../components/SearchIcon';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import PageTitle from '../components/PageTitle';
import AgentsTable from '../components/AgentsTable';
import { IAgent } from '../src/interfaces';
import { dataForAgentsTableHead } from '../src/data';
import Pagination from '../components/Pagination';
import Main from '../components/Main';
import TabsContainer from '../components/TabsContainer';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const [agents, setAgents] = useState<IAgent[]>([{
    agent_id: 0,
    branch: '',
    department: '',
    image: '',
    name: '',
    role: '',
    status: '',
  }])

  const [filteredAgents, setFilteredAgents] = useState<IAgent[]>([{
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
    <PageWrapper>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>Organização</PageTitle>
          <Main>
            <TabsContainer selectedTab={selectedTab} handleTabChange={handleTabChange}/>
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
            <AgentsTable bodyData={filteredAgents} headerData={dataForAgentsTableHead} />
            <Pagination 
              itemsPerPage={itemsPerPage}
              agents={agents}
              handleSelectItemsPerPage={handleSelectItemsPerPage}
              goToPreviousPage={goToPreviousPage}
              currentPage={currentPage}
              totalPages={totalPages}
              goToNextPage={goToNextPage}
            />
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default Home;
