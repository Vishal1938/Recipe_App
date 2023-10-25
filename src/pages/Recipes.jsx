import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import Search from '../components/search';
import RecipeList from '../components/RecipeList';
import { getRecipes } from '../services/api';

const Recipes = () => {
  const [searchedQuery, setSearchedQuery] = useState('pizza');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

  const getSearchedResult = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };

  return (
    <Container
      sx={{
        marginTop: '24px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom color={'white'}>
        Our Recipes
      </Typography>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </Container>
  );
};

export default Recipes;
/**/