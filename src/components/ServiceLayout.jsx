import { Header, Footer, InterBusinessHero } from "../components";
import { useNavigate } from "react-router-dom";

const ServiceLayout = ({ heroText, heroImage, title, paragraphs, cards, caseStudy, caseLink, training }) => {
    const navigate = useNavigate();
    return (
        <section className="font-roboto bg-white min-h-screen pt-[7rem]">
            <Header />

            <InterBusinessHero text={heroText} image={heroImage} />

            <main className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={heroImage}
                            alt={title}
                            className="w-full lg:h-[400px] object-cover rounded-2xl shadow-md"
                        />
                        {caseStudy && (
                            <button
                                onClick={() => navigate(caseLink)}
                                className="bg-[#71bf4f] w-full hover:bg-green-600 uppercase text-white px-8 py-3 text-sm rounded-2xl block mx-auto transition-colors mt-6"
                                >
                                View {heroText} Case Studies
                            </button>
                        )}
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 text-gray-700">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h2>

                        {paragraphs.map((p, i) => (
                            <p key={i} className="mb-6 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: p }} />
                        ))}
                    </div>
                </div>

                {/* Training Services CTA buttons */}
                {training && (
                    <div className="mt-10">
                        {/* Courses heading and buttons inline */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">Our Courses</h3>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#71bf4f] hover:bg-green-600 uppercase text-white px-8 py-3 text-sm rounded-2xl transition-colors w-full sm:w-auto">
                                    Download Calendar
                                </button>
                                <button className="bg-[#71bf4f] hover:bg-green-600 uppercase text-white px-8 py-3 text-sm rounded-2xl transition-colors w-full sm:w-auto">
                                    Register Here
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Optional Cards Section for Courses */}
                {cards && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                onClick={card.onClick}
                                className="group bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer border border-green-100"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                            </div>
                        ))}
                    </div>
                )}

            </main>

            <Footer />
        </section>
    );
};

export default ServiceLayout;
