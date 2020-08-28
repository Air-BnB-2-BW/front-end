import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createListing, getListings } from "../redux/actions";

class ListPage extends React.Component {
  componentDidMount() {
    this.props.getListings();
  }
  render() {
    const { listings = [] } = this.props;
    return (
      <div>
        {listings.map((listing) =>
          Object.keys(listing).map((key) => (
            <div>
              {key}: {listing[key]}
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};
const mapDispatchToProps = {
  createListing,
  getListings,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
