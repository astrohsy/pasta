import Joi from "joi";

module.exports = {
	login,
};

const login = {
	payload: {
		email: Joi.string().required(),
		password: Joi.string().required(),
	}
}
