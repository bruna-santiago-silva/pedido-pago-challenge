import styled from 'styled-components';

const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

const ShowActionsIcon = () => {
  return (
    <IconContainer>
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0H11C11.2652 0 11.5196 0.105357 11.7071 0.292893L17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V19C18 19.7957 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7957 22 15 22H3C2.20435 22 1.44129 21.6839 0.87868 21.1213C0.31607 20.5587 0 19.7957 0 19V3C0 2.20435 0.31607 1.44129 0.87868 0.87868ZM3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V7.41421L10.5858 2H3Z" fill="#1DD195"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9 10C9.55228 10 10 10.4477 10 11V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17V11C8 10.4477 8.44772 10 9 10Z" fill="#1DD195"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5 14C5 13.4477 5.44772 13 6 13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H6C5.44772 15 5 14.5523 5 14Z" fill="#1DD195"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11 0C11.5523 0 12 0.447715 12 1V6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H11C10.4477 8 10 7.55228 10 7V1C10 0.447715 10.4477 0 11 0Z" fill="#1DD195"/>
      </svg>
    </IconContainer>
  )
}

export default ShowActionsIcon;
