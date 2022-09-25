import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import TakePhotos from './API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export default function App() {
  const [gallery, setGallery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [modalGallery, setModalGallery] = useState(null);
  const [tags, setTags] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = value => {
    setGallery(value);
    setPage(1);
  };

  useEffect(() => {
    if (gallery === '') return;
    setLoading(true);

    TakePhotos(gallery, page).then(array => {
      try {
        if (page === 1) {
          setImages(array);
        } else {
          setImages(set => [...set, ...array]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  }, [gallery, page]);

  const changePage = () => setPage(set => set + 1);

  const openModal = (modalGallery, tags) => {
    setIsModalOpen(!isModalOpen);
    setModalGallery(modalGallery);
    setTags(tags);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery openModal={openModal} gallery={images} />
      {images.length > 1 && (
        <Button buttonTitle="Load more" changePage={changePage} />
      )}
      {isModalOpen && (
        <Modal openModal={openModal} imgUrl={modalGallery} imgTag={tags} />
      )}
      {loading && <Loader />}

      <ToastContainer autoClose={3000} />
    </>
  );
}
