import React from "react";
import { FileDown } from "lucide-react";

const CountryContent = ({ activeCountry, activeSubTab, data }) => {
  return (
    <div>

      {/* 🏛️ About Us */}
      {activeSubTab === "about" && (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{activeCountry}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content}} />
            {data.secondContent && (
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.secondContent }}/>
            )}
        </div>
      )}

      {/* 👥 Leadership — with images */}
      {activeSubTab === "leadership" && (
        <div>
          {data.leadership && data.leadership.length > 0 ? (
            <>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {data.leadership.map((leader, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-all flex flex-col items-center text-center"
                        >
                            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-green-600">
                                <img
                                    src={leader.image || "/images/default-avatar.png"}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {leader.name}
                            </h3>
                            <p className="text-green-700 font-medium text-sm mb-2">
                                {leader.position}
                            </p>
                            {leader.bio && (
                                <p className="text-gray-600 text-sm leading-relaxed">
                                {leader.bio}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </>
          ) : (
            <p className="text-gray-500 mt-2">
              Leadership information coming soon.
            </p>
          )}
        </div>
      )}

      {/* 💼 Services */}
      {activeSubTab === "services" && (
        <div>
          {data.services && data.services.length > 0 ? (
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {data.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">
              Service information coming soon.
            </p>
          )}
        </div>
      )}

      {/* 📘 Brochure */}
      {activeSubTab === "brochure" && (
        <div className="text-center">
          {data.brochureUrl ? (
            <a
              href={data.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              <FileDown size={18} /> Download Brochure
            </a>
          ) : (
            <p className="text-gray-500 mt-2">
              Brochure will be available soon.
            </p>
          )}
        </div>
      )}

      {/* 📞 Contact */}
      {activeSubTab === "contact" && (
        <div className="space-y-1">
          {data.address ? (
            <>
              <p className="text-gray-700 mb-1">{data.address}</p>
              <p className="text-gray-700">📧 {data.email}</p>
              <p className="text-gray-700">📞 {data.phone}</p>
            </>
          ) : (
            <p className="text-gray-500">Contact details coming soon.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryContent;
