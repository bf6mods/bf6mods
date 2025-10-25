import { createClient } from "@connectrpc/connect";
import { WebPlay } from "../gen/santiago/web/play/WebPlay_pb";
import { WebAuthentication } from "../gen/santiago/web/authentication/WebAuthentication_pb";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

const transport = createGrpcWebTransport({
  baseUrl: "https://santiago-prod-wgw-envoy.ops.dice.se",
  useBinaryFormat: true,
  interceptors: [
    (next) => async (req) => {
      req.header.set("x-dice-tenancy", "prod_default-prod_default-santiago-common");
      req.header.set("x-gateway-session-id", "web-35b20027-6e20-4a84-b0e0-e63c2e3876eb");
      req.header.set("x-grpc-web", "1");
      return next(req);
    }
  ],
});

const webPlayClient = createClient(WebPlay, transport);
const authenticationClient = createClient(WebAuthentication, transport);

const auth = await authenticationClient.viaAuthCode({
  authCode: "xxxxxxxxxxxxxxx",
  platform: 1,
  redirectUri: {
    value: "https://portal.battlefield.com/bf6/experiences/"
  }
})

console.log('auth:', auth);

const res = await webPlayClient.getPlayElement({
  id: "xxxxxxxxxxxxxxxxxxxxxxx",
  includeDenied: true,
});

console.log(res);

