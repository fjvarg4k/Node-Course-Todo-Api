const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5babe217ca36ddc65f01a420'}).then((todo) => {

});

Todo.findByIdAndRemove('5babe217ca36ddc65f01a420').then((todo) => {
  console.log(todo);
});
