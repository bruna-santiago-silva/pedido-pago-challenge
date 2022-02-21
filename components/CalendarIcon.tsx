import styled from 'styled-components';

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: #CAD6D1;
  border-radius: 100%;
`;

const CalendarIcon = () => {
  return (
    <IconContainer>
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08301 3.49609C2.66879 3.49609 2.33301 3.83188 2.33301 4.24609V14.7461C2.33301 15.1603 2.66879 15.4961 3.08301 15.4961H13.583C13.9972 15.4961 14.333 15.1603 14.333 14.7461V4.24609C14.333 3.83188 13.9972 3.49609 13.583 3.49609H3.08301ZM0.833008 4.24609C0.833008 3.00345 1.84037 1.99609 3.08301 1.99609H13.583C14.8256 1.99609 15.833 3.00345 15.833 4.24609V14.7461C15.833 15.9887 14.8256 16.9961 13.583 16.9961H3.08301C1.84037 16.9961 0.833008 15.9887 0.833008 14.7461V4.24609Z" fill="#465953"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833008 7.24609C0.833008 6.83188 1.16879 6.49609 1.58301 6.49609H15.083C15.4972 6.49609 15.833 6.83188 15.833 7.24609C15.833 7.66031 15.4972 7.99609 15.083 7.99609H1.58301C1.16879 7.99609 0.833008 7.66031 0.833008 7.24609Z" fill="#465953"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.333 0.496094C11.7472 0.496094 12.083 0.83188 12.083 1.24609V4.24609C12.083 4.66031 11.7472 4.99609 11.333 4.99609C10.9188 4.99609 10.583 4.66031 10.583 4.24609V1.24609C10.583 0.83188 10.9188 0.496094 11.333 0.496094Z" fill="#587169"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33301 0.496094C5.74722 0.496094 6.08301 0.83188 6.08301 1.24609V4.24609C6.08301 4.66031 5.74722 4.99609 5.33301 4.99609C4.91879 4.99609 4.58301 4.66031 4.58301 4.24609V1.24609C4.58301 0.83188 4.91879 0.496094 5.33301 0.496094Z" fill="#587169"/>
      </svg>
    </IconContainer>
  )
}

export default CalendarIcon;






