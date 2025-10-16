// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const videos = [
    { id: 'HJjU90Qotv0', title: 'Customer Testimonial 1' },
    { id: 'tVnqjv811QE', title: 'Customer Testimonial 2' },
    { id: 'yUqvIsXiFo8', title: 'Customer Testimonial 3' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 mb-6">
            What Our Customers Say About Our Real Difference
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="relative bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              style={{ paddingTop: '65%' }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://youtube.com/@alphameadgroup3747?si=50ptalVOt5cXdTP1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#71bf4f] hover:bg-green-600 text-white px-8 py-3 rounded text-base inline-block transition-colors"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
