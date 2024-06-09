import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ city, setCity }) => {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setCity(value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        
        id="standard-basic"
        label="Search City"
        variant="filled"
        InputProps={{
          style: { color: 'white' }, 
        }}
        InputLabelProps={{
          style: { color: 'white'  },
        }}
        style={{ width: '300px' }} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='input'
      />
      <button className='btn' onClick={handleClick}><FaSearch   style={{ fontSize: '32px' }}  /></button>
    </Box>
  );
};

export default SearchBox;
