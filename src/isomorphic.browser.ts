/**
 * In browsers, we don't resolve the image paths.  We just return them as-is.
 */
export function resolve(path: string): string {
  return path;
}
