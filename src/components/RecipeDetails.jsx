import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipe } from "../services/api";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const Container = styled("div")({
  padding: "16px",
});

const BackButton = styled(Button)({
  marginBottom: "16px",
  backgroundColor: "#2196F3",
  color: "white",
  borderRadius:"2px",
  textDecoration:'none',
  "&:hover": {
    backgroundColor: "#1976D2",
  },
  alignItems:'center',
  height:'50px',
  width:'150px',
});

const RecipeCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow:'0 0 10px rgba(105, 102, 102, 0.7)',
  backgroundColor:"aqua",
});

const RecipeImage = styled(CardMedia)({
  height: "400px",
  width:"95%",
  objectFit: "cover",
  margin:"10px 10px",
  borderRadius:"5px"
});

const CardContentWrapper = styled(CardContent)({
  textAlign: "center",
});

const PublisherButtons = styled("div")({
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ButtonSpacer = styled("div")({
  margin: "8px",
});

const PublishedWebpageButton = styled(Button)({
  backgroundColor: "red",
  color: "white",
  "&:hover": {
    backgroundColor: "#388E3C",
  },
  borderRadius:"4px",
  marginBottom:'10px',
  textDecoration:'none',
  height:'50px',
  width:'150px',

});

const RecipeUrlButton = styled(Button)({
  backgroundColor: "#F44336",
  color: "white",
  "&:hover": {
    backgroundColor: "#D32F2F",
  },
  borderRadius:"4px",
  textDecoration:'none',
  height:'200px',
  width:'400px',
});

const IngredientsContainer = styled(Grid)({
  marginTop: "16px",
});

const IngredientsTitle = styled(Typography)({
  marginBottom: "8px",
});

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, [recipeId]);

  return (
    <Container>
      {Object.keys(recipe).length > 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <BackButton as={Link} to={"/recipes"} variant="contained">
              Back to Recipe List
            </BackButton>
            <RecipeCard>
              <RecipeImage
                component="img"
                alt={recipe.title}
                image={recipe.image_url}
              />
              <CardContentWrapper>
                <Typography variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="subtitle1">
                  Provided By: {recipe.publisher}
                </Typography>
                <PublisherButtons>
                  <ButtonSpacer>
                    <PublishedWebpageButton
                      as="a"
                      href={recipe.publisher_url}
                      target="_blank"
                    >
                      Published Webpage
                    </PublishedWebpageButton>
                  </ButtonSpacer>
                  <ButtonSpacer>
                    <RecipeUrlButton
                      as="a"
                      href={recipe.source_url}
                      target="_blank"
                    >
                      Recipe URL
                    </RecipeUrlButton>
                  </ButtonSpacer>
                </PublisherButtons>
              </CardContentWrapper>
            </RecipeCard>
          </Grid>
          <IngredientsContainer item xs={12} md={6}>
            <IngredientsTitle  style={{color:"white"}}variant="h3" gutterBottom>
              Ingredients
            </IngredientsTitle>
            <Divider />
            <List>
              {recipe.ingredients.map((data, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <span role="img" aria-label="ingredient">
                      🍽️
                    </span>
                  </ListItemIcon>
                  <ListItemText style={{color:'whitesmoke'}} primary={data} />
                </ListItem>
              ))}
            </List>
          </IngredientsContainer>
        </Grid>
      ) : null}
    </Container>
  );
};

export default RecipeDetails;
