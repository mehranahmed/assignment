import React from 'react';
import lens from './lens.png';
import Autosuggest from 'react-autosuggest';

const cities = [
  {
    name: 'Delhi, India',
    year: 'Delhi Airport',
    shortname: 'DEL',
  },
  {
    name: 'Pune, India',
    year: 'Pune Airport',
    shortname: 'PNQ',
  },  {
    name: 'Hyderabad, India',
    year: 'Rajiv Gandhi International Airport',
    shortname: 'HYD',
  },  {
    name: 'Kolkata, India',
    year: 'Netaji Subhash Chandra Bose International Airport',
    shortname: 'CCU',
  },  {
    name: 'Chennai, India',
    year: 'Madras,Chennai International Airport',
    shortname: 'MAA',
  },
  {
    name: 'Mumbai, India',
    year: 'Chhatrapati Shivaji International Airport',
    shortname: 'BOM',

  },
  {
    name: 'Bangalore, India',
    year: 'BLR, Bengaluru International Airport India',
    shortname: 'BLR',

  },
  {
    name: 'Goa, India',
    year: 'Dabolim Goa International Airport India',
    shortname: 'GOI',

  },
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cities.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};


const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    <div className="Suggestions">Suggestions</div>
<div className="suggestion-flex">
  <div class="suggestion-name">
    {suggestion.name}
   <p className="airport-name">{suggestion.year}</p>
  </div>
   <span className="shortform">{suggestion.shortname}</span>
   </div>
   </div>
);

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'From',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <div className="search-auto-suggestion">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <span className="search-field">
       <img src={lens} className="search-lens" id="search" alt="lens" />
       </span>
      </div>
      </div>
    );
  }
}
export default Search;