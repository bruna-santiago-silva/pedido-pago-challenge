import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IThreeDotsIcon {
  setState?: Dispatch<SetStateAction<boolean>>;
  modalState?: boolean;
}

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 50px;
  cursor: pointer;
`;

const ThreeDotsIcon: React.FC<IThreeDotsIcon> = ({ setState, modalState }) => {
  return (
    <IconContainer onClick={() => setState(!modalState)} onMouseLeave={() => setState(false)}>
      <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 14.8954 0.89543 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.89543 18 0 17.1046 0 16Z" fill="#587169"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9Z" fill="#587169"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z" fill="#587169"/>
      </svg>
    </IconContainer>
  )
}

export default ThreeDotsIcon;
