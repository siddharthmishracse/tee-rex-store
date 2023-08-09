import React from "react";
import { useState } from "react";
import Product from "../components/Product";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Home = ({ products,updateProduct }) => {
  const [search, setNewSearch] = useState("");
  const classes = useStyles();

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filteredproducts = !search
    ? products
    : products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) 
      );
  
  return (
    <>
    <Grid container className={classes.root} spacing={3} style={{pading: '1rem'}}>
      <Grid item xs={12} style={{ margin: '2rem' }}>
        <TextField
          id="standard-basic"
          label="Search for Products"
          variant="standard"
          value={search}
          onChange={handleSearchChange}
        />
      </Grid>
      <Grid item xs={12} style={{margin:'2rem'}}>
        <Grid container spacing={5}>
          {filteredproducts.length !== 0 ? (
            filteredproducts.map((item) => (
              <Grid item xs={6} sm={4} md={3} lg={3} key={item.id} >
                <Product item={item} updateProduct={updateProduct}  style={{ maxWidth: '100%' }}/>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6">No products Found</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid> 
    </>
  );
}

export default Home;

