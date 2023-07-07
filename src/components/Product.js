import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

  const Product = ({item, updateProduct}) => {    
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component = "img"
        height = "300"
        image = {item.imageURL}
        alt = {item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs. {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={item.isAddedToCart} onClick={() => {
            updateProduct(item);
          }
        } >Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Product;




