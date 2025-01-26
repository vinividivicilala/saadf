import path from "path";
export function dynamicViteAssetImport(imageFileName) {
  const filename = path.parse(imageFileName);
  const name = filename.name;
  const ext = filename.ext;
  switch (ext) {
    case ".webp":
      return import(`../../public/assets/${name}.webp`);
    case ".jpg":
      return import(`../../public/assets/${name}.jpg`);
    case ".png":
      return import(`../../public/assets/${name}.png`);
    case ".svg":
      return import(`../../public/assets/${name}.svg?raw`);
    case ".gif":
      return import(`../../public/assets/${name}.gif`);
    case ".avif":
      return import(`../../public/assets/${name}.avif`);
    case ".jpeg":
      return import(`../../public/assets/${name}.jpeg`);
    default:
      return import(`../../public/assets/${name}.jpg`);
  }
}
