import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import TakePhotos from './API/API';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    gallery: '',
    images: [],
    page: 1,
    modalGallery: null,
    tags: '',
    isModalOpen: false,
    loading: false,
  };

  handleFormSubmit = gallery => {
    this.setState({ gallery, page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.gallery !== this.state.gallery ||
      prevState.page !== this.state.page
    ) {

    this.setState({loading: true})

      const array = await TakePhotos(this.state.gallery, this.state.page);

      if (this.state.page !== 1) {
        this.setState(prevState => ({
          images: [...prevState.images, ...array], loading: false
        }));
      } else {
        this.setState({ images: [...array], loading: false });
      }
    }
  }

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = (modalGallery, tags) => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      modalGallery,
      tags,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery openModal={this.openModal} gallery={this.state.images} />
        {this.state.images.length > 1 && (
          <Button buttonTitle="Load more" changePage={this.changePage}/>
        )}
        {this.state.isModalOpen &&
        <Modal
          openModal={this.openModal}
          imgUrl={this.state.modalGallery}
          imgTag={this.state.tags}
          />}
        {this.state.loading && <Loader/>}
        
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
