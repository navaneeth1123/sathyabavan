const express = require("express");
const route = express.Router();
const entriesSchema = require("../model/entriesSchema");
const entriesSchema1 = require("../model/EntriesSchema1");

route.post("/create-user", (req, res, next) => {
  entriesSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(res.data);
      res.json(data);
    }
  });
});

route.post("/make-res", (req, res, next) => {
  entriesSchema1.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(res.data);
      res.json(data);
    }
  });
});

route.post("/login2", (req, res) => {
  const { name, password, id } = req.body;
  entriesSchema.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          name: user.name,
          message: "success",
          success: true,
        });
      } else {
        res.json({
          message: "incorrect",
          success: false,
        });
      }
    } else {
      res.json("no record existis");
    }
  });
});
route.get("/", (req, res, next) => {
  entriesSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});
route
  .route("/update-user/:id")
  .get((req, res, next) => {
    entriesSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err);
      } else {
        console.log("Hi from server");
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    entriesSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });

route.delete("/delete-user/:id", (req, res, next) => {
  entriesSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});
route.get("/view/:id", (req, res, next) => {
  entriesSchema.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});
// route.post("/nameid/:id", (req, res, next) => {
//   const { name } = req.body;
//   entriesSchema.findOne({ name: name }).then((user) => {
//     if (user) {
//       return res.json(name._id);
//     } else {
//       res.json("no record existis");
//     }
//   });
// });
// route.get("/", (req, res, next) => {
//   entriesSchema.find((err, data) => {
//     if (err) {
//       return next(err);
//     } else {
//       return res.json(data);
//     }
//   });
// });

route.post("/forgetpass/id", (req, res) => {
  const { name, password, id } = req.body;
  entriesSchema.findOne({ name: name }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          id: user._id,
          message: "success",
          success: true,
        });
      } else {
        res.json({
          message: "incorrect",
          success: false,
        });
      }
    } else {
      res.json("no record existis");
    }
  });
});

module.exports = route;
