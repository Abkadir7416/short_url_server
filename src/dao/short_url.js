import Url from "../models/Url.js";

export const saveShortURL = async (originalUrl, shorted_URL) => {
    const data = {
        originalUrl,
        shortCode: shorted_URL
    }
    const short_URL = await Url.create(data);
    return short_URL;
};

export const getShortURL = async (shortCode) => {
    const short_URL = await Url.findOne({ shortCode: shortCode });
    if(!short_URL){
        throw new Error('url not found!')
    }
    return short_URL;
};
