import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Headder from "../Header";

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-top: 5em;
  user-select: none;
`;

const ComponentWrapper = styled.div`
  // margin-bottom: 200px;
  overflow-x: hidden;
  background: #fafaf7;
`;

const Layout = (Component) => (props) => {
  return (
    <LayoutWrapper>
      <Headder />
      <ComponentWrapper>
        <Component {...props} />
      </ComponentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;