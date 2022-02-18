import {
    Container,
    Header,
    LeftMenu,
    RightContainer,
    Body,
    PageTitle,
    Main,
    Top,
    TabsContainer,
    Tab,
    TabBar,
    InputSearch,
    ListingContainer,
    ListingTitle,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '../Home/styles'

const Home = () => {

  const tableHeader = ['Nome completo', 'Departamento', 'Cargo', 'Unidade', 'Status']

  return (
    <Container>
      <Header>header</Header>
      <Body>
        <LeftMenu>leftmenu</LeftMenu>
        <RightContainer>
          <PageTitle>Organização</PageTitle>
          <Main>
            <Top>
              <TabsContainer>
                <Tab>Colaboradores</Tab>
                <Tab>Cargos</Tab>
              </TabsContainer>
              <TabBar>--------------------</TabBar>
            </Top>
            <InputSearch></InputSearch> 
            <ListingContainer>
              <ListingTitle>Listagem de colaboradores</ListingTitle>
            </ListingContainer>
            <Table>
              <Thead>
                <Tr>
                  {tableHeader.map((th) => {
                    return(<Th>{th}</Th>)
                  })}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </Main>
        </RightContainer>
      </Body>
    </Container>
  )
}

export default Home;
