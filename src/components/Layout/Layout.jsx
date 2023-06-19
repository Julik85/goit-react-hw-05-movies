import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header, LinkGallery } from "./Layout.styled";

export const Layout =() => {
    return (
        <>
        <Header>
          <LinkGallery>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Search</Link>
            </li>
          </LinkGallery>
        </Header>
        <main>
          <Outlet />  
        </main>
      </>
    )
}