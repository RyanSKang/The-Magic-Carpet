const express = require("express");
const router = express.Router();
const unirest = require("unirest");
const test = require("../../");
const mockData = require("../../");

router.get("/quotes/:from/:to/:departDate", (req, res, next) => {
	const { from, to, departDate } = req.params;
	const { incomingDate } = req.query;
	const errors = {};

	const origin = test.validateLocation(from, errors, "from");
	const destination = test.validateLocation(to, errors, "to");

	const outDate = test.validateDate(departDate, errors, "departDate");
	const inDate = incomingDate
		? test.validateDate(incomingDate, errors, "incomingDate")
		: "";
	const leaveDate =
		errors.departDate ||
		test.checkleaveDate(outDate, errors, "departDate");
	const comebackDate =
		inDate && !errors.incomingDate
			? test.checkcomebackDate(inDate, outDate, errors, "incomingDate")
			: inDate;

	if (!Object.keys(errors).length) {
		const info = {
			from: origin,
			to: destination,
			departure: leaveDate,
			returning: comebackDate,
		};

		res.status(200).json(mockData(info));
	} else {
		res.send(errors);
	}
});

router.get("/places/:regionId", (req, res, next) => {
	const { regionId } = req.params;
	const error = {};
	const region = test.validateLocation(regionId, error, "region");
	if (!Object.keys(error).length) {
		const request = unirest(
			"GET",
			``
		);

		request.query({
			query: region,
		});

		request.headers({
			"": ApiKey,
			"": ApiHost,
			useQueryString: true,
		});
		request
			.then((response) => {
				res.status(200).json(response.body);
			})
			.catch((err) => {
				next(err);
			});
	} else {
		res.send(error);
	}
});

module.exports = router;