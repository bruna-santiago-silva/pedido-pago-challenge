import { MenuItem, Select, styled } from "@mui/material";

interface IDropdown {
  value: string;
  values: string[];
  onChange?: any;
  label: string;
}

const SelectStyled = styled(Select)`
  width: 50%;
  background-color: #F5FAF8;
  font-size: 16px;
  font-weight: 600;
  color: #587169;
  border-radius: 8px;
  margin: 24px 24px 5px 0;
  border: 1px solid red;

  @media only screen and (max-width: 1300px) {
    margin-bottom: 10px;
    width: 80%;
    margin: 0 20px 20px 0;
  }

`

const Dropdown: React.FC<IDropdown> = ({ value, values, onChange, label }) => {
  return (
    <SelectStyled
      value={value}
      onChange={e => onChange(e.target.value)}
      label={label}
      style={{
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
    </SelectStyled>
  )
}

export default Dropdown;
