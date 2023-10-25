import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import RecipeListItem from './RecipeListItem';
import './RecipeList.css'

const RecipeList = ({ recipes, searchedQuery }) => {
  return (

      <div className='List'>
      {recipes &&
          recipes.map((recipe, index) => (
           
              <RecipeListItem recipe={recipe} />
          ))}
    </div>
   
  );
};

export default RecipeList;
/*<Container
      sx={{
        marginTop: '24px',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: '24px',
          textTransform: 'uppercase', // Make the text uppercase
          letterSpacing: '2px',      // Add letter spacing
          color: '#007bff',          // Change the text color to blue
        }}
      >
        Recipe List for "{searchedQuery}"
      </Typography>
      <Grid container spacing={3}>
        {recipes &&
          recipes.map((recipe, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <RecipeListItem recipe={recipe} />
            </Grid>
          ))}
      </Grid>
    </Container>*/