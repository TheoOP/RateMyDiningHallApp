// import {admin } from "firebase-config"

const admin = require('./firebase-config');


class Middleware {
	async decodeToken(req: any, res: any, next: any) {
		const token = req?.Headers.authorization.split(' ')[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				console.log("DECODE VAL IS");
                console.log(decodeValue);
				return next();
			}
			return res.json({ message: 'Unauthorized' });
		} catch (e) {
			return res.json({ message: 'Internal Error' });
		}
	}
}
module.exports = new Middleware();