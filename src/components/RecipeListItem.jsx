import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './RecipeListItem.css';
/*const RecipeCard = (props) => (
  <Card
    sx={{
      Width: 500,
      height: 600,
       padding:'10px auto',
    }}
    {...props}
  />
);

const ThumbnailImage = (props) => (
  <img
    alt="thumbnail"
    sx={{
      height: 170,
      width:100,
      objectFit: 'cover',
      
     
    }}
    {...props}
  />
);

const HeaderText = (props) => (
  <Typography
    variant="h6"
    sx={{
      fontSize: '1.2rem',
      fontWeight: 'bold',
    }}
    {...props}
  />
);

const DescriptionText = (props) => (
  <Typography
    variant="body2"
    sx={{
      marginTop: '1rem',
    }}
    {...props}
  />
);

const ButtonContainer = (props) => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem',
      gap:'5px'
    }}
    {...props}
  />
);

const RecipeListItem = ({ recipe }) => {
  return (
    <>
    <RecipeCard>
      <ThumbnailImage src={recipe.image_url} />
      <CardContent>
        <HeaderText>{recipe.title}</HeaderText>
        <DescriptionText>{recipe.publisher}</DescriptionText>
        <ButtonContainer>
          <Button
            component={Link}
            to={`/recipes/${recipe.recipe_id}`}
            variant="contained"
            color="primary"
            size="small"
          >
            Details
          </Button>
          <Button
            href={recipe.source_url}
            target="_blank"
            variant="contained"
            color="success"
            size="small"
          >
            Recipe URL
          </Button>
        </ButtonContainer>
      </CardContent>
    </RecipeCard>
    </>
  );
};

export default RecipeListItem;
*/

const ButtonContainer = (props) => (
  <div
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem',
      gap:'10px'
    }}
    {...props}
  />
);

export default function RecipeListItem({recipe}) {
  return (
    <div className='container'>
      <div className='card'>
        <img src={recipe.image_url}
           height={500} width={350}/>
      </div>
      <h3>{recipe.title}</h3>
      <p>{recipe.publisher}</p>
      <div id="Buttons">
      <ButtonContainer>
          <Button
            component={Link}
            to={`/recipes/${recipe.recipe_id}`}
            variant="contained"
            color="primary"
            size="small"
            className='button'
            
          >
            Details
          </Button>
          <Button
            href={recipe.source_url}
            target="_blank"
            variant="contained"
            color="success"
            size="small"
          >
            Recipe URL
          </Button>
        </ButtonContainer>
      </div>
    </div>
  )
}
