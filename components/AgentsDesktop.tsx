import { useContext } from 'react';
import styled from 'styled-components';
import { dataForAgentsTableHead } from '../src/data';
import AgentsTable from './agentsTable/AgentsTable';
import InputSearch from './InputSearch';
import Pagination from './Pagination';
import { ApplicationContext } from '../src/context/ApplicationContext';

const Container = styled.div``

const ListingTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const AgentsDesktop = () => {
  const { agents, filteredAgents, setFilteredAgents } = useContext(ApplicationContext)

  const deleteAgent = (id: number) => {
    const remainFilteredAgents = filteredAgents.filter((f) => !(f.agent_id === id))
    setFilteredAgents(remainFilteredAgents)
  }

  return( 
    <Container>
      <InputSearch
        data={agents}
        setData={setFilteredAgents}
        paramToBeFiltered='name'
        labelText='Pesquisar por'
        placeholder='Pesquise por nome ou cpf'
      />
      <ListingTitle>Listagem de colaboradores</ListingTitle>
      <AgentsTable bodyData={filteredAgents} headerData={dataForAgentsTableHead} deleteAgent={deleteAgent}/>
      <Pagination
        setStateFunction={setFilteredAgents}
        data={agents}
        filteredData={filteredAgents}
      />
    </Container>
  )
}

export default AgentsDesktop;
