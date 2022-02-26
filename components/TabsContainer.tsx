import styled from 'styled-components';
import { Box, Tab, Tabs } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface ITabsContainer {
  selectedTab: number;
  handleTabChange: (_: any, newValue: any) => void;
  setTabDisplayed: Dispatch<SetStateAction<string>>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TabsContainer: React.FC<ITabsContainer> = ({ selectedTab, handleTabChange, setTabDisplayed }) => {
  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={selectedTab} onChange={handleTabChange} >
          <Tab
            label="Colaboradores"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#34423D',
              width: '24%',
              maxWidth: '196px',
              textTransform: 'capitalize'
            }}
            onClick={() => setTabDisplayed('agents')}
          />
          <Tab
            label="Cargos"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#34423D',
              width: '24%',
              maxWidth: '196px',
              textTransform: 'capitalize'
            }}
            onClick={() => setTabDisplayed('roles')}
          />
        </Tabs>
      </Box>
    </Container>
  )
}

export default TabsContainer;

