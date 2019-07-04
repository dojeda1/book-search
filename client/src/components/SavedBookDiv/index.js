import React, { Component } from 'react';
import API from "../../utils/API";

class SavedBookDiv extends Component {

    state = {
        bookData: {
            id: this.props.id,
            title: this.props.title,
            authors: this.props.authors,
            description: this.props.description,
            image: this.props.image,
            link: this.props.link
        }
    }

    handleDelete = () => {
        API.deleteBook(this.state.bookData.id)
            .then(res => console.log("deleted"))
            .catch(err => console.log(err));
    };

    render() {
        const altImage = 'http://3.bp.blogspot.com/-tCI0EpMjT8c/ULY7ZYQpx_I/AAAAAAAAAdU/bwAeN4XNTuw/s1600/book.png';

        return (

            <div className="bg-light row p-3 mb-5">
                <div className="col-12">
                    <h4 className="text-info">{this.props.title}</h4>
                    <p>
                        <span className="font-weight-bold">Author(s): </span>{(this.props.authors) ? this.props.authors.join(", ") : "N/A"}
                    </p>
                </div>
                <div className="col-sm-3">
                    <img src={(this.props.image) ? this.props.image : altImage} alt={this.props.title} className="img-fluid"></img>
                </div>
                <div className="col-sm-9">
                    <p className="font-weight-bold">Description:</p>
                    <p>{(this.props.description) ? this.props.description : "N/A"}</p>
                </div>
                <div className="col-12 pt-3">
                    <a href={this.props.link} className="btn float-left text-primary">View More</a>
                    <button className="btn btn-outline-danger float-right" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

export default SavedBookDiv;