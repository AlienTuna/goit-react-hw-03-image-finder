import { Component } from 'react'

import css from './Modal.module.css'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscapeKeyDown);
    }

    handleEscapeKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onCloseModal();
        }
    }

    handleOverlayClick = (e) => {
        this.props.onCloseModal();
    }

    render() {
        const { src, alt } = this.props;

        return (
            <div
                className={css.ModalOverlay}
                onClick={this.handleOverlayClick}
            >
                <div className={css.ModalImgContainer}>
                    <img
                    className={css.ModalImg}
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>)
    }
}