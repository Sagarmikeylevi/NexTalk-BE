const Message = require("../models/Message");

module.exports.createMessage = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;

    const message = new Message({
      chatId,
      senderId,
      text,
    });

    const savedMessage = await message.save();

    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await Message.find({ chatId });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
