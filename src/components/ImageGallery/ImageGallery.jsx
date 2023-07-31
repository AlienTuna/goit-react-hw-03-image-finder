import { Component } from "react";

import PixabayServices from "services/pixabay-services";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
    state = {
        images: null
    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.searchQuery;
        const currentQuery = this.props.searchQuery;

        if (prevQuery !== currentQuery) {
            // this.setState({images: null});
            this.setState({ loading: true })

            PixabayServices.getImages(currentQuery)
                .then(result => this.setState({ images: result.data.hits }))
                .catch(error => console.log('ERROR', error))
                .finally(() => this.setState({ loading: false }))
        }
    }

    render() {
        const items = this.state.images;
        console.log('ITEMS IN GALLERY', items)
        return (
            <ul>
                {items && items.length > 0 ?
                    (
                        items.map(
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
                        )
                    )
                    : "Empty gallery"
                }
            </ul>
        )
    }
}