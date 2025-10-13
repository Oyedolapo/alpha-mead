import mutiu from "../assets/mutiu-sunmonu.jpg";
import femi from "../assets/femi.jpg";
import dada from "../assets/Dada-Thomas.jpg";
import jide from "../assets/jide.jpg";
import demola from "../assets/demola-300x300.jpg";
import wale from "../assets/wale.jpg";
import tunji from "../assets/tunji.jpg";
import wole from "../assets/wole-1-300x300.jpg";
import adekunle from "../assets/adekunle-300x300.jpg";
import ekow from "../assets/ekow-300x300.jpg";

import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Our Services",
      href: "#",
      dropdown: {
        businesses: [
          { name: "Facilities Management (AMF)", href: "/facilities" },
          { name: "Training services (AMTC)", href: "/development" },
          { name: "Real Estate Development (AMDC)", href: "/healthcare" },
          { name: "Power Solutions", href: "https://alphameadpartners.com/" },
          { name: "Property Technology Solutions (PropTech)", href: "https://alphameadtraining.com/" },
          { name: "Healthcare", href: "/bridge-financing" },
        ]
      },
    },
    {
      name: "Int'l Business",
      href: "#",
      dropdown: {
        businesses: [
          { name: "Ghana", href: "/facilities" },
          { name: "Cameroon", href: "/development" },
          { name: "Senegal", href: "/healthcare" },
          { name: "South Africa", href: "/healthcare" },
          { name: "Kenya", href: "/healthcare" },
          { name: "Guinea Conakry", href: "/healthcare" },
          { name: "Rwanda", href: "/healthcare" },
          { name: "Côte d'Ivoire", href: "/healthcare" },
          { name: "Ethiopia", href: "/healthcare" },
          { name: "Tanzania", href: "/healthcare" },
          { name: "Botswana", href: "/healthcare" },
          { name: "UAE", href: "/healthcare" },
          { name: "Benin Republic", href: "/healthcare" },
        ],
      },
    },
    {
      name: "Media & Events",
      href: "#",
      dropdown: {
        businesses: [
          { name: "Corporate News", href: "/events" },
          { name: "Corporate Events", href: "/events" },
          { name: "Blogs", href: "/events" },
          { name: "Publications", href: "/media" },
        ],
      },
    },
    { name: "Contact Us", href: "/contact-us" },
];


export const boardOfDirectors = [
  { name: "Mutiu Sunmonu, CON", title: "Chairman", image: mutiu, link: "/leadership/mutiu-sunmonu" },
  { name: "Femi Akintunde", title: "Group Managing Director", image: femi, link: "/leadership/femi-akintunde" },
  { name: "Solomon Dada Thomas", title: "Chairman, Alpha Mead Development", image: dada, link: "/leadership/solomon-dada" },
  { name: "Jide Balogun", title: "Chairman, Alpha Mead Partners", image: jide, link: "/leadership/jide-balogun" },
  { name: "Demola Onanuga", title: "Chairman, Alpha Mead Facilities", image: demola, link: "/leadership/demola-onanuga" },
];

export const executiveTeam = [
  { name: "Femi Akintunde", title: "Group Managing Director", image: femi, link: "/leadership/femi-akintunde" },
  { name: "Wale Odufalu", title: "Managing Director, Alpha Mead Development", image: wale, link: "/leadership/wale-odufalu" },
  { name: "Tope Adeniji", title: "Group Executive Director, Finance", image: tunji, link: "/leadership/tope-adeniji" },
  { name: "Wole Olufore", title: "Managing Director, Alpha Mead Facilities", image: wole, link: "/leadership/wole-olufore" },
  { name: "Adekunle Omidiora", title: "Managing Director, Alpha Mead Healthcare", image: adekunle, link: "/leadership/adekunle-omidiora" },
  { name: "Ekow Ariel Woode", title: "Country Manager, Ghana", image: ekow, link: "/leadership/ekow-woode" },
];


