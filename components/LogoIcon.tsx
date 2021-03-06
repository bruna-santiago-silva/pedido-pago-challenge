import styled from 'styled-components';

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoIcon = () => {
  return (
    <IconContainer onClick={() => window.open('/', "_self")}>
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7925 13.645V22.3187C13.7925 26.0423 10.7026 29.0649 6.89623 29.0649C3.08987 29.0649 0 26.0423 0 22.3187V6.8988C0 3.17524 3.08987 0.152588 6.89623 0.152588H22.659C26.4654 0.152588 29.5553 3.17524 29.5553 6.8988C29.5553 10.6224 26.4654 13.645 22.659 13.645H13.7925Z" fill="#034AFD"/>
        <path opacity="0.85" fillRule="evenodd" clipRule="evenodd" d="M19.7036 19.4275V28.1012C19.7036 31.8248 16.6137 34.8474 12.8074 34.8474C9.001 34.8474 5.91113 31.8248 5.91113 28.1012V12.6813C5.91113 8.95773 9.001 5.93506 12.8074 5.93506H28.5702C32.3765 5.93506 35.4664 8.95773 35.4664 12.6813C35.4664 16.4049 32.3765 19.4275 28.5702 19.4275H19.7036Z" fill="#1DD195"/>
      </svg>
    </IconContainer>
  )
}

export default LogoIcon;
