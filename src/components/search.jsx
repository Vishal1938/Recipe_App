import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Search = ({ setSearchedQuery }) => {
  const [value, setvalue] =useState("");
  const onFormSubmit = () =>{
    setSearchedQuery(value);
  }

  return (
    <Grid container spacing={2} alignItems="center" style={{ marginBottom: '16px' }}>
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search for Recipes"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          style={{ width: '100%' ,color:'white',backgroundColor:'grey', borderRadius:'5px'}}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={onFormSubmit}
          fullWidth
          style={{ width: '100%', marginTop: '8px', fontSize: '0.9rem' }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;