import faker from "faker";
import config from "./initialConfig";

const {INIT_SEED, GUEST_NUM} = config;

faker.seed(INIT_SEED);

export default function makeEmojiDummy(number = 50) {
	const bulkEmoji = [];

	for (let i = 0; i < number; ++i) {
		const QuestionId = faker.random.number({min: 1, max: 100});
		const GuestId = faker.random.number({min: 1, max: GUEST_NUM});
		const name = "point_up";
		const createdAt = faker.date.past(1);
		const updatedAt = createdAt;

		bulkEmoji.push({
			QuestionId,
			GuestId,
			name,
			createdAt,
			updatedAt,
		});
	}
	return bulkEmoji;
}
