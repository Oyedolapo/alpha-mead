import React from "react";
import facility from "../../assets/facility.jpg";

const corporateNews = [
  {
    id: 1,
    title:
      "Alpha Mead Chief Sees Real Estate Driving Nigeria’s $1trn Economy Ambition",
    date: "2025-02-13",
    image: facility,
    excerpt:
      "Trends in sustainability, cybersecurity, automation, workplace and home well-being, smart building and Artificial intelligence have expanded the operations of facility management consultants beyond the usual traditional roles, making engaging their services a necessity if the growth trajectory of the real estate sector will be maintained",
    link: "https://businesspost.ng/general/alpha-mead-chief-sees-real-estate-driving-nigerias-1trn-economy-ambition/",
  },
  {
    id: 2,
    title: "Alpha Mead Registers N5bn Commercial Paper Programme on FMDQ",
    date: "2024-06-04",
    image: facility,
    excerpt:
      "FMDQ Securities Exchange Limited, known for its commitment to providing a reliable and credible platform for the registration, listing, quotation, trading and reporting of financial securities announce the registration of Alpha Mead Facilities & Management Services Limited ₦5.00 billion Commercial Paper today.",
    link: "https://dmarketforces.com/alpha-mead-registers-n5bn-commercial-paper-programme-on-fmdq/",
  },
  {
    id: 3,
    title:
      "Alpha Mead Group strengthens corporate governance, gets new directors",
    date: "2022-09-02",
    image: facility,
    excerpt:
      "Alpha Mead Group, a leading provider of total real estate and healthcare solutions in Nigeria, has announced the appointment to strengthen its corporate governance for improved shareholder value.",
    link: "https://businessday.ng/news/article/alpha-mead-group-strengthens-corporate-governance-gets-new-directors/",
  },
  {
    id: 4,
    title:
      "Alpha Mead is boosting Access to Quality Healthcare with Modular Healthcare Facility",
    date: "2021-07-01",
    image: facility,
    excerpt:
      "“I applaud Alpha Mead Healthcare Management Services Limited for harnessing its scientific and technological expertise to make this Modular Healthcare Facility, a solution available for use in the country. It will go a long way in supporting our journey towards the 2030 Agenda for Sustainable Development,” he said.",
    link: "https://www.premiumtimesng.com/promoted/470950-alpha-mead-is-boosting-access-to-quality-healthcare-with-modular-healthcare-facility.html?tztc=1",
  },
  {
    id: 5,
    title:
      "Alpha Mead, Enugu Govt partner to deliver 750 affordable housing units for civil servants",
    date: "2021-06-30",
    image: facility,
    excerpt:
      "In its quest to lower the entry barrier to homeownership for middle-to-low-income Nigerians, Alpha Mead Development Company, AMDC, has partnered with the Enugu State Government to develop 750 affordable housing units for civil servants in the state.",
    link: "https://www.vanguardngr.com/2021/06/alpha-mead-enugu-govt-partner-to-deliver-750-affordable-housing-units-for-civil-servants/",
  },
];

const CorporateNews = () => {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="font-roboto">
      <h2 className="text-3xl font-light text-gray-900 mb-10 text-left">
        Corporate News
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {corporateNews.map((news) => (
          <a
            key={news.id}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden aspect-square flex flex-col"
          >
            {/* 🖼 Image Section */}
            <div className="h-1/2 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 📰 Content Section */}
            <div className="flex flex-col justify-between flex-1 p-5">
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  {formatDate(news.date)}
                </p>
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {news.excerpt}
                </p>
              </div>

              <span className="text-green-600 font-semibold text-sm mt-3 self-start group-hover:underline">
                Read More →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CorporateNews;
