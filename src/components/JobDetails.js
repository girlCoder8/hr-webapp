import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        axios.get(`/api/jobs/${id}`)
            .then(response => setJob(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!job) {
        return <p>Loading job details...</p>;
    }

    return (
        <div style={{ padding: '1rem' }}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
                View Job Posting
            </a>
        </div>
    );
};

export default JobDetails;
