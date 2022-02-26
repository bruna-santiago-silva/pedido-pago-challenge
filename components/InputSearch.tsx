import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import SearchIcon from "./SearchIcon";

interface IInputSearch {
  data: any[];
  setData: Dispatch<SetStateAction<any>>;
  paramToBeFiltered: string;
  labelText: string;
  placeholder: string;
  style?: any;
}

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;

  .searchTextField {
    width: 100%;
  }
`;

const InputSearch: React.FC<IInputSearch> = ({
  data, setData, paramToBeFiltered, labelText, placeholder, style
}) => {
  const [searchText, setSearchText] = useState<string>('')

  const handleSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchText(e.target.value)
    const searchResult = filterData(e.target.value)
    setData(searchResult)
  }

  const filterData = (searchTerm: string) => {
    const filteredDataCopy = data.filter((d) => {
      return d[paramToBeFiltered].toLowerCase().includes(searchTerm.toLowerCase())}
    )
    return filteredDataCopy
  }

  return (
    <Container style={style}>
      <TextField
        className='searchTextField'
        label={labelText}
        placeholder={placeholder}
        value={searchText}
        onChange={e => handleSearch(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </Container> 
  )
}

export default InputSearch;
