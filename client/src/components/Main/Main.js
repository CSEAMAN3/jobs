import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Main() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    const API = "http://localhost:8081/jobs";
    const res = await axios.get(API);
    setJobs(res.data);
  }

  return (
    <div>
      {jobs.map((job, idx) => {
        return (
          <div key={idx}>
            <h3>Vault Tec</h3>
            <h2>
              <a href={job.url}>{job.name}</a>
            </h2>
            <p>{job.description}</p>
            <p>{job.description}</p>
          </div>
        );
      })}
    </div>
  );
}
