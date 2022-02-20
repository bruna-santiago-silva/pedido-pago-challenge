import styled from 'styled-components';

interface IBtn {
  children: any;
  style?: any;
  onClick: () => void;
  disabled?: boolean;
}

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 36px;
  border: none;
  border: 1.4px solid #709085;
  border-radius: 0px 8px 8px 0px;
  background-color: #FFFFFF;
`;

const Button: React.FC<IBtn> = ({children, style, onClick, disabled}) => {
  return (
    <Btn disabled={disabled} style={style} onClick={onClick}>{children}</Btn>
  )
}

export default Button;