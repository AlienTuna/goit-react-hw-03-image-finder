
export default function ImageGalleryItem({ previewURL, largeImageURL, tags, onClick }) {
    return (
        <li onClick={onClick}>
            <img src={previewURL} alt={tags} large={largeImageURL} />
        </li>
    )
}