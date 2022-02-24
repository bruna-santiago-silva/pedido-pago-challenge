import { useEffect, useState } from "react";
import styled from "styled-components";
import { challengeApi } from "../api/ChallengeApi";
import { dataForAgentsTableHead } from "../src/data";
import { IAgent } from "../src/interfaces";
import AgentsTable from "./agentsTable/AgentsTable";
import InputSearch from "./InputSearch";
import Pagination from "./Pagination";

const Container = styled.div``

const ListingTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const Agents = () => {

  const [agents, setAgents] = useState<IAgent[]>([])
  const [filteredAgents, setFilteredAgents] = useState<IAgent[]>([])

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
      <AgentsTable bodyData={filteredAgents} headerData={dataForAgentsTableHead} />
      <Pagination
        setStateFunction={setFilteredAgents}
        data={agents}
      />
    </Container>
  )
}

export default Agents;
