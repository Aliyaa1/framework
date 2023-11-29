import Layout from "./component/layout/layout.jsx";

const Experiences = () => {
        return(
            <Layout>
                <div className=" text-white w-screen h-screen">
                <h1 className=" text-3xl text-white text-right absolute right-10 underline">Projets</h1>
                <hr className=" border-4 z-0 w-56 h-36 mx-5 my-5 bg-white " />
                <hr className="border-4 z-20 absolute left-20 top-24 w-56 h-36  bg-white " />
                <hr className="border-4 z-30 absolute left-32 top-32 w-56 h-36  bg-gray-400 " />
                <hr className="border-4 z-30 absolute left-40 top-36 w-56 h-36  bg-gray-600 " />
           </div>
            </Layout>
     );
};
export default Experiences; 