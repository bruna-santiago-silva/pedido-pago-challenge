import { useContext } from "react";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import { ApplicationContext } from '../src/context/ApplicationContextProvider';
import RoleCard from "./RoleCard";

const Divider = styled.div`
  border: 1px solid #EAEFED;
  width: 100%;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
  align-self: start;
  margin: 40px 0 24px 16px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const RolesMobile = () => {

  const { roles, filteredRoles, setFilteredRoles } = useContext(ApplicationContext);

  const deleteRole = (name: string, departament: string) => {
    const remainFilteredAgents = filteredRoles.filter((f) => !(f.name === name && f.departament === departament))
    setFilteredRoles(remainFilteredAgents)
    window.alert('Item deletado com sucesso.')
  }
  return (
    <>
      <InputSearch
        data={roles}
        setData={setFilteredRoles}
        paramToBeFiltered='name'
        labelText='Pesquisar por'
        placeholder='Pesquise por cargo'
        style={{margin: '40px 0', width: '90%'}}
      />
      <Divider></Divider>
      <SubTitle>Listagem de cargos</SubTitle>
      <CardsContainer>
        {filteredRoles.map(role => 
          <RoleCard
            key={`${role.name}-${role.departament}-${role.agents_quantity}`}
            role={role}
            deleteRole={deleteRole}
          />
        )}
      </CardsContainer>
    </>
  )
}

export default RolesMobile;
