import express from "express";
import config from "../config";
import {hostAuthenticate} from "../middleware/authenticate";
import CookieKeys from "../CookieKeys.js";

const {routePage} = config;
const router = express.Router();

router.get("/logout", (req, res, next) => {
	res.clearCookie(CookieKeys.HOST_APP).redirect(routePage.main);
});

router.get("/", hostAuthenticate(), (req, res, next) => {
	res.redirect(routePage.main);
});

module.exports = router;
