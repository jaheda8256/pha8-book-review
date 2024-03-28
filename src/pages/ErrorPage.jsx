import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="mx-auto  border-2 w-[400px] h-[240px] mt-16">
            <h2 className="text-3xl mt-4 font-bold text-center">Oops!!!</h2> <br />
            <h4 className="text-xl text-center">Enter The Right Path</h4>
           <div className="text-center mt-8">
           <Link to='/'><button className="btn bg-orange-200 text-orange-600">Go back</button>
            </Link>
           </div>
        </div>
        </div>
    );
};

export default ErrorPage;