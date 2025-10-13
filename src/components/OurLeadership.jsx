import { useNavigate } from "react-router-dom";
import { boardOfDirectors, executiveTeam } from "../constants/data";

const OurLeadership = () => {
    const navigate = useNavigate();
    const handleClick = (link) => navigate(link);

    const renderSection = (title, data) => (
    <div className="mb-20">
        <h2 className="text-3xl font-semibold text-green-700 mb-10 text-center">
            {title}
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {data.map((person, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(person.link)}
                    className="group cursor-pointer rounded-xl shadow-md border border-gray-200 bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full max-w-[340px]"
                >
                    <div className="relative overflow-hidden">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-white text-sm bg-white/20 py-1 px-3 rounded-full">
                            View Profile
                            </span>
                        </div>
                    </div>
                    <div className="p-5 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {person.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{person.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );

  return (
    <section className="py-16 px-6 md:px-12 font-roboto bg-gray-50">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-left mb-16">
            Our Leadership
        </h1>

        {renderSection("Board of Directors", boardOfDirectors)}
        {renderSection("Executive Management Team", executiveTeam)}
    </section>
  );
};

export default OurLeadership;
