import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, openModal, tags }) => {
    return (
      
    <li key={id} className="imageGalleryItem">
      <img className="imageGalleryItemImage"
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL, tags)}
      />
        </li>
        
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem
