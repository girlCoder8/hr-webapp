const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('https://www.postjobsfree.com/remote-jobs');
        const $ = cheerio.load(data);
        const jobs = [];

        $('.job-item').each((i, el) => {
            jobs.push({
                title: $(el).find('.job-title').text().trim(),
                company: $(el).find('.company-name').text().trim(),
                location: $(el).find('.location').text().trim(),
                url: $(el).find('a').attr('href'),
            });
        });

        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching jobs');
    }
});

export default new router;
