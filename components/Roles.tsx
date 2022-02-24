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

const Roles = () => {

  const [roles, setRoles] = useState<IRole[]>([])
  const [filteredRoles, setFilteredRoles] = useState<IRole[]>([])
  
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
