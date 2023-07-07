import * as React from 'react';
import Card from '@mui/material/Card';
import { Delete } from '@mui/icons-material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CartItem = ({ item, quantityDecrement, quantityIncrement, removeCartItem }) => {

  return (
    <>
    <Typography>Shopping Cart</Typography>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.imageURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs.{item.price}
        </Typography>
      </CardContent>
    </Card>
    <CardActions>
        <Button onClick={() => quantityDecrement(item)}>-</Button>
        <Typography>{item.quant}</Typography>
        <Button onClick={() => quantityIncrement(item)}>+</Button>
        <Button size="small" onClick={() => removeCartItem(item)} ><Delete/></Button>

    </CardActions>
  </>
  );
}

export default CartItem;


