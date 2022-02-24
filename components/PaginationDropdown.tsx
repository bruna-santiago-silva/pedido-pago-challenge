import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface IPaginationDropdown {
  itemsPerPage: number;
  onChange: (e: SelectChangeEvent<number>) => void;
  values: number[]
}

const PaginationDropdown: React.FC<IPaginationDropdown> = ({ itemsPerPage, onChange, values }) => {
  return (
    <Select
      value={itemsPerPage}
      onChange={e => onChange(e)}
      displayEmpty
    >
      {values.map(v => <MenuItem key={v} value={v}>{v}</MenuItem>)}
    </Select>
  )
}

export default PaginationDropdown;
