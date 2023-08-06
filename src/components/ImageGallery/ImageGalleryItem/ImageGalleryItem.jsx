import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({ previewURL, largeImageURL, tags, onClick }) {
    return (
        <li className={css.item}>
            <img
                src={previewURL}
                alt={tags}
                large={largeImageURL}
                className={css.img}
                onClick={() => onClick(largeImageURL, tags)}
            />
        </li>
    )
}