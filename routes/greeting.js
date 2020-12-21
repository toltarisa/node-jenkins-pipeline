module.exports = {
  hello: function (req, res) {
    if (!req.body.name) {
      res.send('An error occurred: Name is a required paramter');
    }
  },
};
