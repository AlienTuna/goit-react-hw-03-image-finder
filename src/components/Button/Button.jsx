import css from "./Button.module.css";

export default function Button({ onClick }) {
    return (
        <button type="button"
            onClick={onClick}
            className={css.Button}
        >
            Load more
        </button>
    )
}