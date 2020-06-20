import React, { Fragment } from "react";
import "./styles.css";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import { RouteComponentProps, Route, withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import GalleryMain from "../../features/gallery/GalleryMain";
import UploadMain from "../../features/upload/UploadMain";

const App: React.FC<RouteComponentProps> = () => {

  return (
    <Fragment>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route
        /* These symbols, "(.+)", act as regex type expression that say anything with ONE or more of ANY character after a forward
        slash will make our router utilize the below routes. I.e. localhost:3000/ will lead us to the home page, whereas localhost:3000/gallery
        will lead us to our gallery component */
        path={"/(.+)"}
        render={() => (
          <Fragment>
            {/* We add a container here since the HTML for our fixed nav bar has an 'absolute' position, to work around this we just add a large margin
            to a container for any future components in our router components */}
            <Container style={{ marginTop: "5em" }}>
              <Route exact path="/gallery" component={GalleryMain}/>
              <Route exact path="/upload" component={UploadMain} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(App);
