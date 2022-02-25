import styled from 'styled-components';

const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

const LoadMoreIcon = () => {
  return (
    <IconContainer>
      <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 12C16.5 11.4477 16.9477 11 17.5 11H23.5C24.0523 11 24.5 11.4477 24.5 12V18C24.5 18.5523 24.0523 19 23.5 19C22.9477 19 22.5 18.5523 22.5 18V13H17.5C16.9477 13 16.5 12.5523 16.5 12Z" fill="#1DD195"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1C2.05228 1 2.5 1.44772 2.5 2V7H7.5C8.05228 7 8.5 7.44772 8.5 8C8.5 8.55228 8.05228 9 7.5 9H1.5C0.947715 9 0.5 8.55228 0.5 8V2C0.5 1.44772 0.947715 1 1.5 1Z" fill="#1DD195"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.72695 0.396228C11.3497 -0.0731415 13.0648 -0.123797 14.7124 0.248988C16.36 0.621774 17.8863 1.40585 19.1489 2.52806C20.4115 3.65026 21.3692 5.07402 21.9327 6.66648C22.117 7.18713 21.8442 7.75855 21.3236 7.94279C20.803 8.12703 20.2315 7.85432 20.0473 7.33367C19.5965 6.0597 18.8303 4.9207 17.8202 4.02293C16.8101 3.12517 15.5891 2.49791 14.271 2.19968C12.953 1.90145 11.5808 1.94198 10.2827 2.31747C8.98451 2.69297 7.80262 3.3912 6.84729 4.34701C6.8399 4.3544 6.8324 4.36167 6.82478 4.36883L2.18478 8.72883C1.7823 9.10702 1.14944 9.08733 0.77125 8.68485C0.393058 8.28237 0.412747 7.64951 0.815226 7.27132L5.4441 2.92178C6.63627 1.73285 8.1094 0.864107 9.72695 0.396228ZM24.2288 11.3153C24.6069 11.7178 24.5873 12.3506 24.1848 12.7288L19.5559 17.0784C18.3637 18.2673 16.8906 19.136 15.2731 19.6039C13.6503 20.0733 11.9352 20.1239 10.2876 19.7512C8.64003 19.3784 7.11373 18.5943 5.85114 17.4721C4.58855 16.3499 3.63081 14.9261 3.06729 13.3337C2.88305 12.813 3.15576 12.2416 3.67641 12.0574C4.19705 11.8731 4.76848 12.1458 4.95272 12.6665C5.40353 13.9404 6.16973 15.0795 7.1798 15.9772C8.18988 16.875 9.41091 17.5022 10.729 17.8005C12.047 18.0987 13.4192 18.0582 14.7173 17.6827C16.0155 17.3072 17.1974 16.609 18.1527 15.6531C18.1572 15.6487 18.1616 15.6443 18.1662 15.6399C18.1692 15.637 18.1722 15.6342 18.1752 15.6313L22.8152 11.2713C23.2177 10.8931 23.8506 10.9128 24.2288 11.3153Z" fill="#1DD195"/>
      </svg>
    </IconContainer>
  )
}

export default LoadMoreIcon;