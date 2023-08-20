import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
import { Delete } from '@mui/icons-material';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "darkgrey"
  },
}));
  
const CartItem = ({ item, quantityDecrement, quantityIncrement, removeCartItem }) => {
  const { imageURL, name, price } = item;
  return (
    <Grid 
      container     
      // style={{
      //   flexGrow: 1,
      //   border: '1px solid #e0e0e0',
      //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      //   borderRadius: '10px',
      //   padding: '0.9rem'
      // }}
    >
      <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={imageURL}
          alt="Product"
          style={{ maxWidth: '50%', maxHeight: '150px', objectFit: 'fill' }}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" style={{ margin: '0px 0px' }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Grid container style={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" style={{ margin: '0px 0px' }}>
              Rs. {price}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Stack spacing={2} direction="row">
              <Button onClick={() => quantityDecrement(item)}>-</Button>
              <Typography>{item.quant}</Typography>
              <ColorButton 
                size="small"
                variant="contained"
                onClick={() => quantityIncrement(item)}
                style={{ width: '5%' }}
              >
                +
              </ColorButton>
              <Button size="small" onClick={() => removeCartItem(item)} ><Delete/></Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  //   <>
  //   <Card  sx={{ maxWidth: 300, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
  //     <CardMedia
  //       component="img"
  //       height="100"
  //       image={item.imageURL}
  //       alt="green iguana"
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h5" component="div">
  //         {item.name}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         Rs.{item.price}
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //         <Button onClick={() => quantityDecrement(item)}>-</Button>
  //         <Typography>{item.quant}</Typography>
  //         <Button onClick={() => quantityIncrement(item)}>+</Button>
  //         <Button size="small" onClick={() => removeCartItem(item)} ><Delete/></Button>
  //       </CardActions>
  //   </Card>
    
  // </>
  );
}

export default CartItem;


