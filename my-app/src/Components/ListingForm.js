import React from "react";
import { CREATE_LISTING_SUCCESS } from "../redux/types";
import { connect } from "react-redux";
import { createListing } from "../redux/actions";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bathrooms: 0,
      bedrooms: 0,
      squareFeet: 0,
    };
  }

  onChange = (type, e) => {
    this.setState({ [type]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createListing(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="bathrooms"
          value={this.state.bathrooms}
          onChange={(e) => this.onChange("bathrooms", e)}
          name="bathrooms"
        />
        <input
          type="text"
          placeholder="bedrooms"
          value={this.state.bedrooms}
          onChange={(e) => this.onChange("bedrooms", e)}
          name="bedrooms"
        />
        <input
          type="text"
          placeholder="squareFeet"
          value={this.state.squareFeet}
          onChange={(e) => this.onChange("squareFeet", e)}
          name="squareFeet"
        />
        <button> ADD LISTING </button>
      </form>
    );
  }
}
const mapStateToProps = () => ({})
const mapDispatchToProps = {
  createListing,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);
