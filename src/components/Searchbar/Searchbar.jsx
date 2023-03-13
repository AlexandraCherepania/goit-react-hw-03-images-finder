import React, { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({
      searchName: event.currentTarget.value.toLowerCase(),
    });
  };

  submitForm = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Введіть назву картинки для прошуку:)');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.submitForm}>
          

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleNameChange}
          />

          <button type="submit" className={css.SearchButton}>
            <span className={css.SearchButtonLabel}>Search</span>
          </button>
        
        </form>
      </header>
    );
  }
}
