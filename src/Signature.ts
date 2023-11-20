import { SealParams, defaultParams } from "@/SealParams";
import { PrivateKey, toJWK } from "@/PrivateKey";
import { PublicKey } from "@/PublicKey";
import { fromArrayBuffer, toArrayBuffer } from "@/Base64";

/* alias */
const c = window.crypto.subtle;

/**
 * @description signature
 */
export type Signature = string;

/**
 * @param msg signing message
 * @param pvk private key
 * @param params optionl, the algorithm parameters
 *
 * @returns signature
 *
 * @description asynchronously sign `msg` with `pvk`
 */
export const sign = async (
  msg: string,
  pvk: PrivateKey,
  params: SealParams = defaultParams
) => {
  const signKey = await c.importKey("jwk", toJWK(pvk), params, false, ["sign"]);

  const rawSignature = await c.sign(
    params,
    signKey,
    new TextEncoder().encode(msg)
  );
  const b64Signature = await fromArrayBuffer(rawSignature);

  return b64Signature;
};

/**
 * @param msg verifying message
 * @param signature signature
 * @param pbk public key
 * @param params optionl, the algorithm parameters
 *
 * @returns if the `msg` sign with the corresponding key
 *
 * @description asynchronously verify the `signature` of the `msg` with `pbk`
 */
export const verify = async (
  msg: string,
  signature: Signature,
  pbk: PublicKey,
  params: SealParams = defaultParams
) => {
  const verifyKey = await c.importKey("jwk", toJWK(pbk), params, true, [
    "verify",
  ]);

  const rawSignature = await toArrayBuffer(signature);
  return c.verify(
    params,
    verifyKey,
    rawSignature,
    new TextEncoder().encode(msg)
  );
};
