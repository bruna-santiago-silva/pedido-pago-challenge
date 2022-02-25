import { useContext } from "react";
import styled from "styled-components";
import AgentCard from "./AgentCard";
import InputSearch from "./InputSearch";
import { ApplicationContext } from '../src/context/ApplicationContext';

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

const AgentsMobile = () => {
  
  const { agents, filteredAgents, setFilteredAgents } = useContext(ApplicationContext);

  const deleteAgent = (id: number) => {
    const remainFilteredAgents = filteredAgents.filter((f) => !(f.agent_id === id))
    setFilteredAgents(remainFilteredAgents)
  }
  return (
    <>
      <InputSearch
        data={agents}
        setData={setFilteredAgents}
        paramToBeFiltered='name'
        labelText='Pesquisar por'
        placeholder='Pesquise por nome ou cpf'
        style={{margin: '40px 0', width: '90%'}}
      />
      <Divider></Divider>
      <SubTitle>Listagem de colaboradores</SubTitle>
      <CardsContainer>
        {filteredAgents.map(agent =>
          <AgentCard key={agent.agent_id} agent={agent} deleteAgent={deleteAgent}/>
        )}
      </CardsContainer>
    </>
  )
}

export default AgentsMobile;
