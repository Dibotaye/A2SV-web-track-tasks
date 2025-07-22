import React, { useState } from "react";
import jobsData from "./data/jobs.json";
import JobCard from "./components/JobCard";
import JobDashboard from "./components/JobDashboard";

function App() {
  const [selectedJob, setSelectedJob] = useState<
    null | (typeof jobsData.job_postings)[0]
  >(null);

  return (
    <div className=" bg-gray-100 p-8">
      <h1 className="text-2xl text-blue-900 font-bold ml-12">Opportunities</h1>
      <p className="text-sm text-gray-400 ml-12 mb-6">Showing 73 result</p>
      {selectedJob ? (
        <JobDashboard job={selectedJob} onBack={() => setSelectedJob(null)} />
      ) : (
        <div className="space-y-6">
          {jobsData.job_postings.map((job, idx) => (
            <JobCard key={idx} job={job} onClick={() => setSelectedJob(job)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
