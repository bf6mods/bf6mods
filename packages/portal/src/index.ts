import { createClient } from "@connectrpc/connect";
import { WebPlayServiceV1Service } from "../gen/santiago/web/play/v1/web_play_service_pb";
import { createConnectTransport } from "@connectrpc/connect-node";

const transport = createConnectTransport({
    baseUrl: "https://santiago-prod-wgw-envoy.ops.dice.se/santiago.web.play.WebPlay",
    httpVersion: "1.1"
});

const webPlayClient = createClient(WebPlayServiceV1Service, transport);

const res = await webPlayClient.say({
  sentence: "I feel happy.",
});
console.log(res.sentence);
