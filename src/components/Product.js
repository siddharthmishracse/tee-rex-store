import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "darkgrey"
  },
}));

const Product = ({ item, updateProduct }) => {
  const { imageURL, name, price, isAddedToCart } = item;

  const handleAddToCart = () => {
    updateProduct(item);
  };
  
  return (
    <Grid 
      container     
      style={{
        flexGrow: 1,
        border: '1px solid #e0e0e0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '0.9rem'
      }}
    >
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={imageURL}
          alt="Product"
          style={{ maxWidth: '100%', maxHeight: '230px', objectFit: 'fill' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" style={{ margin: '0px 0px' }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container style={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" style={{ margin: '0px 0px' }}>
              Rs. {price}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={2} direction="row">
              <ColorButton 
                size="small"
                variant="contained"
                disabled={isAddedToCart}
                onClick={handleAddToCart}
                style={{ width: '100%' }}
              >
                {isAddedToCart ? 'Added to Cart' : 'Add To Cart'}
              </ColorButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Product;