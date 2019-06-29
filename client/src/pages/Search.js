import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {

    state = {
        books: [],
        title: "",
        author: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("search chosen");
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
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <FormBtn
                            disabled={!this.state.title}
                            onClick={this.handleFormSubmit}
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