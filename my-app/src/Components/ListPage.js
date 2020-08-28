import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createListing, getListings, deleteListing } from "../redux/actions";

class ListPage extends React.Component {
  componentDidMount() {
    this.props.getListings();
  }
  render() {
    const { listings = [] } = this.props;
    return (
      <div>
        {listings.map((listing) => (
          <div onClick={() => this.setEditing(listing)}>
            {Object.keys(listing).map((key) => (
              <div key={key}>
                <div>
                  {key}: {listing[key]}
                </div>
              </div>
            ))}
            <div onClick={() => this.deleteListing(listing.id)}>delet</div>
            ))
          </div>
        ))}
      </div>
    );
  }
  setEditing = (listing) => this.props.setEditing(listing)
  deleteListing = (id) => this.props.deleteListing(id);
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};
const mapDispatchToProps = {
  createListing,
  getListings,
  deleteListing,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
