require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function (app) {
    app.get("/api/books", (req, res) => {
        db.Book.find().then(
            (booksData) => {
                res.json(booksData);
            }
        ).catch(
            (err) => {
                res.json({ error: err });
            }
        );
    });

    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(
            (response) => {
                res.json({ successful: response });
            }
        ).catch(
            (err) => {
                res.json({ error: err });
            }
        );
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({ successful: response });
            }
        ).catch(
            (err) => {
                rres.json({ error: err });
            }
        );
    });

    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}