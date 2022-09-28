const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM user", (err, users) => {
      if (err) res.json({ ResponseCode: 404, error: err });
      res.json({ ResponseCode: 200, length: users.length, data: users }); // res.render('users', {data: users});
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body);
  req.getConnection((err, connection) => {
    const query = connection.query(
      "INSERT INTO user set ?",
      data,
      (err, user) => {
        console.log(user);
        if (err) res.json({ ResponseCode: 404, error: err });
        res.json({ ResponseCode: 200, data: user, message: "user added" }); // res.redirect('/');
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM user WHERE id = ?", [id], (err, rows) => {
      if (err) res.json({ ResponseCode: 404, error: err }); // res.render('users_edit', {data: rows[0]})
      res.json({ ResponseCode: 200, data: rows[0], message: "user edit" });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE user set ? where id = ?",
      [newCustomer, id],
      (err, rows) => {
        if (err) res.json({ ResponseCode: 404, error: err }); // res.redirect('/');
        res.json({ ResponseCode: 200, message: "user updated" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query("DELETE FROM user WHERE id = ?", [id], (err, rows) => {
      if (err) res.json({ ResponseCode: 404, error: err }); // res.redirect('/');
      res.json({ ResponseCode: 200, message: "user deleted" });
    });
  });
};

module.exports = controller;
