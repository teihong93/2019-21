import React from "react";
import {Modal} from "@material-ui/core";
import "emoji-mart/css/emoji-mart.css";
import {Picker} from "emoji-mart";

const customEmojis = [
	{
		name: "Octocat",
		short_names: ["octocat"],
		text: "",
		emoticons: [],
		keywords: ["github"],
		imageUrl:
			"https://github.githubassets.com/images/icons/emoji/octocat.png",
	},
	{
		name: "Speed_metal",
		short_names: ["speed_metal"],
		text: "",
		emoticons: [],
		keywords: ["metal"],
		imageUrl:
			"https://emojis.slackmojis.com/emojis/images/1574902442/7217/speed_metal.gif?1574902442",
	},
	{
		name: "Christmas_parrot",
		short_names: ["christmas_parrot"],
		text: "",
		emoticons: [],
		keywords: ["parrot"],
		imageUrl:
			"https://emojis.slackmojis.com/emojis/images/1495224255/2288/christmas_parrot.gif?1495224255",
	},
	{
		name: "Meow_party",
		short_names: ["meow_party"],
		text: "",
		emoticons: [],
		keywords: ["meow"],
		imageUrl:
			"https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763",
	},
];

function EmojiPickerModal({onClose, onSelect}) {
	return (
		<Modal open autoFocus onClose={onClose}>
			<Picker
				style={{position: "absolute", bottom: "20px", right: "20px"}}
				onSelect={onSelect}
				title="Pick your emoji…"
				custom={customEmojis}
			/>
		</Modal>
	);
}

export default EmojiPickerModal;
