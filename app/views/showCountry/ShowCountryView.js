import React, { Component } from 'react';
import { fetchCountry } from './showCountry.actions';
import { connect } from 'react-redux';
import { LayoutHeader, CountryHeadline, MedalsGrid } from '../../components';

class ShowCountryView extends Component {
  constructor(props) {
    super(props);
    // Fetch the data when component is initialized
    props.fetchData(props.params.name);
  }

  render() {
    const { country } = this.props;
    if(!country) return false;

    return (
      <div>
        <CountryHeadline country={country} />
        <LayoutHeader title={`${country.name} medals`} />
        <MedalsGrid medalists={country.medalists} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.showCountry.country,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchData: (name) => { dispatch(fetchCountry(name)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowCountryView);
