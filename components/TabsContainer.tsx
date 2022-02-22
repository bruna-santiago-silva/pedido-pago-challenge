import styled from 'styled-components';
import { Box, InputAdornment, MenuItem, Select, SelectChangeEvent, Tab, Tabs, TextField } from '@mui/material';

interface ITabsContainer {
  selectedTab: number;
  handleTabChange: (_: any, newValue: any) => void;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TabsContainer: React.FC<ITabsContainer> = ({selectedTab, handleTabChange}) => {
  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={selectedTab} onChange={handleTabChange} >
          <Tab label="Colaboradores" style={{fontSize: '14px', fontWeight: '600', color: '#34423D', width: '24%', maxWidth: '196px', textTransform: 'capitalize'}} />
          <Tab label="Cargos" style={{fontSize: '14px', fontWeight: '600', color: '#34423D', width: '24%', maxWidth: '196px', textTransform: 'capitalize'}} />
        </Tabs>
      </Box>
    </Container>
  )
}

export default TabsContainer;

