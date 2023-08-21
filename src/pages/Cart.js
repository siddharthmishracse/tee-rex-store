import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "darkgrey"
  },
  cartItem: {
    display: 'flex', 
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const Cart = ({ cartItems, quantityIncrement, quantityDecrement, removeCartItem }) => {
let totalAmount = cartItems.reduce((a, c) => a + c.price * c.quant, 0);

const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      {cartItems.length > 0 ? (
        <Grid item xs={12}>
          <Grid container item xs={12} justifyContent="center" alignItems="center">
            <Typography variant="h4">Shopping Cart</Typography>
          </Grid>
          <Grid container item={8} style={{ display: 'flex', justifyContent: 'center'}}>
            {cartItems.map((item) => {
                return(
                    <Grid key={item.id} item xs={8}>
                        <CartItem item={item} quantityDecrement={quantityDecrement} quantityIncrement={quantityIncrement} removeCartItem={removeCartItem}/>
                    </Grid>
                ) 
              })}
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">
                  YOUR CART SUMMARY
                </Typography>
                <Typography variant="h5">
                  {" "}
                  <span className="amount">
                    Total Amount
                  </span>{" "}
                  : Rs. {totalAmount}
                </Typography>
              </Grid>
        </Grid>
    ) : (
    <>
      <Grid item xs={12}>
        <Typography variant="h6" style={{ margin: '0px 0px' }}>
            Your cart is empty!
        </Typography>
        <Link to={"/"}>
          <ColorButton size="small" variant="contained">
            SHOP NOW
          </ColorButton>
        </Link>
      </Grid>
    </>
    )}
    </Grid>
  );
};

export default Cart;
    