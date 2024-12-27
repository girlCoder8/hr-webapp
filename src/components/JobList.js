import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs')
            .then(response => setJobs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Remote Jobs</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <a href={`/job/${job.id}`}>{job.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
