import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: indianred;
  font-size: 1.2rem;
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    text-shadow: 2px 2px 6px brown;
  }
`;

const StyledDescrip = styled.p`
  font-size: 1rem;
  font-family: serif;
  margin-top: 1%;
  text-align: left;
`;

const Listing = ({ listing }) => {
  return (
    <div className='listing-wrapper'>
      <StyledLink
        to={`/listing/${listing.id}`}
        onClick={() => selectListing(listing.id)}
      >
        {listing.name}
      </StyledLink>
      <hr />
      <StyledDescrip>{listing.description}</StyledDescrip>
    </div>
  );
};

export default connect(null, { selectListing })(Listing);