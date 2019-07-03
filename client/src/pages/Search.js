import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
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
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
            .then(response => response.json())
            .then(json => {
                console.log(json.items);
                this.setState({ bookData: json.items, lastQuery: this.state.query });
            });
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Search Google Books</h1>
                </Jumbotron>
                <div className="container">
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
            </div >
        );
    }
}

export default Search;