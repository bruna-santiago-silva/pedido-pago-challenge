import { useState } from 'react';
import styled from 'styled-components';
import AgentModal from '../AgentModal';
import ThreeDotsIcon from '../ThreeDotsIcon';
import { IStatus } from '../../src/interfaces';

interface ITableBodyRow {
  agent: {
    agent_id: number;
    image: string;
    name: string;
    department: string;
    role: string;
    branch: string;
    status: string;
  }
  deleteAgent: (id: number) => void;
}

const TrBody = styled.tr<IStatus>`
  display: flex;
  width: 100%;

  .largeCell {
    width: 44%;
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-left: 16px;
  }

  .departmentBody {
    width: 23%;
  }

  .roleBody {
    width: 20%;
  }

  .branchBody {
    width: 40%;
  }

  .statusBody {
    width: 20%;
  }

  .dots {
    display: flex;
    justify-content: center;
    width: 10%;
  }
`;

const StatusContainer = styled.div<IStatus>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 72px;
  font-weight: 600;
  background-color: ${ ({ status }) => status === 'active' ? '#B5F1DD' : '#EAEFED'};
  color: ${ ({ status }) => status === 'active' ? '#587169' : '#A3B8B0'};
  border-radius: 80px;
  padding: 4px 8px;
`

const Td = styled.td<IStatus>`
  position: relative;
  display: flex;
  align-items: center;
  height: 69px;
  border-bottom: 1px solid #EAEFED;
  font-size: 12px;
  font-weight: 400;
  color: ${ ({ status }) => status === 'active' ? '#587169' : '#A3B8B0'};
  cursor: pointer;
`;

const AvatarAgent = styled.img<IStatus>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  opacity: ${ ({ status }) => status === 'active' ? 1 : 0.3};
`;

const AgentName = styled.div`
  width: 60%;
  margin-left: 10px;
`;

const ModalContainer = styled.div`
  position: relative;
`

const AgentsTableRow: React.FC<ITableBodyRow> = ({ agent, deleteAgent }) => {
  
  const [showModal, setShowModal] = useState(false)
  
  const urlAgentDetails = `/agents/${agent.agent_id}`

  const { agent_id, image, name, status, department, role, branch } = agent
  return (
    <>
      <TrBody key={agent_id} status={status}>
        <Td className='largeCell' status={status} onClick={() => window.open(urlAgentDetails)}>
          <AvatarAgent src={image} status={status}/>
          <AgentName>{name}</AgentName>
        </Td>
        <Td className='departmentBody' status={status} onClick={() => window.open(urlAgentDetails)}>{department}</Td>
        <Td className='roleBody' status={status} onClick={() => window.open(urlAgentDetails)}>{role}</Td>
        <Td className='branchBody' status={status} onClick={() => window.open(urlAgentDetails)}>{branch}</Td>
        <Td className='statusBody' onClick={() => window.open(urlAgentDetails)}>
          <StatusContainer status={status}>
            {status === 'active' ? 'Ativo' : 'Inativo'}
          </StatusContainer>
        </Td>
        <Td className='dots' status={status}>
          <ModalContainer>
            <ThreeDotsIcon setState={setShowModal} modalState={showModal}/>
            {showModal && 
              <AgentModal
                setState={setShowModal}
                deleteAgent={deleteAgent}
                agentId={agent_id}
              />
            }
          </ModalContainer>
        </Td>
      </TrBody>
    </>
  )
}

export default AgentsTableRow;
