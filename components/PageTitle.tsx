import styled from 'styled-components';

interface IPageTitle {
  children: any;
  style?: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 72%;
  font-size: 32px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 30px;
`;

const PageTitle: React.FC<IPageTitle> = ({ children, style }) => {
  return (
    <Container style={style}>{children}</Container>
  )
}

export default PageTitle;
