import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

interface IDropdown {
  value: string;
  values: string[];
  onChange?: any;
  label: string;
}

const DropdownContainer = styled.div`
  width: 100%;
  margin: 24px 24px 5px 0;

  @media only screen and (max-width: 1300px) {
    margin-bottom: 10px;
    width: 100%;
    margin: 12px 0;
  }
`;

const Dropdown: React.FC<IDropdown> = ({ value, values, onChange, label }) => {
  return (
    <DropdownContainer>
      <FormControl style={{width: '100%'}}>
        <InputLabel id={`labelId-${label}`}>{label}</InputLabel>
        <Select
          labelId={`labelId-${label}`}
          id={label}
          value={value}
          label={label}
          onChange={e => onChange(e.target.value)}
          style={{
            width: '100%',
            backgroundColor: '#F5FAF8',
            fontSize: '16px',
            fontWeight: '600',
            color:' #587169',
            borderRadius: '8px',
          }}
        >
          {values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
        </Select>
      </FormControl>
    </DropdownContainer>
  )
}

export default Dropdown;
