import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "19px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "white",
      borderBottom: "0.5px solid white",
    },
  },
}));

const Navbar = (countCartItems) => {
  const classes = useStyles();
  return (
      <AppBar position="static" style={{ overflowX: 'hidden' , backgroundColor: 'black'}}>
        <CssBaseline />
        <Toolbar style={{ justifyContent: 'space-between' }}>
            <Typography>
              Tee-Rex-Store
            </Typography>   
            <div style={{ display: 'flex' }}>
            <Link to="/" className={classes.link} component="button">
                  Products
              </Link>
                <Link to="/cart" className={classes.link} component="button">
                  <AddShoppingCartIcon/>
                  {countCartItems > 0 && (
                    <>
                      {countCartItems}
                    </>
                )}
                </Link>
            </div>                    
        </Toolbar>
      </AppBar> 
  );
}
export default Navbar;

