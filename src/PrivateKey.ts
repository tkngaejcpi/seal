/**
 * @description private key
 */
export type PrivateKey = string;

/**
 * @param pvk private key
 * @returns json web key
 * 
 * @description runtime type-safety is not guaranteed.
 */
export const toJWK = (pvk: PrivateKey): JsonWebKey =>
  JSON.parse(window.atob(pvk));
