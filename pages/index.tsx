import { ChangeEvent, useEffect, useState } from 'react';
import { InputAdornment, SelectChangeEvent, TextField } from '@mui/material';
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
import AgentsTable from '../components/agentsTable/AgentsTable';
import { IAgent } from '../src/interfaces';
import { dataForAgentsTableHead, dataForRolesTableHead } from '../src/data';
import Pagination from '../components/Pagination';
import Main from '../components/Main';
import TabsContainer from '../components/TabsContainer';
import PageWrapper from '../components/PageWrapper';
import RolesTable from '../components/rolesTable/RolesTable';

const TABS = {
  AGENTS: 'agents',
  ROLES: 'roles'
}

const Home = () => {
  // const [agents, setAgents] = useState<IAgent[]>([{
  //   agent_id: 0,
  //   branch: '',
  //   department: '',
  //   image: '',
  //   name: '',
  //   role: '',
  //   status: '',
  // }])

  const [agents,setAgents] = useState<IAgent[]>([
    {
      "agent_id": 1,
      "name": "Kai Cunha Lima",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 2,
      "name": "Kaua Gomes Castro",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Gerente",
      "status": "inactive"
    },
    {
      "agent_id": 3,
      "name": "Brenda Cunha Pinto",
      "image": "https://picsum.photos/200",
      "department": "Comercial",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 4,
      "name": "Rodrigo Correia Ferreira",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 5,
      "name": "Livia Goncalves Dias",
      "image": "https://picsum.photos/200",
      "department": "Suporte",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 6,
      "name": "Larissa Araujo Pereira",
      "image": "https://picsum.photos/200",
      "department": "Marketing",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 7,
      "name": "Camila Rodrigues Ribeiro",
      "image": "https://picsum.photos/200",
      "department": "SAC",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 8,
      "name": "Fernanda Barbosa Almeida",
      "image": "https://picsum.photos/200",
      "department": "Marketing",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 9,
      "name": "Luiza Cunha Araujo",
      "image": "https://picsum.photos/200",
      "department": "SAC",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "inactive"
    }
  ])

  // const [filteredAgents, setFilteredAgents] = useState<IAgent[]>([{
  //   agent_id: 0,
  //   branch: '',
  //   department: '',
  //   image: '',
  //   name: '',
  //   role: '',
  //   status: '',
  // }])

  const [filteredAgents, setFilteredAgents] = useState<IAgent[]>([
    {
      "agent_id": 1,
      "name": "Kai Cunha Lima",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 2,
      "name": "Kaua Gomes Castro",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Gerente",
      "status": "inactive"
    },
    {
      "agent_id": 3,
      "name": "Brenda Cunha Pinto",
      "image": "https://picsum.photos/200",
      "department": "Comercial",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 4,
      "name": "Rodrigo Correia Ferreira",
      "image": "https://picsum.photos/200",
      "department": "Administrativo",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 5,
      "name": "Livia Goncalves Dias",
      "image": "https://picsum.photos/200",
      "department": "Suporte",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 6,
      "name": "Larissa Araujo Pereira",
      "image": "https://picsum.photos/200",
      "department": "Marketing",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "active"
    },
    {
      "agent_id": 7,
      "name": "Camila Rodrigues Ribeiro",
      "image": "https://picsum.photos/200",
      "department": "SAC",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 8,
      "name": "Fernanda Barbosa Almeida",
      "image": "https://picsum.photos/200",
      "department": "Marketing",
      "branch": "Farmácia Pedido Pago",
      "role": "Diretor",
      "status": "active"
    },
    {
      "agent_id": 9,
      "name": "Luiza Cunha Araujo",
      "image": "https://picsum.photos/200",
      "department": "SAC",
      "branch": "Farmácia Pedido Pago",
      "role": "Analista",
      "status": "inactive"
    }
  ])

  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [searchText, setSearchText] = useState<string>('')
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [tabDisplayed, setTabDisplayed] = useState<string>(TABS['AGENTS'])

  // const [roles, setRoles] = useState([{
  //   "name": "",
  //   "departament": "",
  //   "agents_quantity": 0
  // }])

  const [roles, setRoles] = useState([
    {
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
    }
  ])

  const fetchAgents = async () => {
    await challengeApi
      .getAgents()
      .then(response => {
        setAgents(response.items)
        setFilteredAgents(response.items)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => { fetchAgents() }, [])

  useEffect(() => { setTotalPages(Math.round(agents.length / itemsPerPage)) }, [agents])
  useEffect(() => { setTotalPages(Math.round(roles.length / itemsPerPage)) }, [roles])

  useEffect(() => { handleChangePage() }, [currentPage])

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

  const filterAgentsBySearchText = (searchTerm: string) => {
    const filteredAgentsCopy = agents.filter((agent) => {
      return agent.name.toLowerCase().includes(searchTerm.toLowerCase())}
    )
    return filteredAgentsCopy
  }

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(e.target.value)
    const searchResult = filterAgentsBySearchText(e.target.value)
    setFilteredAgents(searchResult)
  }

  const fetchRoles = async () => {
    await challengeApi
      .getRoles()
      .then(response => {
        setRoles(response.roles)
      })
      .catch(error => console.log(error))
  }

  return (
    <PageWrapper>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>Organização</PageTitle>
          <Main>
            <TabsContainer selectedTab={selectedTab} handleTabChange={handleTabChange} setTabDisplayed={setTabDisplayed}/>
            <InputSearch>
              <TextField
                className='searchTextField'
                label="Pesquisar por"
                placeholder="Pesquise por nome ou cpf"
                value={searchText}
                onChange={e => handleSearch(e)}
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
            {tabDisplayed === TABS['AGENTS']
            ? 
              <AgentsTable bodyData={filteredAgents} headerData={dataForAgentsTableHead} />
            :
              <RolesTable bodyData={roles} headerData={dataForRolesTableHead} />
            }
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
