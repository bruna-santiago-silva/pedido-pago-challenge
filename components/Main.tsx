import styled from 'styled-components';

interface IMain {
  children: any;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 70%;
  height: 80%;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 50px 20px;
  border: 1px solid black;
`;

const Main: React.FC<IMain> = ({children}) => {
  return (
    <Container>{children}</Container>
  )
}

export default Main;
