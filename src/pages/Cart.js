import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Cart = ({ cartItems, quantityIncrement, quantityDecrement, removeCartItem }) => {
let totalAmount = cartItems.reduce((a, c) => a + c.price * c.quant, 0);

const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      {cartItems.length > 0 ? (
        <>
          <Grid item xs={12} style={{ margin: '4rem' }}>
              <Typography>Shopping Cart</Typography>
            <Grid container item xs={12}>
              {cartItems.map((item) => {
                return(
                    <Grid key={item.id} item xs={12} style={{margin: '2rem'}} >
                        <CartItem key={item.id} item={item} quantityDecrement={quantityDecrement} quantityIncrement={quantityIncrement} removeCartItem={removeCartItem}  />
                    </Grid>
                ) 
              })}
            </Grid>
            <Grid>
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
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Typography>
              Your cart is empty!
            </Typography>
            <Link to={"/"}>
              <button className="">
                SHOP NOW
              </button>
            </Link>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Cart;
