import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        variant="standard"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </Box>
  );
};

export default SearchBox;
