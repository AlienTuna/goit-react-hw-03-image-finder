import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
    state = {
        txt: ''
    }

    handleInputChange = e => {
        this.setState({ txt: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        const txt = this.state.txt.trim();
        if(!txt || txt === '') {
            toast.warn('Insert search query')
            return
        }

        this.props.onSubmit(txt)
        // this.setState({ txt: '' })
    }
    render() {
        const { txt } = this.state;
        return (
            <header>
                <form
                    onSubmit={this.handleSubmit}>
                    <button type="submit">
                        {/* <span class="button-label">Search</span> */}
                        <ImSearch />
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={txt}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        )
    }
}