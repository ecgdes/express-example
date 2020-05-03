const PostModel = require("./../models/post.model");

const status = require("./../utils/crud.response");

const PostController = {
  get: async (req, res) => {
    let result = null;
    if (req.params.id)
      result = await PostModel.findById(req.params.id);
    else
      result = await PostModel.find();

    res.send(result);
  },

  post: async (req, res) => {
    const post = new PostModel(req.body);
    await post.save();
    res.send(status.OK);
  },

  put: async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await PostModel.findByIdAndUpdate(id, post);
    res.send(status.OK);
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await PostModel.findByIdAndDelete(id);
    res.send(status.OK);
  },
};

module.exports = PostController;
