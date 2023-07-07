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
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = (countCartItems) => {
  const classes = useStyles();
  return (
    
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
            <Typography>
              Tee-Rex-Store
            </Typography>
              
            
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
            
        </Toolbar>
      </AppBar>
  
  );
}
export default Navbar;

