import {Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import './main-menu.css';

const Header = ({siteTitle}) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <ul style={{
        margin: `0`,
        padding: `0`,
        listStyleType: `none`,
        display: `flex`
      }}>
        <li>
          <Link to="/" activeClassName="active">{siteTitle}</Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active">About us</Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="active">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
