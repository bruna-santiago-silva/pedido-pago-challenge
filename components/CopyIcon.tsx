import styled from 'styled-components';

const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

const CopyIcon = () => {
  return (
    <IconContainer>
      <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.105792 10.553C0.352781 10.059 0.953454 9.8588 1.44743 10.1058L11.0002 14.8822L20.553 10.1058C21.047 9.8588 21.6477 10.059 21.8946 10.553C22.1416 11.047 21.9414 11.6477 21.4474 11.8946L11.4474 16.8946C11.1659 17.0354 10.8345 17.0354 10.553 16.8946L0.553005 11.8946C0.059027 11.6477 -0.141197 11.047 0.105792 10.553Z" fill="#CAD6D1"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5528 0.105573C10.8343 -0.0351909 11.1657 -0.0351909 11.4472 0.105573L21.4472 5.10557C21.786 5.27496 22 5.62123 22 6C22 6.37877 21.786 6.72504 21.4472 6.89443L11.4472 11.8944C11.1657 12.0352 10.8343 12.0352 10.5528 11.8944L0.552786 6.89443C0.214002 6.72504 0 6.37877 0 6C0 5.62123 0.214002 5.27496 0.552786 5.10557L10.5528 0.105573ZM3.23607 6L11 9.88197L18.7639 6L11 2.11803L3.23607 6Z" fill="#CAD6D1"/>
      </svg>
    </IconContainer>
  )
}

export default CopyIcon;
