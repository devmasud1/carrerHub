import Category from "./Category";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div className="max-w-[1440px] mx-5 lg:mx-auto my-10 lg:my-20">
           <Category></Category>
           <Featured></Featured>
        </div>
    );
};

export default Home;