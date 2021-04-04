export function Mask(value: string | number, pattern: string) {
  let i = 0;
  const valueStr = value.toString();

  return pattern.replace(/#/g, () => valueStr[i++] || '');
}
