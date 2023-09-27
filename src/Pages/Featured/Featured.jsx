import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {

    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        fetch("/data/jobs.json")
          .then((res) => res.json())
          .then((data) => {
            setJobs(data)
          });
      }, []);

    return (



        <div className="my-20">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold mb-4">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-10">
                {
                    jobs?.map(job =>  <FeaturedCard key={job.id} job={job}></FeaturedCard>)
                }
           
            </div>
        </div>
    );
};

export default Featured;