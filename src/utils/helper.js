import { nanoid } from 'nanoid';

export const generateNanoid = (length) => {
  // Generate a 7-character string using nanoid
  return nanoid(length);
};