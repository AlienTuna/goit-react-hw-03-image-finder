
export default function ImageGalleryItem({ previewURL, largeImageURL, tags }) {
    // const {id, previewURL, largeImageURL, tags} = item
    return (
        <li>
            <img src={previewURL} alt={tags} large={largeImageURL} />
        </li>
    )
}