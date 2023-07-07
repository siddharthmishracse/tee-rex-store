import React from "react";
import { useState } from "react";
import Product from "../components/Product";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

  console.log(filteredproducts);
  
  return (
    <>
      <Grid container  className={classes.root} spacing={3}>
        <Grid item xs={12} style={{ padding:'2rem'}}>
          <TextField id="standard-basic" label="Search for Products" variant="standard"  value={search} onChange={handleSearchChange}/>
        </Grid>
        <Grid item xs={12} >
        <Grid container item spacing={4}
          style={{ padding:'1rem'}}
          direction="row"
          display='flex'
          justifyContent="center"
          alignItems="center">
          {
            (filteredproducts.length !== 0) ? (
              filteredproducts.map((item) => {
                return (
                  <Grid item xs={3} >
                    <Product key={item.id} item={item}  updateProduct={updateProduct}/>
                  </Grid>
                )
              })
            ) : 
                <h1>No products Found</h1>            
          }
        </Grid>
        </Grid>
      </Grid>    
    </>
  );
}

export default Home;

