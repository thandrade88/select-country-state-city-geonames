import React, { useState } from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import GeoLocation from "./GeoLocation";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  console.log({
    country,
    state,
    city
  });

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <GeoLocation
                locationTitle="Country"
                isCountry
                onChange={setCountry}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <GeoLocation
                locationTitle="State"
                onChange={setState}
                geoId={country}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <GeoLocation
                locationTitle="City"
                onChange={setCity}
                geoId={state}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default App;
