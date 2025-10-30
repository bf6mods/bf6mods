import { createClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import { WebAuthentication } from "../gen/santiago/web/authentication/WebAuthentication_pb";
import { WebPlay } from "../gen/santiago/web/play/WebPlay_pb";
import { GetBlueprintsByIdResponseSchema, GetScheduledBlueprintsResponseSchema, UpdatePlayElementRequestSchema } from "../gen/santiago/common/generated_pb";
import * as protobufBuild from "@bufbuild/protobuf";
import { BinaryReader, WireType } from "@bufbuild/protobuf/wire";
export * as protobuf from "@bufbuild/protobuf";
export * as Generated_pb from "../gen/santiago/common/generated_pb";
export * as WebAuthentication_pb from "../gen/santiago/web/authentication/WebAuthentication_pb";
export * as WebPlay_pb from "../gen/santiago/web/play/WebPlay_pb";

export type AuthOptions =
  | { authCode: string; sessionId?: string }
  | { authCode?: string; sessionId: string };

/**
 * Here is an example of using this to query for playelements and returning them
 * ```ts
 * // You can get the token by going to portal.battlefield.com and opening inspect element
 * // and searching for any request like getPlayElement or getOwnedPlayElements
 * // then copying it from the request header
 * const clients = await new Clients().authenticate({ authCode: 'web-3508238b-7b73-4443-8325-2e6f4a16c511' });
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
export class Clients {
	session: string | undefined;
	transport = createGrpcWebTransport({
		baseUrl: "https://santiago-prod-wgw-envoy.ops.dice.se",
		interceptors: [
			next => async req => {
				req.header.set("x-dice-tenancy", "prod_default-prod_default-santiago-common");
				if (this.session) req.header.set("x-gateway-session-id", this.session);
				return next(req);
			},
		],
		fetch: async (...args: Parameters<typeof globalThis.fetch>): ReturnType<typeof globalThis.fetch> => {
			const response = await globalThis.fetch(...args);
			const buf = new Uint8Array(await response.clone().arrayBuffer());
			fs.writeFileSync('./bytes.txt', buf.slice(5, -1).slice(0, -19));
			return response;
		}
	});

	auth = createClient(WebAuthentication, this.transport);
	play = createClient(WebPlay, this.transport);

	async authenticate(options: AuthOptions) {
		if (options?.sessionId) this.session = options?.sessionId;
		if (options?.authCode) {
			const res = await this.auth.viaAuthCode({
				authCode: options.authCode,
				platform: 1,
				redirectUri: "https://portal.battlefield.com/bf6/experiences/"
			})

			this.session = res.sessionId;
		}

		return this;
	}
}
