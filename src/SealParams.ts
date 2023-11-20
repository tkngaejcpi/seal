export type SealParams = EcdsaParams & EcKeyImportParams;

export const defaultParams: SealParams = {
  name: "ECDSA",
  hash: "SHA-384",
  namedCurve: "P-384",
};
