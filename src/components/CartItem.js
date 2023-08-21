import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainerStyle: {
    flexGrow: 1,
    border: '1px solid #e0e0e0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
  },
  imageStyle: {
    maxWidth: '50%',
    maxHeight: '150px',
    objectFit: 'fill',
  },
  quantityContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center', 
  }
}));

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "darkgrey"
  },
}));

const CartItem = ({ item, quantityDecrement, quantityIncrement, removeCartItem }) => {
  const classes = useStyles();
  const { imageURL, name, price } = item;
  return (
    <Grid container item xs={12} className={classes.gridContainerStyle}>
      <Grid item xs={12} sm={3} className={classes.imageBox}>
        <img src={imageURL} alt="Product" className={classes.imageStyle}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="h6" style={{ margin: '0px 0px' }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container item justifyContent="space-around" alignItems="center" xs={12}>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <Typography variant="h6" style={{ margin: '0px 0px' }}>
              Rs. {price}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3}  className={classes.quantityContainerStyle}>
            <Button onClick={() => quantityDecrement(item)}>-</Button>
            <Typography>{item.quant}</Typography>
            <Button onClick={() => quantityIncrement(item)}>+</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Stack spacing={2} direction="row">
              <ColorButton 
                size="small"
                variant="contained"
                onClick={() => removeCartItem(item)}
                style={{ width: '100%', margin: '0 1.5rem 0 1.5rem' }}
              >
                Remove
              </ColorButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartItem;


