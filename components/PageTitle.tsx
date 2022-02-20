import styled from 'styled-components';

interface IPageTitle {
  children: string;
}

export const Container = styled.div`
  align-self: center;
  width: 72%;
  font-size: 32px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 30px;
`;

const PageTitle: React.FC<IPageTitle> = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default PageTitle;
