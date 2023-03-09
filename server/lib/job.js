const axios = require("axios");

function getJobs(request, response) {
  const url =
    "https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true";
  axios.get(url).then((res) => {
    const finalJobsArray = [];
    res.data.jobs.forEach((job) => {
      finalJobsArray.push({
        name: job.title,
        description: job.content,
        departments: job.departments[0].name,
        offices: job.offices[0].name,
        location: job.location.name,
        url: job.absolute_url,
      });
    });
    response.send(finalJobsArray);
  });
}

module.exports = getJobs;
