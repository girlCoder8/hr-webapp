const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    url: String,
});

export default new mongoose.model('Job', JobSchema);

