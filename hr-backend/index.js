const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/hrdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    url: String,
});

const Job = mongoose.model('Job', jobSchema);

app.get('/api/jobs', async (req, res) => {
    try {
        const { data } = await axios.get('https://www.postjobsfree.com/remote-jobs');
        const $ = cheerio.load(data);

        const jobs = [];
        $('.job-item').each((index, element) => {
            const title = $(element).find('.job-title').text().trim();
            const company = $(element).find('.company-name').text().trim();
            const location = $(element).find('.location').text().trim();
            const url = $(element).find('a').attr('href');

            jobs.push({ title, company, location, url });
        });

        res.json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching jobs' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
