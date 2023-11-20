export const fromArrayBuffer = (x: ArrayBuffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target || typeof e.target.result != "string") {
        reject();
        return;
      }

      const [_prefix, base64] = e.target.result.split(",");
      resolve(base64);
    };

    reader.readAsDataURL(new Blob([x]));
  });
};

export const toArrayBuffer = (x: string) =>
  fetch(`data: application/octet-binary;base64,${x}`).then((res) =>
    res.arrayBuffer()
  );
