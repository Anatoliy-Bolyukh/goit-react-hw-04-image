import ImageGalleryItem from '../../components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ openModal, gallery }) => {
  return (
    <ul className="imageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            className="imageGallery"
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            openModal={openModal}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array,
  openModal: PropTypes.func,
};

export default ImageGallery;
