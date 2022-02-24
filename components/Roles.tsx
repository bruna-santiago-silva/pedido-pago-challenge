import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { challengeApi } from '../api/ChallengeApi';
import { dataForRolesTableHead } from '../src/data';
import InputSearch from './InputSearch';
import Pagination from './Pagination';
import RolesTable from './rolesTable/RolesTable';
import { IRole } from '../src/interfaces';

const Container = styled.div``

const ListingTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const Roles = ({ }) => {

  const [roles, setRoles] = useState<IRole[]>([])
    // {
    //   "name": "Supervisor",
    //   "departament": "SAC",
    //   "agents_quantity": 5
    // },
    // {
    //   "name": "Gerente",
    //   "departament": "Eventos",
    //   "agents_quantity": 2
    // },
    // {
    //   "name": "Analista",
    //   "departament": "Produtivo",
    //   "agents_quantity": 3
    // },
    // {
    //   "name": "Gerente",
    //   "departament": "Garantia de qualidade",
    //   "agents_quantity": 2
    // },
    // {
    //   "name": "Supervisor",
    //   "departament": "Comercial",
    //   "agents_quantity": 4
    // },
    // {
    //   "name": "Supervisor",
    //   "departament": "Marketing",
    //   "agents_quantity": 3
    // },
    // {
    //   "name": "Gerente",
    //   "departament": "Visitação Médica",
    //   "agents_quantity": 4
    // },
    // {
    //   "name": "Analista",
    //   "departament": "Marketing",
    //   "agents_quantity": 1
    // },
    // {
    //   "name": "Diretor",
    //   "departament": "Administrativo",
    //   "agents_quantity": 2
    // },
    // {
    //   "name": "Analista",
    //   "departament": "Eventos",
    //   "agents_quantity": 2
    // }

  const [filteredRoles, setFilteredRoles] = useState<IRole[]>([])
    // {
    //   "name": "Supervisor",
    //   "departament": "SAC",
    //   "agents_quantity": 5
    // },
    // {
    //   "name": "Gerente",
    //   "departament": "Eventos",
    //   "agents_quantity": 2
    // },
    // {
    //   "name": "Analista",
    //   "departament": "Produtivo",
    //   "agents_quantity": 3
    // },
    // {
    //   "name": "Gerente",
    //   "departament": "Garantia de qualidade",
    //   "agents_quantity": 2
    // },
    // {
    //   "name": "Supervisor",
    //   "departament": "Comercial",
    //   "agents_quantity": 4
    // },
    // {
    //   "name": "Supervisor",
    //   "departament": "Marketing",
    //   "agents_quantity": 3
    // },
    // {
    //   "name": "Gerente",
    //   "departament": "Visitação Médica",
    //   "agents_quantity": 4
    // },
    // {
    //   "name": "Analista",
    //   "departament": "Marketing",
    //   "agents_quantity": 1
    // },
    // {
    //   "name": "Diretor",
    //   "departament": "Administrativo",
    //   "agents_quantity": 2
    // },
    // {
    //   "name": "Analista",
    //   "departament": "Eventos",
    //   "agents_quantity": 2
    // }
  
  
  const fetchRoles = async () => {
    await challengeApi
      .getRoles()
      .then(response => {
        setRoles(response.roles)
        setFilteredRoles(response.roles)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => { fetchRoles() }, [])
  return( 
    <Container>
      <InputSearch
        data={roles}
        setData={setFilteredRoles}
        paramToBeFiltered='name'
        labelText='Pesquisar por'
        placeholder='Pesquise por cargos'
      />
      <ListingTitle>Listagem de cargos</ListingTitle>
      <RolesTable bodyData={filteredRoles} headerData={dataForRolesTableHead} />
      <Pagination
        setStateFunction={setFilteredRoles}
        data={roles}
      />
    </Container>
  )
}

export default Roles;
