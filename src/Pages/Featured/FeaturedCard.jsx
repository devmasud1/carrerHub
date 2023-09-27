const FeaturedCard = ({ job }) => {
  console.log(job);

  const { logo, job_title, company_name, remote_or_onsite
, job_type, location, salary  } = job || {};
  return (
    <div className="border-2 p-5">
      <img src={logo} alt="" />
      <h1 className="text-2xl font-extrabold mt-5">{job_title}</h1>
      <h3 className="text-xl font-semibold">{company_name}</h3>
      <div className="flex items-center my-5">
        <button className="bg-slate-300 px-4 py-2 rounded mr-5">{remote_or_onsite}</button>
        <button className="bg-slate-300 px-4 py-2 rounded">{job_type}</button>
      </div>
      <div className="flex items-center mb-5">
        <p className="mr-5">{location}</p>
        <p className="">Salary : {salary}</p>
      </div>
      <button className="bg-slate-500 px-4 py-2 rounded text-white">
        View Details
      </button>
    </div>
  );
};

export default FeaturedCard;
