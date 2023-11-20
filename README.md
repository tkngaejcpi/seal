## TOC

- [Introduction](#introduction)
- [Install](#install)
- [Cheatsheet](#cheatsheet)

## Introduction

**Seal** is a signing and verifying library which depends on [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto).

**Seal** aims to be user-friendly, therefore it provides an extremely easy interface [👉(Cheatsheet)](#cheatsheet).

**Seal** is not for advanced usage, if you want to manipulate with low-level interfaces, **Seal** is not a good choice.

## Install

**Seal** is available on npm, you can use something like `npm install --save @rileycki3333/seal` with your package manager to install.

## Cheatsheet

### Generate KeyPair

```typescript
import { generateKeyPair } from "@rileycki3333/seal";

const keyPair = await generateKeyPair();

const { pri: privateKey, pub: publicKey } = keyPair;
```

`privateKey` and `publicKey` are just strings encoded with base64, you can place them anywhere you want.

### Sign

```typescript
import { sign } from "@rileycki3333/seal";

const msg = "test";

const signature = await sign(msg, privateKey);
```

`signature` is also a string encoded with base64.

### Verify

```typescript
import { verify } from "@rileycki3333/seal";

const isValid = await verify(msg, signature, publicKey);
```