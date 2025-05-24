import { getShortURL } from '../dao/short_url.js';
import { createShortURLService } from '../services/short_url.service.js';

export const createShortURL = async (req, res) => {
    const { originalUrl } = req.body;

    const shortURL = await createShortURLService(originalUrl);
    res.status(201).json({
        shortURL
    });
  
};

export const redirectToOriginalUrl = async (req, res) => {
    const {id} = req.params;
    const url = await getShortURL(id);

    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);  
};
