import React, { Component } from 'react';
import API from "../../utils/API";

class BookDiv extends Component {
    saveBook(props) {
        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        })
    }

    render() {
        const altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png';

        return (

            <div className="bg-light p-3 mb-3">
                <p>{this.props.title}</p>
                <img src={this.props.image} alt={altImage}></img>
                <p>Authors</p>
                <p>
                    {(this.props.authors) ? this.props.authors.join(", ") : "N/A"}
                </p>
                <p>{this.props.description}</p>
                <a href={this.props.link}>Link</a>
                <button className="btn-dark">Save</button>
            </div>
        )
    }
}

export default BookDiv;