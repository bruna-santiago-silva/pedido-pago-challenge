import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IExitModalIcon {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ExitModalIcon: React.FC<IExitModalIcon> = ({ setShowModal }) => {
  return (
    <IconContainer onClick={() => setShowModal(false)}>
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L1.70711 14.2071C1.31658 14.5976 0.683417 14.5976 0.292893 14.2071C-0.0976311 13.8166 -0.0976311 13.1834 0.292893 12.7929L12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893Z" fill="#587169"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="#587169"/>
      </svg>
    </IconContainer>
  )
}

export default ExitModalIcon;
