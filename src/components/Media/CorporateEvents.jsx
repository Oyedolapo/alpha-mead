import React from "react";
import { Play } from "lucide-react"; // play icon overlay

const corporateEvents = [
  {
    id: 1,
    title: "Alpha Mead Celebrates 2022 International Clean Air Day",
    date: "2025-05-30",
    videoUrl: "https://youtu.be/EvfKmyCA4Nc?si=b9VC46NdYFrH8Ct9",
  },
  {
    id: 2,
    title: "Alpha Mead Signs Facilities Management Contract with Delta State Secretariat",
    date: "2025-06-18",
    videoUrl: "https://youtu.be/pdjx6_yiBxA?si=IyxEiwT5kGv3G4J_",
  },
  {
    id: 3,
    title: "Alpha Mead Appoints New Chairman",
    date: "2024-11-22",
    videoUrl: "https://youtu.be/1vst2kZVNoo?si=YO0IIEByi9kqw2dt",
  },
  {
    id: 4,
    title: "Alpha Mead Facilities Corporate Film",
    date: "2024-08-12",
    videoUrl: "https://youtu.be/HoebsU3tyBI?si=yzr-e5eNrLaFZW1P",
  },
];

// Extract YouTube video ID
const extractYouTubeID = (url) => {
  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const CorporateEvents = () => {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="font-roboto">
      <h2 className="text-3xl font-light text-gray-900 mb-10 text-left">
        Corporate Events
      </h2>

      {/* 🎥 Video Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {corporateEvents.map((event) => {
          const videoId = extractYouTubeID(event.videoUrl);
          const thumbnail = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : "https://via.placeholder.com/400x225?text=Video+Unavailable";

          return (
            <a
              key={event.id}
              href={event.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden aspect-square flex flex-col"
            >
              {/* 🎞 Thumbnail */}
              <div className="relative h-1/2 overflow-hidden">
                <img
                  src={thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={40} className="text-white" />
                </div> */}
              </div>

              {/* 📝 Content */}
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {formatDate(event.date)}
                  </p>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {event.title}
                  </h3>
                </div>

                <span className="text-green-600 font-semibold text-sm mt-3 self-start group-hover:underline">
                  Watch Video →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* 🔗 View More Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://youtube.com/@alphameadgroup3747?si=3NGOMmYHZcYnBMzC"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View More Videos on YouTube →
        </a>
      </div>
    </section>
  );
};

export default CorporateEvents;