export const leaders = {
  "mutiu-sunmonu": {
    name: "Mutiu Sunmonu, CON",
    title: "Chairman",
    image: mutiu,
    bio: `
      <p>Mr. Sunmonu graduated from the University of Lagos with a first class degree in Mathematics and Computer Science. He started his career in Shell Petroleum Development Company of Nigeria Limited (SPDC) in August 1978 as a Computer Programmer/Business Analyst. </p>
      <p>He has served in various capacities in Shell both in Nigeria and abroad ranging from Senior EDP Auditor; Head, Information Planner/Portfolio Consultant; IT Manager; Area Production Manager; Asset Manager; Regional Business Adviser at the Shell Headquarters at The Hague and General Manager Production for the SPDC Eastern operations. In 2005, he joined the Board of SPDC following his appointment as Executive Director Corporate Affairs. On January 1, 2008 he was appointed the Managing Director of SPDC and Regional Vice President Production. On January 1, 2010 Mutiu became the Country Chair, Shell Companies in Nigeria; he combined the portfolio with his current role as Managing Director of the Shell Petroleum Development Company (SPDC) and Vice President, Production, Sub-Saharan Africa. Mr. Sunmonu resigned from Shell Petroleum Development Company (SPDC) in 2015 after 36 years of service. </p>
      <p>In 2012, Mr. Sunmonu was appointed Chairman of Imperial Homes Mortgage Bank Ltd. Mr. Sunmonu also serves as an Executive Consultant to Pan Ocean and Newcross EP providing leadership across the operations, regulatory/statutory compliance and external relationship management. </p>
      <p>In 2014, Mr. Sunmonu was awarded the national award of the Commander of the Order of the Niger (CON) </p><div class='mailmunch-forms-in-post-middle' style='display: none !important;'></div>
      <p>In 2016, He was appointed the Chairman of Julius Berger Plc., one of the biggest construction companies in Nigeria. </p>
      <p>Mr. Mutiu Sunmonu CON currently also seats on various companies’ Board including Petralon Energy Ltd, Unilever Nigeria Plc, SanLeon Energy (UK) Plc, Air Peace and Wapic Insurance Plc. He continues to provide leadership and professional guidance to established and upcoming businesses in Nigeria. </p>
      <p>Mr. Sunmonu is also the Founder of the Mutiu Sunmonu Foundation with a passion for education advancement, corporate governance and entrepreneurship. </p>
    `,
  },
  "femi-akintunde": {
    name: "Femi Akintunde",
    title: "Group Managing Director",
    image: femi,
    bio: `<p>Femi Akintunde is an Industrial Engineering Graduate with a Masters degree in Engineering Management and a graduate certificate in Management, An accomplished engineer and business management professional with strong entrepreneurial drive. Femi is a registered member of many professional organizations such as: COREN, Nigerian Society of Engineers (NSE), Nigerian Institute of Management (NIM), Institute of Personnel Management (IPM), Institute of Industrial Engineers (IIE), International Facility Management Association (IFMA), among others.</p>
    <p>He started his career in 1988, with Nestle Food Nigeria Plc as an Industrial Engineer (Factory) and rose to the position of Head, Corporate Technical Planning, a position he occupied between 1991 and 1993, before proceeding to Shell Petroleum Development Company (SPDC). His 12 years at Shell saw him occupy senior and management positions in the following key areas: Human Resources, Major oil &amp; Gas projects, Engineering Services, Facilities, and Assets Management. Following his tenure in Shell Petroleum Development Company (SPDC) and Shell Nigeria Exploration and Production Company (SNEPCO), Femi served as Deputy General Manager, Corporate Services, United Bank for Africa (UBA), where he was responsible for delivering corporate services to the entire UBA Group of Companies in Nigeria and overseas, covering Banking, Insurance, Asset Management, Global Markets, and so on.</p>`,
  },
  "solomon-dada": {
    name: "Solomon Dada Thomas",
    title: "Chairman, Alpha Mead Development",
    image: dada,
    bio: `<p>Dada Thomas has a strong background in Facilities Engineering and more than 33 years of oil industry track record, including 22 years in the Shell Group. He has pursued various business interests since leaving Shell in 1998 and has grown a portfolio of interests in a number of oil and gas companies.</p>
      <p>Dada is a co-founder of Rhodax Holdings &amp; Investment Limited Group, an investment company with varied interest in Real Estate, Oil &amp; Gas, Logistics, Construction, Facilities Management, and Telecommunications.</p><div class='mailmunch-forms-in-post-middle' style='display: none !important;'></div>
      <p>He is also the CEO of Frontier Oil Ltd, a wholly-owned Nigeria Exploration and Production Company.</p>`,
  },
  "jide-balogun": {
    name: "Jide Balogun",
    title: "Chairman, Alpha Mead Partners",
    image: jide,
    bio: 
    `
      <p>Jide Balogun brings a wealth of experience from the Nigerian real estate market, where he has directly initiated and overseen developments in excess of $150 Million (N24 Billion) over the last ﬁve years. In addition to his legal background, Jide worked in Corporate Finance and Investment Banking at one of the leading investment banks in the country. He is a member of the Nigerian Bar Association (NBA) and holds an MBA from Durham University, UK.</p>
      <p>He is also a co-founder of Primrose Development Company (PDC), a property development company whose roots as real estate developer stretch back to more than 30 years to its progenitor organizations, Primrose Properties Investment Limited (PPIL) and City Securities Limited.</p>
    `,
  },
  "demola-onanuga": {
    name: "Demola Onanuga",
    title: "Chairman, Alpha Mead Facilities",
    image: demola,
    bio: `<p>Demola Onanuga is the current Executive Vice Chairman of Bolton Projects. He holds a degree in Pharmacy from University of Ife (now OAU) and an MBA from the University of Wales, Cardiﬀ. He has been involved in the marketing and provision of IT hardware and communication systems to a wide range of clientele in the UK and in West Africa.</p>
      <p>Demola has worked with a number of reputable organizations such as the Central Bank of Nigeria and Pﬁzer Plc., where he distinguished himself as an achiever, before co-founding BASSCOMM Nigeria Ltd.</p>
      <p>BASSCOMM is an engineering solutions ﬁrm that specializes in Integrated systems engineering design for various sectors including oil &amp; gas, construction, telecommunication, petrochemical and manufacturing.</p>`,
  },
  "wale-odufalu": {
    name: "Wale Odufalu",
    title: "Managing Director, Alpha Mead Development",
    image: wale,
    bio: `<p>Wale Odufalu has handled a wide range of responsibilities in managing organizational affairs and business development in the Building Services industry, several of which involved pioneering roles before joining the FM industry.</p>
      <p>She held the positions of Business Development Manager and Regional Manager with BASSCOMM Nigeria as well as Managing Director of One Source, her Facilities Management subsidiary before joining the FM industry in 2007.</p>
      <p>In addition to this practical experience, Wale holds the Facilities Management Professional (FMP) certification and is a registered member of the Institute of Workplace and Facilities Management (MIWFM). She also holds an MBA from the Obafemi Awolowo University, Ile Ife and is a Fellow of the Chartered Institute of Secretaries (FCIS).</p>`,
  },
  "tope-adeniji": {
    name: "Tope Adeniji",
    title: "Group Executive Director, Finance",
    image: tunji,
    bio: `
      <p>Tope Adeniji is a First-Class Honors Graduate of Accounting from Covenant University. A Chartered Accountant and Level 2 Candidate of the Chartered Financial Analysts Institute, Tope’s more than 12 years experience spans different industries where he worked in different capacities to drive business strategies, raise finance, and enhance revenue assurance.</p>
      <p>Tope started his career with Intercontinental Bank Plc (Now Access Bank Plc) in 2007, where he took up different roles across different branches in Nigeria. In 2010, he joined Information Connectivity Solutions Ltd (Formerly Schlumberger Information Systems/ Omnes Information Systems) as a Finance Officer and rose to become the Manager, Financial Analysis and Procurement.</p>
      <p>Tope has worked with IHS Towers Plc as Management Accountant; Smile Communications Limited, as an Opco Finance Business Partner in charge of the Networks Group; and Prior to joining Alpha Mead Group, he was the Chief Financial Officer for Primero Transport Services Limited.</p>
      `,
  },
  "wole-olufore": {
    name: "Wole Olufore",
    title: "Managing Director, Alpha Mead Facilities",
    image: wole,
    bio: `<p>Wole Olufore has more than 23 years cognate experience handling various contracts, and procurement management, administrative and dynamic leadership roles in oil and gas companies like Shell Nigeria and Centrica Resources, where he was Country Manager before joining AMFacilities. Wole holds an MBA from Nottingham Trent University in the UK and is a member of African Centre for Supply Chain, Chartered Institute of Purchasing &amp; Supply, London, and the American Management Association.</p>`,
  },
  "adekunle-omidiora": {
    name: "Adekunle Omidiora",
    title: "Managing Director, Alpha Mead Healthcare",
    image: adekunle,
    bio: `Adekunle Omidiora heads Alpha Mead Healthcare. He is passionate about improving healthcare delivery in Africa through innovative infrastructure and technology-driven solutions.`,
  },
  "ekow-woode": {
    name: "Ekow Ariel Woode",
    title: "Country Manager, Ghana",
    image: ekow,
    bio: `<p>Ekow Ariel Woode is the country manager of Alpha Mead Facilities &amp; Management Services Ghana Limited (AMFacilities – Ghana). He is a graduate of Kwame Nkrumah University of Science and Technology and holds a Master of Philosophy (M.Phil.) Degree in African Studies from the University of Ghana in Legon. Ekow has qualitative experiences in Marketing and Sales, Personnel Management, Events Planning, Project Management (Building Construction), Facilities Management as well as Compliances and Risk Assessment.</p>
      <p>In his Nineteen years experience as a Sales and Marketing specialist, Ekow successfully managed three major international brands in the dynamic automobile industry – Volkswagen, Audi and Skoda – under an authorized dealership for Vodi Technik Motors in Ghana. He rose to become the Head of Marketing and Sales and his outstanding performance earned him the “Golden Pin” award from Volkswagen of Germany for exceptional brand awareness and Marketing skills.</p>`,
  },
};

