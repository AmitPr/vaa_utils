import { IncomingActionVAA, OutgoingActionVAA } from "@anchor-protocol/crossanchor-sdk";
const vaa_b64 = process.argv[2];
const vaa_b64_decoded = new Uint8Array(Buffer.from(vaa_b64, 'base64'));

const VAA = IncomingActionVAA.from(vaa_b64_decoded);

console.log(JSON.stringify(
    {
        "payload": VAA.payload,
        "sequence": VAA.sequence,
    }
));