require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const bcrypt = require("bcrypt");

const auth = require("../middleware/auth");

const { createStripeUser } = require("../services/stripe");
const User = require("../models/User");

const validateRegisterText = require("../validation/register");
const validateLoginText = require("../validation/login");

const register = (req, res) => {
  const { email, name, password } = req.body;
  const { errors, isValid } = validateRegisterText(req.body);
  const saltRounds = 10;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "This has Failed" });
    } else {
      createStripeUser({ email })
        .then((data) => {
          const firstTimer = new User({
            name: name,
            email: email,
            password: password,
            customer: { stripeId: data.id },
          });
          bcrypt.hash(firstTimer.password, saltRounds, (err, hash) => {
            if (err) throw err;
            firstTimer.password = hash;
            firstTimer
              .save()
              .then((user) => {
                if (user) {
                  const payload = { id: user._id, email: user.email };
                  const token = jwt.sign(payload, process.env.JWT_SECRET);
                  res.set(
                    "Set-Cookie",
                    cookie.serialize("token", token, {
                      httpOnly: true,
                      secure: process.env.NODE_ENV === "production",
                      sameSite: "strict",
                      maxAge: 4000,
                      path: "/",
                    }),
                  );
                }
                res
                  .status(200)
                  .json({ status: "Completed", data: { user: user } });
              })
              .catch((err) => {
                res.status(400).json({ message: err.message });
              });
          });
        })
        .catch((err) => {
          res.status(400).json({ message: err.message });
        });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validateLoginText(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ email: "Authentication Did not work" });
    }
    bcrypt.compare(password, user.password).then((passwordMatch) => {
      if (passwordMatch) {
        const payload = { id: user._id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.set(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 4000,
            path: "/",
          }),
        );
        return res.json({ status: "success", data: { user: user } });
      } else {
        return res.status(400).json({ password: "This password is not correct" });
      }
    });
  });
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
  res.status(200).redirect("/");
};

const authorized = (req, res) => {
  return res.json({ user: res.locals.user });
};

const updateYourCities = (req, res) => {
  const user = res.locals.user;
  user.yourCities = req.body.cities;
  user
    .save()
    .then((revisedUser) => {
      res.json({ message: "Updated", data: { user: revisedUser } });
    })
    .catch((err) => {
      throw err;
    });
};

const addHomeTown = async (req, res) => {
  const user = res.locals.user;
  user.homeTown = req.body.homeTown;
  try {
    const revisedUser = await user.save();
    if (revisedUser) {
      return res
        .status(200)
        .json({ status: "Success", data: { user: revisedUser } });
    }
  } catch (error) {
    throw error;
  }
};

const yourCities = (req, res) => {
  res.json(res.locals.user.yourCities);
};

router.post("/register", register);
router.post("/login", login);
router.get("/auth", auth, authorized);
router.post("/:userId/your-cities", auth, updateYourCities);
router.get("/:userId/your-cities", auth, yourCities);
router.post("/:userId/add-hometown", auth, addHomeTown);
router.get("/logout", logout);

module.exports = router;