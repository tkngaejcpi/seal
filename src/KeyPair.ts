import { PrivateKey } from "@/PrivateKey";
import { PublicKey } from "@/PublicKey";
import { SealParams, defaultParams } from "@/SealParams";

/* alias */
const c = window.crypto.subtle;

/* helpers */
const toB64Key = async (key: CryptoKey) =>
  btoa(JSON.stringify(await c.exportKey("jwk", key)));

/**
 * @description a container type of PublicKey and PrivateKey
 */
export interface KeyPair {
  pub: PublicKey;
  pri: PrivateKey;
}

export const generate = async (params: SealParams = defaultParams) => {
  const rawKeyPair = await c.generateKey(params, true, ["sign", "verify"]);

  const keypair: KeyPair = {
    pub: await toB64Key(rawKeyPair.publicKey),
    pri: await toB64Key(rawKeyPair.privateKey),
  };

  return keypair;
};
