import { TextField, styled } from "@mui/material";

interface IStyledTextField {
  label?: string;
  placeholder: string;
  inputProps?: any; 
  style?: any;
}

const TextFieldStyled = styled(TextField)`
  color: #A3B8B0;
  border-color: #CAD6D1;
  border-radius: 8px;
  width: 48%;

  @media only screen and (max-width: 1300px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

const StyledTextField: React.FC<IStyledTextField> = ({ label, placeholder, inputProps, style }) => {
  return (
    <>
      <TextFieldStyled
        className='searchTextField'
        label={label}
        value={placeholder}
        InputProps={inputProps}
        style={style}
      />
    </>
  )
}

export default StyledTextField;
