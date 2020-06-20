import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import "./homepage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  const style = {
    centered: {
      maxWidth: 300,
      maxHeight: 300,
    },
  };

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      container
      columns={2}
      doubling
      style={{ height: "100vh" }}
    >
      {/* For now we're going to use 'as={Link}' to utilize our router, later we can add our own styling to 'Link' or we can use an onClick event
      so our 'Segment' element can act as a button, or in this case, as a 'Link' -- see https://reacttraining.com/react-router/web/guides/primary-components
      for more information */}
      <Grid.Column as={Link} to="/gallery" style={style.centered}>
        <Segment to="/gallery" textAlign="center" className="selection-card">
          <i className="massive tv icon" />
          <h4>View Gallery</h4>
        </Segment>
      </Grid.Column>
      <Grid.Column as={Link} to="/upload" style={style.centered}>
        <Segment textAlign="center" className="selection-card">
          <i className="massive camera retro icon" />
          <h4>Upload an Image</h4>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default HomePage;
