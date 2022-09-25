// import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class Seachbar extends Component {
  state = {
    gallery: '',
  };

  handleNameChange = event => {
    this.setState({ gallery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmite = event => {
    event.preventDefault();

    if (this.state.gallery.trim() === '') {
      toast('🦄 Введіть дані!');
      return;
    }
    this.props.onSubmit(this.state.gallery);
    this.setState({ gallery: '' });


  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmite}>
          <button type="submit" className="button">
            <span className="searchFormButtonLabel">Search</span>
          </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.gallery}
              onChange={this.handleNameChange}
            />
        </form>
      </header>
    );
  }
}

export default Seachbar;
