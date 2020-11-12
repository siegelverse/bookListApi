'use strict';


const mongoose = require('mongoose'),
  Book = mongoose.model('Books');
exports.list_all_books = (req, res) => {
  Book.find({}, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};




exports.create_a_book = (req, res) => {
  let new_book = new Book(req.body);
  new_book.save((err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.read_a_book = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.update_a_book = (req, res) => {
 Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.delete_a_book = (req, res) => {


  Book.remove({
    _id: req.params.bookId
  }, (err, book) => {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};