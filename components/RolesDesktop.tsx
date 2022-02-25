import { useContext } from 'react';
import styled from 'styled-components';
import { dataForRolesTableHead } from '../src/data';
import InputSearch from './InputSearch';
import Pagination from './Pagination';
import RolesTable from './rolesTable/RolesTable';
import { ApplicationContext } from '../src/context/ApplicationContext';

const Container = styled.div``

const ListingTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const RolesDesktop = () => {
  const { roles, filteredRoles, setFilteredRoles } = useContext(ApplicationContext)

  const deleteRole = (name: string, departament: string) => {
    const remainFilteredAgents = filteredRoles.filter((f) => !(f.name === name && f.departament === departament))
    setFilteredRoles(remainFilteredAgents)
  }

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
      <RolesTable bodyData={filteredRoles} headerData={dataForRolesTableHead} deleteRole={deleteRole}/>
      <Pagination
        setStateFunction={setFilteredRoles}
        data={roles}
        filteredData={filteredRoles}
      />
    </Container>
  )
}

export default RolesDesktop;
