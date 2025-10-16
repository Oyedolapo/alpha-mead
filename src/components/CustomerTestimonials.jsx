import React, { useState } from "react";
import { testimonials } from "../constants/data";

const CustomerTestimonials = () => {
    const videos = [
        "HJjU90Qotv0",
        "tVnqjv811QE",
        "yUqvIsXiFo8",
        "3WUYpWkZQrs",
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const start = currentPage * testimonialsPerPage;
    const visibleTestimonials = testimonials.slice(start, start + testimonialsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-6 px-3 md:px-12 bg-gray-50 font-roboto">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-7 text-left">
                Customers and Testimonials
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-12 text-left max-w-3xl">
                We recognize that Real Estate and Infrastructure are beyond buildings
                and structures. For us, making real difference means ensuring assets are
                safe, comfortable, and sustainable — and that healthcare and
                infrastructure enhance quality of life.
            </p>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                {videos.map((url, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <div className="aspect-[16/10] w-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${url}`}
                                title={`testimonial-video-${index}`}
                                className="w-full h-full rounded-2xl"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center mb-20">
                <a
                    href="https://youtube.com/@alphameadgroup3747?si=Bp9lcrV3fas4l8tn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 text-sm rounded-lg font-medium transition-all shadow-md"
                >
                    Click to watch more
                </a>
            </div>

            {/* Testimonials Section */}
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-2xl font-semibold text-green-700 mb-8">
                    What Our Customers Say
                </h3>

                {/* Testimonials Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                    {visibleTestimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between min-h-[250px]"
                        >
                            <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                                “{t.feedback}”
                            </p>
                            <p className="text-green-700 font-semibold text-sm text-right mt-auto">
                                — {t.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination Buttons */}
                <div className="flex justify-center items-center gap-6">
                    <button
                        onClick={handlePrev}
                        className="px-5 py-2 bg-gray-200 text-sm rounded-full hover:bg-gray-300 transition"
                    >
                        ← Prev
                    </button>
                    <div className="flex gap-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i)}
                                className={`w-2 h-2 rounded-full transition ${
                                i === currentPage ? "bg-green-600" : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="px-5 py-2 bg-gray-200 text-sm rounded-full hover:bg-gray-300 transition"
                    >
                        Next →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;
