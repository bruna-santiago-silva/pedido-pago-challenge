import styled from 'styled-components';

interface IPageWrapper {
  children: any;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
}

export default PageWrapper;
