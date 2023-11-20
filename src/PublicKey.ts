import { toJWK as pvkToJWK } from "@/PrivateKey";

/**
 * @description public key
 */
export type PublicKey = string;

/**
 * @param pvk public key
 * @returns json web key
 *
 * @description runtime type-safety is not guaranteed.
 */
export const toJWK = pvkToJWK;
