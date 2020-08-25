import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';


const Dashboard = (props) => {
  const { isLoading, message } = props,
    boards = Array.isArray(props.listing) ? props.listing : [];


  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
  };

  return (
    <div>
      <link to='/new-listing'>Create new Listing</link>

      {isLoading && <span className='loading'>Loading Listings...</span>}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {listings ? (
          listings.map((listing) => <Listing key={listing.id} listing={listing} />)
        ) : (
          <span>no listings here</span>
        )}
      </Masonry>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.listing.isLoading,
    listings: state.listing.listings,
    message: state.listing.message,
  };
};

export default (mapStateToProps, {})(Dashboard);