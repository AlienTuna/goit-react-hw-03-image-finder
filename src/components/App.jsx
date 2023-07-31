import { Component } from "react";
import { ToastContainer } from "react-toastify";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    searchQuery: '',
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query })
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
          <ImageGallery
            searchQuery={searchQuery}
          />
        <ToastContainer
          position="top-center"
          theme="dark"
        />
      </div>
    );
  }
};