export const testimonials = [
    {
      name: "Mrs. Adebayo – Lagos",
      feedback:
        "Alpha Mead has consistently provided exceptional facility management services. Their attention to detail and professionalism stand out in the industry.",
    },
    {
      name: "Engr. Chukwuma – Abuja",
      feedback:
        "Their team ensured our project was completed on schedule and with the highest quality. Communication was seamless throughout.",
    },
    {
      name: "Dr. Okafor – Alpha Mead Healthcare",
      feedback:
        "Working with Alpha Mead transformed the way we manage our hospital facilities. Their healthcare-specific expertise is unmatched.",
    },
    {
      name: "Mr. Johnson – Ghana",
      feedback:
        "Our real estate project benefited immensely from their integrated approach to development and management. A reliable partner indeed.",
    },
    {
      name: "Mrs. Yusuf – Property Owner",
      feedback:
        "I appreciate their professionalism and proactive maintenance culture. My property has never been in better hands.",
    },
    {
      name: "Mr. Adeola – Lagos",
      feedback:
        "Excellent service delivery and reliable project execution every single time. I highly recommend Alpha Mead.",
    },
    {
      name: "Dr. Chinedu – Abuja",
      feedback:
        "Their technical know-how and customer service are simply outstanding. They’ve earned our trust.",
    },
    {
      name: "Mrs. Mensah – Ghana",
      feedback:
        "Professional, prompt, and focused on quality outcomes. We’ve had a great experience working with them.",
    },
    {
      name: "Engr. Bello – Port Harcourt",
      feedback:
        "A partner that truly understands facility management at scale. Impressive dedication and expertise.",
    },
    {
      name: "Mr. Samuel – Lagos",
      feedback:
        "From consultation to completion, the experience was seamless. Kudos to the Alpha Mead team.",
    },
];

export const footerLinks = [
  { name: 'ABOUT', href: '/about' },
  { name: 'OUR SERVICES', href: '/facilities' },
  { name: "INT'L BUSINESS", href: '/facilities-management-services' },
  { name: 'MEDIA & EVENTS', href: '/photos' },
  { name: 'CONTACT US', href: '/contact' }
];

export const socialLinks = [
  { icon: FaTwitter, href: 'http://twitter.com/alphamead' },
  { icon: FaLinkedinIn, href: 'http://www.linkedin.com/company/alpha-mead-facilities-and-management-services-ltd' },
  { icon: FaInstagram, href: 'https://www.instagram.com/alphameadgroup/' },
  { icon: FaFacebookF, href: 'http://www.facebook.com/amfacilities' }
];

export const contactSocialLinks = [
  {
    icon: FaTwitter,
    url: "https://x.com/alphamead",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/alpha-mead-group/",
  },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/AlphaMeadGroup/",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/alphameadgroup/",
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/@alphameadgroup3747",
  },
];