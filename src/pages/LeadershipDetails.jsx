import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Footer, Header } from "../components";
import { leaders } from "../constants/data";

const LeaderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const leader = leaders[id];

  if (!leader) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        Leader not found.
      </div>
    );
  }

  return (
    <>
        <Header />
        <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24 font-roboto pt-[10rem] md:pt-[11rem] lg:pt-[12rem]">
            <button
                onClick={() => navigate("/about-us", { state: { tabIndex: 1 } })}
                className="flex items-center gap-2 text-green-700 hover:text-green-900 mb-8 transition"
            >
                <FaArrowLeft /> Back
            </button>

            {/* Side-by-Side Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Leader Image */}
                <div className="w-full h-[500px] lg:h-[700px] overflow-hidden rounded-3xl shadow-xl">
                    <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Leader Info */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
                        {leader.name}
                    </h1>
                    <h2 className="text-lg md:text-2xl font-medium text-green-700 mb-6">
                        {leader.title}
                    </h2>
                    <div className="text-gray-700 leading-relaxed text-lg md:text-xl space-y-4" dangerouslySetInnerHTML={{ __html: leader.bio }}>
                        
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  );
};

export default LeaderDetails;
