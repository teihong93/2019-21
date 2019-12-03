import jwt from "jsonwebtoken";
import loadConfig from "../config/configLoader";

function generateAccessToken(sub, aud) {
	const { tokenArgs } = loadConfig();
	const expiresIn = "1 hour";
	const token = jwt.sign({}, tokenArgs.secret, {
		expiresIn,
		issuer: tokenArgs.issuer,
		audience: aud,
		subject: sub,
	});

	return token;
}

export { generateAccessToken };
