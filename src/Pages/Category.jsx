import { AiOutlineCalculator } from "react-icons/ai";

const Category = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-black">
          Job Category List
        </h1>
        <p className="font-medium mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-10 ">
        <div className="bg-blue-100 p-10 rounded">
          <AiOutlineCalculator className="text-8xl bg-fuchsia-200 p-4 rounded"></AiOutlineCalculator>
          <div className="mt-5">
            <h3 className="text-xl font-extrabold">Account & Finance</h3>
            <p className="font-medium">300 Jobs Available</p>
          </div>
        </div>
        <div className="bg-blue-100 p-10 rounded">
          <AiOutlineCalculator className="text-8xl bg-fuchsia-200 p-4 rounded"></AiOutlineCalculator>
          <div className="mt-5">
            <h3 className="text-xl font-extrabold">Account & Finance</h3>
            <p className="font-medium">300 Jobs Available</p>
          </div>
        </div>
        <div className="bg-blue-100 p-10 rounded">
          <AiOutlineCalculator className="text-8xl bg-fuchsia-200 p-4 rounded"></AiOutlineCalculator>
          <div className="mt-5">
            <h3 className="text-xl font-extrabold">Account & Finance</h3>
            <p className="font-medium">300 Jobs Available</p>
          </div>
        </div>
        <div className="bg-blue-100 p-10 rounded">
          <AiOutlineCalculator className="text-8xl bg-fuchsia-200 p-4 rounded"></AiOutlineCalculator>
          <div className="mt-5">
            <h3 className="text-xl font-extrabold">Account & Finance</h3>
            <p className="font-medium">300 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
