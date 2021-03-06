import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IUpArrowIcon {
  setState: Dispatch<SetStateAction<boolean>>;
  style?: any;
}

const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

const UpArrowIcon: React.FC<IUpArrowIcon> = ({ setState, style }) => {
  return (
    <IconContainer onClick={() => setState(false)} style={style}>
      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.85198 1.10198C6.20996 0.744001 6.79036 0.744001 7.14834 1.10198L12.6483 6.60198C13.0063 6.95996 13.0063 7.54036 12.6483 7.89834C12.2904 8.25632 11.71 8.25632 11.352 7.89834L6.50016 3.04653L1.64834 7.89834C1.29036 8.25632 0.709962 8.25632 0.351982 7.89834C-0.00599906 7.54036 -0.00599906 6.95996 0.351982 6.60198L5.85198 1.10198Z" fill="#587169"/>
      </svg>
    </IconContainer>
  )
}

export default UpArrowIcon;
