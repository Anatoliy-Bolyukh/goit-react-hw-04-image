import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Seachbar({onSubmit}) {
  const [gallery, setGallery] = useState('')

  const handleNameChange = event => {
    setGallery( event.currentTarget.value.toLowerCase())
  };

  const handleSubmite = event => {
    event.preventDefault();

    if (gallery.trim() === '') {
      toast('🦄 Введіть дані!');
      return;
    }
    onSubmit(gallery);
    setGallery('');
  };

    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={handleSubmite}>
          <button type="submit" className="button">
            <span className="searchFormButtonLabel">Search</span>
          </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={gallery}
              onChange={handleNameChange}
            />
        </form>
      </header>
    );
  }

Seachbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Seachbar;
