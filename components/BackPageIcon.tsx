import styled from 'styled-components';

interface IBackPageIcon {
  link: string;
}

const Link = styled.a`
  text-decoration: none;
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 20px;
  background-color: #EAEFED;
  border-radius: 100%;
`;

const BackPageIcon: React.FC<IBackPageIcon> = ({link}) => {
  return (
    <Link href={link}>
      <IconContainer >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#34423D"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#34423D"/>
        </svg>
      </IconContainer>
    </Link>
    )
}

export default BackPageIcon;


