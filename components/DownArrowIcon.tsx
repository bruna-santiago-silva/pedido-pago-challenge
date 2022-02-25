import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IDownArrowIcon {
  setState: Dispatch<SetStateAction<boolean>>;
  style?: any;
}

const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

const DownArrowIcon: React.FC<IDownArrowIcon> = ({ setState, style }) => {
  return (
    <IconContainer onClick={() => setState(true)} style={style}>
      <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.792893 0.792893C1.18342 0.402369 1.81658 0.402369 2.20711 0.792893L7.5 6.08579L12.7929 0.792893C13.1834 0.402369 13.8166 0.402369 14.2071 0.792893C14.5976 1.18342 14.5976 1.81658 14.2071 2.20711L8.20711 8.20711C7.81658 8.59763 7.18342 8.59763 6.79289 8.20711L0.792893 2.20711C0.402369 1.81658 0.402369 1.18342 0.792893 0.792893Z" fill="#587169"/>
      </svg>
    </IconContainer>
  )
}

export default DownArrowIcon;
