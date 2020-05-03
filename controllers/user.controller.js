const UserModel = require("./../models/user.model");

const crudreponses = require("./../utils/crud.response");

const UserController = {
  get: async (req, res) => {
    let result = null;
    if (req.params.id)
      result = await UserModel.findById(req.params.id);
    else result = await UserModel.find();
    res.send(result);
  },

  post: async (req, res) => {
    const user = new UserModel(req.body);
    await user.save();
    res.send(crudreponses.OK);
  },

  put: async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    await UserModel.findByIdAndUpdate(id, user);
    res.send(crudresponses.OK);
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndDelete(id);
    res.send(crudreponses.OK);
  },
};

module.exports = UserController;
