import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBookDiv from "../components/SavedBookDiv";
import API from "../utils/API";

class Saved extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Saved Books</h1>
                </Jumbotron>
                <div className="container">
                    {this.state.books.length ? (
                        <div>
                            {this.state.books.map(book => (
                                <SavedBookDiv
                                    key={book._id}
                                    id={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    deleteBook={this.deleteBook}
                                />
                            ))}
                        </div>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}

                </div>
            </div >
        );
    }
}

export default Saved;