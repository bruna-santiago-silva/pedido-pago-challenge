import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface IDropdown {
  values: string;
  onChange?: (e: SelectChangeEvent<number>) => void;
  label: string;
}

const Dropdown: React.FC<IDropdown> = ({ values, onChange, label }) => {
  return (
    <Select
      value={values}
      onChange={(e) => onChange(e)}
      // displayEmpty
      label={label}
    >
      {/* {values.map((v) => <MenuItem value={v}>{v}</MenuItem>)} */}
    </Select>
  )
}

export default Dropdown;
