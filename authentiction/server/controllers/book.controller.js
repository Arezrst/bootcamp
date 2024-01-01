const Response = require("../utils/response");

exports.getBooks  = (req, res) => {

  res.status(200).json(new Response([], true, "Success"));
}
