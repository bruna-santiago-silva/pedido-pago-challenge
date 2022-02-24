import { useState } from 'react';
import {
    RightContainer,
    Body,
} from '../Home/styles'
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import PageTitle from '../components/PageTitle';
import Main from '../components/Main';
import TabsContainer from '../components/TabsContainer';
import PageWrapper from '../components/PageWrapper';
import Agents from '../components/Agents';
import Roles from '../components/Roles';
import ShowAgentModal from '../components/ShowAgentModal';

const TABS = {
  AGENTS: 'agents',
  ROLES: 'roles'
}

const Home = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [tabDisplayed, setTabDisplayed] = useState<string>(TABS['AGENTS'])

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };
  
  return (
    <PageWrapper>
      <Header />
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>Organização</PageTitle>
          <Main>
            <TabsContainer
              selectedTab={selectedTab}
              handleTabChange={handleTabChange}
              setTabDisplayed={setTabDisplayed}
            />
            {tabDisplayed === TABS['AGENTS']
            ? 
              <Agents />
            :
              <Roles />
            }
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default Home;
