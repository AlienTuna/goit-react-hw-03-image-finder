import { Component } from "react";

import PixabayServices from "services/pixabay-services";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";

export default class ImageGallery extends Component {
    state = {
        images: null,
        page: 1,
        loading: true
    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.searchQuery;
        const currentQuery = this.props.searchQuery;
        const prevPage = prevState.page;
        const {images, page} = this.state;

        if (prevQuery !== currentQuery) {
            // this.setState({images: null});
            this.setState({ loading: true, images: null })

            PixabayServices.getImages(currentQuery, page)
                .then(result => this.setState({ images: result.data.hits }))
                .catch(error => console.log('ERROR', error))
                .finally(() => this.setState({ loading: false }))
        }
        else if (page > prevPage) {
            PixabayServices.getImages(currentQuery, page)
            .then(result => this.setState({ images: [...images, ...result.data.hits] }))
            .catch(error => console.log('ERROR', error))
            .finally(() => this.setState({ loading: false }))
        }
    }


    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))
    }

    render() {
        const items = this.state.images;
        return (
            <>
                {items && items.length > 0 ?
                    (
                        <>
                            <ul>
                                {items.map(
                                    item => {
                                        const { id, previewURL, largeImageURL, tags } = item
                                        return (
                                            <ImageGalleryItem
                                                key={id}
                                                previewURL={previewURL}
                                                largeImageURL={largeImageURL}
                                                tags={tags}
                                            />
                                        )
                                    }
                                )}
                            </ul>
                            <Button onClick={this.loadMore}/>
                        </>
                    )
                    : "Empty gallery"
                }
            </>
        )
    }
}