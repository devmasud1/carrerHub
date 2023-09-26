const Banner = () => {
  return (
    <div className="max-w-[1440px] l mx-5 lg:mx-auto py-10 lg:py-0">
      <div className="flex justify-between items-center gap-20">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl lg:text-7xl font-extrabold">
            One Step Closer <br className="block lg:hidden"/> To Your{" "}
            <span className="text-blue-400">Dream Job</span>
          </h2>
          <p className="text-lg font-medium my-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="bg-blue-400 px-4 py-2 text-slate-200 rounded-sm">
            Get Started
          </button>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img
            className="w-full "
            src="https://i.ibb.co/nzMTyzZ/bg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
