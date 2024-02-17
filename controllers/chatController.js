const Chat = require("../models/Chat");

module.exports.createChat = async (req, res) => {
  try {
    const { firstPerson, secondPerson } = req.body;

    const existingChat = await Chat.findOne({
      members: { $all: [firstPerson, secondPerson] },
    });

    if (existingChat) {
      return res.status(200).json(existingChat);
    }

    const newChat = new Chat({ members: [firstPerson, secondPerson] });
    const savedChat = await newChat.save();

    res.status(200).json(savedChat);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
