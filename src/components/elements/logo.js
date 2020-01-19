import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => (
  <Link to={props.link}>
    <p className="logo-text">
      Logo.
    </p>
  </Link>
);

export default Logo;
