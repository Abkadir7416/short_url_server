import Url from "../models/Url.js";

export const saveShortURL = async (originalUrl, shorted_URL) => {
    try {
        
        const data = {
            originalUrl,
            shortCode: shorted_URL
        }
        const short_URL = await Url.create(data);
        return short_URL;
    } catch (error) {
        throw  new Error (error);
    }
};

export const getShortURL = async (shortCode) => {
    try {
        
        const short_URL = await Url.findOne({ shortCode: shortCode });
        if(!short_URL){
            throw new Error('url not found!')
        }
        return short_URL;
    } catch (error) {
        throw  new Error (error);
    }
};
