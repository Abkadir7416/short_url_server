import { saveShortURL } from '../dao/short_url.js';
import { generateNanoid } from '../utils/helper.js';

export const createShortURLService = async (originalUrl) => {
    try {
        const shortURL = generateNanoid(7);
        if (!shortURL) throw new Error("shortUrl not genrated")
        const short_URL = await saveShortURL(originalUrl, shortURL);
        return short_URL;
    } catch (error) {
        throw new Error(error);
    }
};


