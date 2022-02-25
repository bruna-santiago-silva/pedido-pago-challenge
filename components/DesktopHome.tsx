import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import LeftMenu from './LeftMenu';
import PageTitle from './PageTitle';
import Main from './Main';
import TabsContainer from './TabsContainer';
import PageWrapper from './PageWrapper';
import AgentsDesktop from './AgentsDesktop';
import RolesDesktop from './RolesDesktop';
import { PAGE_DATA } from '../src/data';

 const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

 const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  min-height: 1020px;
  background-color: #E5E5E5;
  padding: 50px 100px;
`;

const DesktopHome = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0)
  const [tabDisplayed, setTabDisplayed] = useState<string>(PAGE_DATA['AGENTS'])

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
            {tabDisplayed === PAGE_DATA['AGENTS']
            ? 
              <AgentsDesktop />
            :
              <RolesDesktop />
            }
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default DesktopHome;
