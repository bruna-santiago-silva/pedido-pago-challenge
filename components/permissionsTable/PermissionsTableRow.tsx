import { Checkbox } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { IGroupRules } from '../../src/interfaces';

interface IPermissionsTableRow {
  rule: IGroupRules
}

const Link = styled.a`
  text-decoration: none;
`;

const TrBody = styled.tr`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */

  .nameBody {
    width: 50%;
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

const Td = styled.td`
  display: flex;
  align-items: center;
  width: 20%;
  height: 69px;
  border-bottom: 1px solid #EAEFED;
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  padding: 0 16px;
  /* border: 1px solid red; */
`;

const RULE_TYPES = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete'
}

const PermissionsTableRow: React.FC<IPermissionsTableRow> = ({ rule }) => {
  const [allowRead, setAllowRead] = useState<boolean>(rule.permissions.includes(RULE_TYPES['READ']))
  const [allowWrite, setAllowWrite] = useState<boolean>(rule.permissions.includes(RULE_TYPES['WRITE']))
  const [allowDelete, setAllowDelete] = useState<boolean>(rule.permissions.includes(RULE_TYPES['DELETE']))

  return (
    <TrBody key={rule.role}>
      <Td className='nameBody'>{rule.role}</Td>
      <Td className='departmentBody'><Checkbox style={{color: `${allowRead ? '#1DD195' : '#CAD6D1'}`, borderRadius: '6px'}} checked={allowRead} onChange={() => setAllowRead(!allowRead)} /></Td>
      <Td className='roleBody'><Checkbox style={{color: `${allowRead ? '#1DD195' : '#CAD6D1'}`, borderRadius: '6px'}} checked={allowWrite} onChange={() => setAllowWrite(!allowWrite)} /></Td>
      <Td className='branchBody'><Checkbox style={{color: `${allowRead ? '#1DD195' : '#CAD6D1'}`, borderRadius: '6px'}} checked={allowDelete} onChange={() => setAllowDelete(!allowDelete)} /></Td>
    </TrBody>
  )
}

export default PermissionsTableRow;
