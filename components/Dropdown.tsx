import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface IDropdown {
  itemsPerPage: number;
  onChange: (e: SelectChangeEvent<number>) => void;
  values: number[]
}

const Dropdown: React.FC<IDropdown> = ({ itemsPerPage, onChange, values }) => {
  return (
    <Select
      value={itemsPerPage}
      onChange={(e) => onChange(e)}
      displayEmpty
    >
      {values.map((v) => <MenuItem value={v}>{v}</MenuItem>)}
    </Select>
  )
}

export default Dropdown;
