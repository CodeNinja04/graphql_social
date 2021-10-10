const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  heading: String,
  body: String,
  comments: [
      {
          body: String,
          username: String,
          createdAt:String

      }
  ],
  likes:[
      {
          username: String,
          createdAt:String
      }
  ],
  user : {
      type: Schema.Types.ObjectID,
      ref:'users'
  },
  createdAt: String,
});


module.exports = model("Post", PostSchema);
