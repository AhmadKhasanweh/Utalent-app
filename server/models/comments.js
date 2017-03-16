let mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  post_id : {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'posts'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('comments', CommentSchema);