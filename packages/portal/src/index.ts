import { createClient } from "@connectrpc/connect";
import { WebPlay } from "../gen/santiago/web/play/WebPlay_pb";
import { WebAuthentication } from "../gen/santiago/web/authentication/WebAuthentication_pb";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

export * as WebAuthentication_pb from "../gen/santiago/web/authentication/WebAuthentication_pb";
export * as WebPlay_pb from "../gen/santiago/web/play/WebPlay_pb";
export * as Generated_pb from '../gen/santiago/common/generated_pb';

/**
 * Here is an example of using this to query for playelements and returning them
 * ```ts
 * // You can get the token by going to portal.battlefield.com and opening inspect element
 * // and searching for any request like getPlayElement or getOwnedPlayElements
 * // then copying it from the request header
 * const clients = await createClients('web-XXXXXXXXXXXXXXXXXXXXXXXXX');
 * const result = await clients.play.getOwnedPlayElements({
 * 	publishStates: [1, 2, 4],
 * 	includeDenied: true
 * })

 * const playElement = await clients.play.getPlayElement({
 * 	id: result.playElements[0].id,
 * 	includeDenied: true,
 * })

 * console.log('result:', result);
 * console.log('playElement:', playElement);
 * ```
 */
export async function createClients(getAuthSession: (() => Promise<string> | string) | string) {
	const session = typeof getAuthSession === 'string' ? getAuthSession : await getAuthSession();
	const transport = createGrpcWebTransport({
		baseUrl: "https://santiago-prod-wgw-envoy.ops.dice.se",
		interceptors: [
			next => async req => {
				req.header.set("x-dice-tenancy", "prod_default-prod_default-santiago-common");
				req.header.set("x-gateway-session-id", session);
				return next(req);
			}
		]
	});

	return {
		auth: createClient(WebAuthentication, transport),
		play: createClient(WebPlay, transport),
	};
}
