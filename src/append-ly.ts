import { cleanInputString } from "./util";

export function appendLy(baseWord: string): string {
  return `${cleanInputString(baseWord)}ly`;
}
