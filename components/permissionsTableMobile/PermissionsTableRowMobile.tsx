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

  .extraLarge {
    width: 40%;
    margin-left: 16px;
  }

  .medium {
    width: 20%;
    justify-content: center;
  }
`;

const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 69px;
  border-bottom: 1px solid #EAEFED;
  font-size: 12px;
  font-weight: 400;
  color: #587169;
`;

const RULE_TYPES = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete'
}

const PermissionsTableRowMobile: React.FC<IPermissionsTableRow> = ({ rule }) => {
  const [allowRead, setAllowRead] = useState<boolean>(rule.permissions.includes(RULE_TYPES['READ']))
  const [allowWrite, setAllowWrite] = useState<boolean>(rule.permissions.includes(RULE_TYPES['WRITE']))
  const [allowDelete, setAllowDelete] = useState<boolean>(rule.permissions.includes(RULE_TYPES['DELETE']))

  return (
    <TrBody key={rule.role}>
      <Td className='extraLarge'>{rule.role}</Td>
      <Td className='medium'>
        <Checkbox
          style={{color: `${allowRead ? '#1DD195' : '#CAD6D1'}`, borderRadius: '6px'}}
          checked={allowRead} onChange={() => setAllowRead(!allowRead)}
        />
      </Td>
      <Td className='medium'>
        <Checkbox
          style={{color: `${allowWrite ? '#1DD195' : '#CAD6D1'}`, borderRadius: '6px'}}
          checked={allowWrite} onChange={() => setAllowWrite(!allowWrite)}
        />
      </Td>
      <Td className='medium'>
        <Checkbox
          style={{color: `${allowDelete ? '#1DD195' : '#CAD6D1'}`, borderRadius: '6px'}}
          checked={allowDelete} onChange={() => setAllowDelete(!allowDelete)}
        />
      </Td>
    </TrBody>
  )
}

export default PermissionsTableRowMobile;
