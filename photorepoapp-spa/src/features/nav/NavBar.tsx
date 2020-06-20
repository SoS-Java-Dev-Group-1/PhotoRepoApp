import React from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import '../../app/layout/styles.css';

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Icon name="compress" size="large" />
          ImgRepos.io
        </Menu.Item>
        <Menu.Item header name="Gallery" />
        <Menu.Item header name="Upload" />
      </Container>
    </Menu>
  );
};

export default NavBar;
