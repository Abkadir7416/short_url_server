import { saveShortURL } from '../dao/short_url.js';
import { generateNanoid } from '../utils/helper.js';

export const createShortURLService = async (originalUrl) => {
    const shortURL =  generateNanoid(7);
    const short_URL = await saveShortURL(originalUrl, shortURL);
    return short_URL;
};


