import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import BookDiv from "../components/BookDiv";
// import API from "../utils/API";

class Search extends Component {

    state = {
        bookData: [],
        searchTitle: "",
        lastQuery: ""

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.searchTitle}`, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                console.log(json.items);
                this.setState({ bookData: json.items, lastQuery: this.state.searchTitle });
            });
    };

    bookImage(book) {
        if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) {
            return book.volumeInfo.imageLinks.thumbnail
        } else if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) {
            return book.volumeInfo.imageLinks.smallThumbnail
        } else {
            return ''
        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Search Google Books</h1>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <Input
                                    value={this.state.searchTitle}
                                    onChange={this.handleInputChange}
                                    name="searchTitle"
                                    placeholder="Search Books by Title"
                                />
                                <FormBtn
                                    disabled={!this.state.searchTitle}
                                    onClick={this.handleSearchSubmit}
                                >
                                    Search
                            </FormBtn>
                            </form>
                        </div>
                    </div>
                    {this.state.bookData.map(book => (
                        <BookDiv
                            id={book.id}
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            // image={"link"}
                            // image={book.volumeInfo.imageLinks.thumbnail || ''}
                            image={this.bookImage(book)}
                            link={book.volumeInfo.infoLink}
                        />
                    ))}
                </div>
            </div >
        );
    }
}

export default Search;