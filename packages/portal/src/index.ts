import { createClient } from "@connectrpc/connect";
import { WebPlay } from "../gen/santiago/web/play/WebPlay_pb";
import { WebAuthentication } from "../gen/santiago/web/authentication/WebAuthentication_pb";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

export function createClients(getAuthSession: () => string) {
	const transport = createGrpcWebTransport({
		baseUrl: "https://santiago-prod-wgw-envoy.ops.dice.se",
		interceptors: [
			next => async req => {
				req.header.set("x-dice-tenancy", "prod_default-prod_default-santiago-common");
				req.header.set("x-gateway-session-id", getAuthSession());
				return next(req);
			}
		]
	});

	return {
		auth: createClient(WebAuthentication, transport),
		play: createClient(WebPlay, transport),
	};
}
