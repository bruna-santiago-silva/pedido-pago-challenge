import styled from 'styled-components';

interface IButton {
  children: any;
  style?: any;
  onClick: () => void;
  disabled?: boolean;
}

interface IBtn {
  disabled: boolean;
}

const Btn = styled.button<IBtn>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 36px;
  border: 1.4px solid ${(props) => props.disabled ? '#CAD6D1' : '#709085' };
  border-radius: 0px 8px 8px 0px;
  background-color: #FFFFFF;

  :focus {
    outline: none;
  }
`;

const Button: React.FC<IButton> = ({ children, style, onClick, disabled }) => {
  return (
    <Btn disabled={disabled} style={style} onClick={onClick}>{children}</Btn>
  )
}

export default Button;