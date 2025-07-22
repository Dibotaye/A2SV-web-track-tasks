import React from "react";

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
  image: string;
}

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const categoryColors = [
  { border: "border-orange-300", text: "text-orange-300" },
  { border: "border-blue-300", text: "text-blue-300" },
  { border: "border-yellow-100", text: "text-yellow-300" },
  { border: "border-pink-100", text: "text-pink-300" },
];

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 mx-auto ml-12 w-[900px]"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src={job.image}
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
          <p className="text-sm text-gray-400">
            {job.company} • {job.about.location}
          </p>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            {job.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Inperson
            </span>

            <div className="w-px h-4 bg-gray-300"></div>

            {job.about.categories.map((category, index) => {
              const color = categoryColors[index % categoryColors.length];
              return (
                <span
                  key={index}
                  className={`border ${color.border} ${color.text} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
