import { nanoid } from 'nanoid';

export const generateNanoid = (length) => {
  // Generate a 7-character string using nanoid
  try {
    return nanoid(length);
  } catch (error) {
    throw new Error(error);
  }
};