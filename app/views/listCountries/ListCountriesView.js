import React, { Component } from 'react';
import { fetchCountriesList } from './listCountries.actions';
import { connect } from 'react-redux';
import { CountriesList, LayoutHeader } from '../../components';

class ListCountriesView extends Component {
  constructor(props) {
    super(props);
    // Fetch the data when component is initialized
    props.fetchData();
  }

  render() {
    const { countries } = this.props;

    return (
      <div>
        <LayoutHeader title='Olympics 2008' subtitle='Click on the countries to see more details' />
        <CountriesList countries={countries} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.listCountries.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => { dispatch(fetchCountriesList()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCountriesView);
