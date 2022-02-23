import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { challengeApi } from "../api/ChallengeApi";
import { dataForAgentsTableHead } from "../src/data";
import { IAgent } from "../src/interfaces";
import AgentsTable from "./agentsTable/AgentsTable";
import InputSearch from "./InputSearch";
import Pagination from "./Pagination";

const Container = styled.div`

`

const ListingTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const Agents = ({ }) => {
  const [agents, setAgents] = useState<IAgent[]>([
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

  const fetchAgents = async () => {
    await challengeApi
      .getAgents()
      .then(response => {
        setAgents(response.items)
        setFilteredAgents(response.items)
      })
      .catch(error => console.log(error))
  }

  const handleSelectItemsPerPage = (e: SelectChangeEvent<number>) => {
    setCurrentPage(1)
    const valueAsNumber = Number(e.target.value)
    setItemsPerPage(valueAsNumber)
    const slicedAgentsArray = agents.slice(0, valueAsNumber)
    setFilteredAgents(slicedAgentsArray)
    setTotalPages(Math.round(agents.length / valueAsNumber))
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleChangePage = () => {
    const offset = (currentPage -1) * itemsPerPage
    const slicedAgentsArray = agents.slice(offset, offset+itemsPerPage)
    setFilteredAgents(slicedAgentsArray)
  }

  useEffect(() => { fetchAgents() }, [])
  useEffect(() => { setTotalPages(Math.round(agents.length / itemsPerPage)) }, [agents])
  useEffect(() => { handleChangePage() }, [currentPage])

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
        itemsPerPage={itemsPerPage}
        agents={agents}
        handleSelectItemsPerPage={handleSelectItemsPerPage}
        goToPreviousPage={goToPreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
      />
    </Container>
  )
}

export default Agents;
