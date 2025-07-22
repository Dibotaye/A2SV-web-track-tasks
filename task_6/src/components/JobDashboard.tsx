import React from "react";
import {
  BsCheckCircleFill,
  BsClock,
  BsCalendarDate,
  BsExclamationCircle,
} from "react-icons/bs";
import { IoLocationOutline, IoArrowBack } from "react-icons/io5";

interface Job {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image?: string;
}

interface JobDashboardProps {
  job: Job;
  onBack: () => void;
}

const JobDashboard: React.FC<JobDashboardProps> = ({ job, onBack }) => {
  return (
    <div className="bg-[#ffffff] min-h-screen p-4 font-sans text-gray-800">
      <header className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Job Description
        </h1>
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          <IoArrowBack />
          <span>Back to list</span>
        </button>
      </header>

      <main className="bg-white max-w-7xl mx-auto rounded-xl shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3">
          <section>
            <h2 className="text-2xl font-bold mb-3">{job.title}</h2>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <BsCheckCircleFill className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{resp}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold mb-4">Ideal Candidate</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {job.ideal_candidate.traits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold mb-3">When & Where</h2>
            <div className="flex items-center gap-3 text-gray-600">
              <IoLocationOutline className="text-xl text-blue-500 flex-shrink-0" />
              <span>{job.when_where}</span>
            </div>
          </section>
        </div>

        <div className="w-full lg:w-1/3 lg:pl-10 lg:border-l lg:border-gray-200">
          <aside>
            <h2 className="text-xl font-bold mb-4">About this role</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <BsClock className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Posted On</p>
                  <p className="text-gray-600">{job.about.posted_on}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsExclamationCircle className="text-2xl text-red-500" />
                <div>
                  <p className="font-semibold">Deadline</p>
                  <p className="text-gray-600">{job.about.deadline}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IoLocationOutline className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">{job.about.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsCalendarDate className="text-2xl text-blue-500" />
                <div>
                  <p className="font-semibold">Start Date</p>
                  <p className="text-gray-600">{job.about.start_date}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {job.about.categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.about.required_skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default JobDashboard;
