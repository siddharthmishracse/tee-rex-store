import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Product = ({ item, updateProduct }) => {
  const { imageURL, name, price, isAddedToCart } = item;

  const handleAddToCart = () => {
    updateProduct(item);
  };
  
  return (
    <> 
    {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={imageURL}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          disabled={isAddedToCart}
          onClick={handleAddToCart}
        >     
          {isAddedToCart ? 'Added to Cart' : 'Add To Cart'}
        </Button>
      </CardActions>
    </Card> */}
    <Box      
     sx={{
        flexGrow: 1,
        border: '1px solid #e0e0e0', // Add a 1px solid border
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a shadow
        borderRadius: '10px', // Optional: Add border-radius for rounded corners
      }}>
      <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={imageURL}
            alt="BigCo Inc. logo"
            style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
      </Grid>
      <Grid item xs={12} >
      <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography> 
      </Grid>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-arround',flexDirection: 'row' , alignItems: 'center'}}>
        <Typography variant="body2" color="text.secondary">
            Rs. {price}
        </Typography>
        <Button
          size="small"
          variant="outlined"
          disabled={isAddedToCart}
          onClick={handleAddToCart}
        >     
          {isAddedToCart ? 'Added to Cart' : 'Add To Cart'}
        </Button>
        </Grid>
        </Grid>
      </Box>      
    </>
  );
};

export default Product;
