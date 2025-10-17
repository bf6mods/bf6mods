import { ParseUI } from "../../modlib/index.ts";
import { MakeMessage } from "../message.ts";

export class CountdownUI {
	static #uniqueID = 0;
	#playerId: mod.Player;
	#playerProfileId: number;

	headerWidget: mod.UIWidget | undefined;
	textWidget: mod.UIWidget | undefined;

	constructor(playerId: mod.Player) {
		this.#playerProfileId = CountdownUI.#uniqueID++;
		this.#playerId = playerId;

		const bfBlueColor = [0.678, 0.753, 0.8];
		const height = 125;
		this.headerWidget = ParseUI({
			type: "Container",
			size: [150, height],
			position: [0, 50],
			name: `countdown_${this.#playerProfileId}`,
			anchor: mod.UIAnchor.TopCenter,
			bgFill: mod.UIBgFill.Blur,
			bgColor: [0.2, 0.2, 0.3],
			bgAlpha: 0.9,
			playerId: this.#playerId,
			visible: false,
			children: [
				{
					type: "Container",
					name: `countdown_line_right_${this.#playerProfileId}`,
					size: [2, height],
					position: [75, 0],
					anchor: mod.UIAnchor.Center,
					bgFill: mod.UIBgFill.Solid,
					bgColor: bfBlueColor,
					bgAlpha: 1,
				},
				{
					type: "Container",
					name: `countdown_line_left_${this.#playerProfileId}`,
					size: [2, height],
					position: [-75, 0],
					anchor: mod.UIAnchor.Center,
					bgFill: mod.UIBgFill.Solid,
					bgColor: bfBlueColor,
					bgAlpha: 1,
				},
				{
					type: "Text",
					name: `countdown_text${this.#playerProfileId}`,
					size: [100, height],
					position: [0, 0],
					anchor: mod.UIAnchor.Center,
					bgFill: mod.UIBgFill.None,
					textColor: bfBlueColor,
					textAnchor: mod.UIAnchor.Center,
					textLabel: MakeMessage(mod.stringkeys.__CountdownUI),
					textSize: 85,
				},
			],
		});
		this.textWidget = mod.FindUIWidgetWithName(
			`countdown_text${this.#playerProfileId}`,
		);
	}

	delete() {
		this.headerWidget && mod.DeleteUIWidget(this.headerWidget);
		//this.textWidget && mod.DeleteUIWidget(this.textWidget)
	}

	open(text: string, countdowntime: number) {
		this.headerWidget && mod.SetUIWidgetVisible(this.headerWidget, true);
		this.textWidget &&
			mod.SetUITextLabel(this.textWidget, MakeMessage(text, countdowntime));
	}

	update(text: string, countdowntime: number) {
		this.textWidget &&
			mod.SetUITextLabel(this.textWidget, MakeMessage(text, countdowntime));
	}

	async close(delayclose: number = 0) {
		await mod.Wait(delayclose);
		this.headerWidget && mod.SetUIWidgetVisible(this.headerWidget, false);
	}
}

export const bf6Strings = {
	__CountdownUI: "{}",
};
