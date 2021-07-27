import { cleanInputString } from '@src/util';

export function appendLy(baseWord: string): string {
  return `${cleanInputString(baseWord)}ly`;
}
