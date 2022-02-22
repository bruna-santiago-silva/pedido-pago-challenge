import { MenuItem, Select } from "@mui/material";

interface IDropdown {
  value: string;
  values: string[];
  onChange?: any;
  label: string;
}

const Dropdown: React.FC<IDropdown> = ({ value, values, onChange, label }) => {
  console.log(values)
  console.log(value)

  return (
    <Select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      style={{
        width: '50%',
        backgroundColor: '#F5FAF8',
        fontSize: '16px',
        fontWeight: '600',
        color: '#587169',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '8px',
        margin: '24px 24px 5px 0'
      }}
    >
      {values.map((v) => <MenuItem key={v} value={v}>{v}</MenuItem>)}
    </Select>
  )
}

export default Dropdown;
