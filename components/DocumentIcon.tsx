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

const DocumentIcon = () => {
  return (
    <IconContainer>
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45455 2.36126C2.57591 2.36126 1.86364 3.07434 1.86364 3.95396V11.5382C1.86364 12.4179 2.57591 13.1309 3.45455 13.1309H12.5455C13.4241 13.1309 14.1364 12.4179 14.1364 11.5382V3.95396C14.1364 3.07434 13.4241 2.36126 12.5455 2.36126H3.45455ZM0.5 3.95396C0.5 2.32038 1.8228 0.996094 3.45455 0.996094H12.5455C14.1772 0.996094 15.5 2.32038 15.5 3.95396V11.5382C15.5 13.1718 14.1772 14.4961 12.5455 14.4961H3.45455C1.8228 14.4961 0.5 13.1718 0.5 11.5382V3.95396Z" fill="#465953"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 5.39265C5.27865 5.39265 4.89655 5.77475 4.89655 6.24609C4.89655 6.71744 5.27865 7.09954 5.75 7.09954C6.22135 7.09954 6.60345 6.71744 6.60345 6.24609C6.60345 5.77475 6.22135 5.39265 5.75 5.39265ZM3.5 6.24609C3.5 5.00345 4.50736 3.99609 5.75 3.99609C6.99264 3.99609 8 5.00345 8 6.24609C8 7.48873 6.99264 8.49609 5.75 8.49609C4.50736 8.49609 3.5 7.48873 3.5 6.24609Z" fill="#465953"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 4.74609C9.5 4.33188 9.81811 3.99609 10.2105 3.99609H11.7895C12.1819 3.99609 12.5 4.33188 12.5 4.74609C12.5 5.16031 12.1819 5.49609 11.7895 5.49609H10.2105C9.81811 5.49609 9.5 5.16031 9.5 4.74609Z" fill="#465953"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 7.74609C9.5 7.33188 9.81811 6.99609 10.2105 6.99609H11.7895C12.1819 6.99609 12.5 7.33188 12.5 7.74609C12.5 8.16031 12.1819 8.49609 11.7895 8.49609H10.2105C9.81811 8.49609 9.5 8.16031 9.5 7.74609Z" fill="#465953"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.7461C3.5 10.3319 3.80733 9.99609 4.18644 9.99609H11.8136C12.1927 9.99609 12.5 10.3319 12.5 10.7461C12.5 11.1603 12.1927 11.4961 11.8136 11.4961H4.18644C3.80733 11.4961 3.5 11.1603 3.5 10.7461Z" fill="#465953"/>
      </svg>
    </IconContainer>
  )
}

export default DocumentIcon;


