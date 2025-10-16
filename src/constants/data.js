import mutiu from "../assets/mutiu-sunmonu.jpg";
import femi from "../assets/femi.jpg";
import dada from "../assets/Dada-Thomas.jpg";
import demola from "../assets/demola-300x300.jpg";
import wole from "../assets/wole-1-300x300.jpg";
import Chinwe from '../assets/Chinwe.png';
import Victor from '../assets/Victor Udora.webp';
import Chucks from '../assets/Chucks.jpg';
import Oluwande from '../assets/Oluwande.jpg';
import Olufemi from '../assets/Olufemi.png';
import Slider2 from "../assets/Slider-2.png";
import Slider3 from "../assets/Slider-3.png";
import Slider4 from "../assets/Slider4.jpg";
import Slider5 from "../assets/Slider5.png";
import Icon1 from '../assets/RealDiff1.png';
import Icon2 from '../assets/certified-green.png';
import Icon3 from '../assets/competent-green.png';
import Icon4 from '../assets/records-green.png';

import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Awards, CorporateManagement, CorporatePolicies, CustomerTestimonials, OurLeadership, WhoWeAre } from "../components";


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
          { name: "Property Technology (PropTech)", href: "https://alphameadtraining.com/" },
          { name: "Healthcare Management", href: "/bridge-financing" },
        ]
      },
    },
    { name: "Buy Property", href: "/buy-property" },
    {
      name: "Int'l Business",
      href: "/international-business",
      // dropdown: {
      //   businesses: [
      //     { name: "Ghana", href: "/facilities" },
      //     { name: "Cameroon", href: "/development" },
      //     { name: "Senegal", href: "/healthcare" },
      //     { name: "South Africa", href: "/healthcare" },
      //     { name: "Kenya", href: "/healthcare" },
      //     { name: "Guinea Conakry", href: "/healthcare" },
      //     { name: "Rwanda", href: "/healthcare" },
      //     { name: "Côte d'Ivoire", href: "/healthcare" },
      //     { name: "Ethiopia", href: "/healthcare" },
      //     { name: "Tanzania", href: "/healthcare" },
      //     { name: "Botswana", href: "/healthcare" },
      //     { name: "UAE", href: "/healthcare" },
      //     { name: "Benin Republic", href: "/healthcare" },
      //   ],
      // },
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

export const sections = [
    { id: "hero", label: "Home" },
    { id: "how-we-make-difference", label: "How We Make Difference" },
    { id: "our-real-difference", label: "Our Real Difference" },
    { id: "where-we-make-diff", label: "Where We Make Difference" },
    { id: "testimonials", label: "Testimonials" },
    { id: "real-insights", label: "Real Insights" },
    { id: "footer", label: "Contact / Footer" },
];

export const slides = [
  // {
  //   image: Slider1,
  //   title: "",
  //   description: "",
  //   overlay: false,
  // },
  {
    image: Slider5,
    title: "POWERING POSSIBILITIES",
    description: "From real estate to facility services, we develop, manage, and empower environments where people and possibilities flourish.",
    overlay: true,
  },
  {
    image: Slider2,
    title: "ENDLESS POSSIBILITIES THAT GIVE YOU AN EDGE",
    description: "Capabilities that support you for Real Difference.",
    overlay: true,
  },
  {
    image: Slider3,
    title: "RECOGNIZED AS COMPANY TO INSPIRE AFRICA.",
    description: "Partner with us to unlock meaningful and measurable results.",
    overlay: true,
  },
  {
    image: Slider4,
    title: "LOCAL CAPACITY ACROSS AFRICA.",
    description: "International Standards that support you",
    overlay: true,
  },
];

export const features = [
    {
      icon: Icon1,
      title: 'TOTAL REAL ESTATE SOLUTIONS',
      description: 'Whether you are a business, individual or govt. agency looking to have an edge; with our solutions, you will Make a Real Difference.',
      link: '/our-projects'
    },
    {
      icon: Icon2,
      title: 'ISO 9001:2015',
      description: 'Whatever your Real Estate objectives are for Africa, we will match your global standards.',
      link: '/about-us'
    },
    {
      icon: Icon3,
      title: 'COMPETENT & DIVERSE WORKFORCE',
      description: 'With a growing strength of over 1,000 employees across Africa, we have the local capacity to deliver your global standards.',
      link: '/about-us'
    },
    {
      icon: Icon4,
      title: 'PROVEN TRACK RECORDS',
      description: 'Our resume of performance include delivering up to 97% SLA, achieving more than 85% customer satisfaction and recording zero fatality from inception to date.',
      link: '/about-us'
    }
];


export const boardOfDirectors = [
  { name: "Mutiu Sunmonu, CON", title: "Chairman", image: mutiu, link: "/leadership/mutiu-sunmonu" },
  { name: "Engr. Femi Akintunde", title: "Group Managing Director", image: femi, link: "/leadership/femi-akintunde" },
  { name: "Engr. Solomon Dada Thomas", title: "Chairman, Alpha Mead Development", image: dada, link: "/leadership/solomon-dada" },
  { name: "Demola Onanuga", title: "Chairman, Alpha Mead Facilities", image: demola, link: "/leadership/demola-onanuga" },
  { name: "Wole Olufore", title: "Managing Director, Alpha Mead Facilities", image: wole, link: "/leadership/wole-olufore" },
  { name: "Ms. Ajene-Sagna", title: "Director, Alpha Mead Facilities", image: Chinwe, link: "/leadership/ajene-sagna" },
  { name: "Victor Udora", title: "Director, Alpha Mead Facilities", image: Victor, link: "/leadership/victor-udora" },
  { name: "Chuks Nwasike", title: "Director, Alpha Mead Facilities", image: Chucks, link: "/leadership/chuks-nwasike" },
  { name: "Oluwande Muoyo", title: "Director, Alpha Mead Facilities", image: Oluwande, link: "/leadership/oluwande-muoyo" },
  { name: "Dr. Olufemi Mosuro", title: "Director, Alpha Mead Development", image: Olufemi, link: "/leadership/olufemi-mosuro" },
];

// export const executiveTeam = [
//   { name: "Femi Akintunde", title: "Group Managing Director", image: femi, link: "/leadership/femi-akintunde" },
//   { name: "Wale Odufalu", title: "Managing Director, Alpha Mead Development", image: wale, link: "/leadership/wale-odufalu" },
//   { name: "Tope Adeniji", title: "Group Executive Director, Finance", image: tunji, link: "/leadership/tope-adeniji" },
  
//   { name: "Adekunle Omidiora", title: "Managing Director, Alpha Mead Healthcare", image: adekunle, link: "/leadership/adekunle-omidiora" },
//   { name: "Ekow Ariel Woode", title: "Country Manager, Ghana", image: ekow, link: "/leadership/ekow-woode" },
// ];


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
  "demola-onanuga": {
    name: "Demola Onanuga",
    title: "Chairman, Alpha Mead Facilities",
    image: demola,
    bio: `<p>Demola Onanuga is the current Executive Vice Chairman of Bolton Projects. He holds a degree in Pharmacy from University of Ife (now OAU) and an MBA from the University of Wales, Cardiﬀ. He has been involved in the marketing and provision of IT hardware and communication systems to a wide range of clientele in the UK and in West Africa.</p>
      <p>Demola has worked with a number of reputable organizations such as the Central Bank of Nigeria and Pﬁzer Plc., where he distinguished himself as an achiever, before co-founding BASSCOMM Nigeria Ltd.</p>
      <p>BASSCOMM is an engineering solutions ﬁrm that specializes in Integrated systems engineering design for various sectors including oil &amp; gas, construction, telecommunication, petrochemical and manufacturing.</p>`,
  },
  "wole-olufore": {
    name: "Wole Olufore",
    title: "Managing Director, Alpha Mead Facilities",
    image: wole,
    bio: `<p>Wole Olufore has more than 23 years cognate experience handling various contracts, and procurement management, administrative and dynamic leadership roles in oil and gas companies like Shell Nigeria and Centrica Resources, where he was Country Manager before joining AMFacilities. Wole holds an MBA from Nottingham Trent University in the UK and is a member of African Centre for Supply Chain, Chartered Institute of Purchasing &amp; Supply, London, and the American Management Association.</p>`,
  },
  "ajene-sagna": {
    name: "Ms. Ajene Sagna",
    title: "Managing Director, Alpha Mead Facilities",
    image: Chinwe,
    bio: `<p>Ms. Ajene-Sagna is a respected real estate strategist and corporate leader with extensive experience in high-value transactions and market development across West Africa. She holds an MBA from Harvard Business School and is a Member of the Royal Institute of Chartered Surveyors (MRICS), bringing global professional standards to every engagement.</p>
      <p>She is the Founder and Managing Partner of Catalyst Realty Solutions (CRS) and formerly served as Head of West Africa at JLL, where she led the landmark $32 million Union Bank transaction. Her career reflects a blend of strategic insight, market expertise, and proven leadership.</p>
      <p>Recognised among the leading women in real estate in Nigeria and West Africa, Ms. Ajene-Sagna is also a Senior Fellow at Lagos Business School, where she contributes to strategy development and leadership education.</p>`,
  },
  "victor-udora": {
    name: "Victor Udora",
    title: "Director, Alpha Mead Facilities",
    image: Victor,
    bio: `
      <p>Victor Udora is an accomplished oil and gas professional with over 34 years of experience leading complex projects and multidisciplinary teams across Nigeria, France, Gabon, Scotland, and the Netherlands. He holds an MBA from the University of Benin, Nigeria, and is a Certified Lead Auditor from Gilberts Associates Institute, London, UK.</p>
      <p>During his distinguished career with the Shell Group, Victor held several senior leadership roles, driving operational excellence, technical innovation, and strategic growth. His expertise spans technical leadership, international operations, and stakeholder engagement.</p>
      <p>Passionate about advancing the energy sector, community development, and youth mentorship, Victor brings a wealth of global experience and a strong commitment to sustainable progress to the AMF Board.</p>
      `,
  },
  "chuks-nwasike": {
    name: "Chuks Nwasike",
    title: "Director, Alpha Mead Facilities",
    image: Chucks,
    bio: `<p>Chuks Nwasike is a seasoned legal practitioner with extensive experience in corporate law, policy advisory, and strategic legal frameworks. He holds a Law Degree from the University of Nigeria and is a graduate of the Nigerian Law School, bringing a solid foundation of legal expertise to his work.</p>
        <p>An experienced partner in the legal services industry, Chuks has served as a consultant for the World Bank and the International Finance Corporation on the <i>Doing Business Project</i>, providing policy guidance and legal insight to foster business growth and regulatory reform.</p>
        <p>With international exposure and a proven track record in client representation, Chuks Nwasike continues to contribute his expertise to strengthening governance and strategic decision-making at AMF.</p>
        `,
  },
  "oluwande-muoyo": {
    name: "Oluwande Muoyo",
    title: "Director, Alpha Mead Facilities",
    image: Oluwande,
    bio: `<p>Oluwande Muoyo is an accomplished finance professional and corporate leader with extensive experience spanning the public and private sectors. She has completed executive education in Strategic Marketing Management at Harvard Business School and the Advanced Management Programme at Lagos Business School, equipping her with strong strategic and leadership capabilities.</p>
      <p>She served as Commissioner for Finance in Ogun State, where she spearheaded fiscal policy reforms and strengthened financial governance. Her career also includes roles as Non-Executive Director at First Bank of Nigeria, and key positions within FBN Holdings Plc, Stanbic IBTC Bank, and the Ogun State Government.</p>
      <p>With proven expertise in governance, policy formulation, and fiscal strategy, Oluwande Muoyo brings valuable insight and financial stewardship to the AMF Board.</p>
      `,
  },
  "olufemi-mosuro": {
    name: "Dr. Olufemi Mosuro",
    title: "Director, Alpha Mead Development",
    image: Olufemi,
    bio: `<p>Dr. Olufemi Mosuro is a distinguished healthcare leader with extensive experience in both the medical and oil & gas sectors. He completed his FMCA in Anesthesiology Residency at the Postgraduate Medical College of Nigeria, building a strong foundation in advanced medical practice and leadership.</p>
      <p>He is the CEO and Freelance Consultant at Quality Healthcare International Services Ltd and previously served as Chief Medical Director at Shell Petroleum Development Company (SPDC), where he led initiatives to enhance occupational health and clinical standards.</p>
      <p>With a strong consulting background and a focus on quality healthcare delivery, Dr. Mosuro brings invaluable expertise in governance, policy, and strategic development to the AMHS Board.</p>
      `,
  },
};

export const testimonials = [
  {
    name: "Mrs. Adebayo (Lagos)",
    feedback:
      "Alpha Mead has consistently provided exceptional facility management services. Their attention to detail and professionalism stand out in the industry.",
  },
  {
    name: "Engr. Chukwuma (Abuja)",
    feedback:
      "Their team ensured our project was completed on schedule and with the highest quality. Communication was seamless throughout.",
  },
  {
    name: "Dr. Okafor (Alpha Mead Healthcare)",
    feedback:
      "Working with Alpha Mead transformed the way we manage our hospital facilities. Their healthcare-specific expertise is unmatched.",
  },
  {
    name: "Mr. Johnson (Ghana)",
    feedback:
      "Our real estate project benefited immensely from their integrated approach to development and management. A reliable partner indeed.",
  },
  {
    name: "Mrs. Yusuf (Property Owner)",
    feedback:
      "I appreciate their professionalism and proactive maintenance culture. My property has never been in better hands.",
  },
  {
    name: "Mr. Adeola (Lagos)",
    feedback:
      "Excellent service delivery and reliable project execution every single time. I highly recommend Alpha Mead.",
  },
  {
    name: "Dr. Chinedu (Abuja)",
    feedback:
      "Their technical know-how and customer service are simply outstanding. They’ve earned our trust.",
  },
  {
    name: "Mrs. Mensah (Ghana)",
    feedback:
      "Professional, prompt, and focused on quality outcomes. We’ve had a great experience working with them.",
  },
  {
    name: "Engr. Bello (Port Harcourt)",
    feedback:
      "A partner that truly understands facility management at scale. Impressive dedication and expertise.",
  },
  {
    name: "Mr. Samuel (Lagos)",
    feedback:
      "From consultation to completion, the experience was seamless. Kudos to the Alpha Mead team.",
  },
];


export const ghanaData = [
  {
    title: "Ghana",
    content: `Alphamead has established a strong presence in Ghana by delivering world-class facility management solutions that drive efficiency, safety, and sustainability. Over the years, we have partnered with leading organizations such as <span class="font-bold">Unilever, Nestlé, and Advantage Place</span>, providing tailored services that ensure their facilities operate at peak performance.`,
    secondContent: `Our proven track record in Ghana underscores our reputation as a trusted partner for multinational corporations and local businesses alike. By combining global best practices with local expertise, we continue to set the benchmark for professional facility management in Ghana.`,
  }
];

export const cameroonData = [
  {
    title: "Cameroon",
    content: `In Cameroon, Alphamead has worked with leading organizations such as <span class="font-bold">Ericsson</span>, providing facility management services that meet global standards while addressing local needs. Our expertise ensures safe, efficient, and sustainable operations that add value to our clients’ assets.`,
    secondContent: `Our proven track record in Ghana underscores our reputation as a trusted partner for multinational corporations and local businesses alike. By combining global best practices with local expertise, we continue to set the benchmark for professional facility management in Ghana.`,
  }
];

export const senegalData = [
  {
    title: "Senegal",
    content: `Alphamead plays a key role in Senegal’s facility management landscape, supporting global and regional brands. Our projects for <span class='font-bold'>Philip Morris</span> and <span class='font-bold'>Ericsson</span> highlight our ability to manage complex facilities, optimize performance, and deliver long-term value.`,

  }
];

export const southAfricaData = [
  {
    title: "South Africa",
    content: `Alphamead’s expertise extends to South Africa, where we have supported global brands such as <span class='font-bold'>Nokia</span>. By integrating technology-driven solutions with a strong commitment to sustainability, we help clients optimize their facilities for peak performance in one of Africa’s most competitive markets.`,
  }
];


export const kenyaData = [
  {
    title: "Kenya",
    content: `In Kenya, Alphamead has delivered facility management services for industry leaders such as <span class='font-bold'>Dow Chemicals</span>. Our solutions emphasize safety, energy efficiency, and operational excellence—supporting Kenya’s fast-growing commercial and residential infrastructure.`,
  }
];

export const guineaData = [
  {
    title: "Guinea Conakry",
    content: `Alphamead is proud to have been awarded the prestigious <span class='font-bold'>WAQBID</span> facility management contract in Guinea Conakry—an achievement that reflects our proven expertise and trustworthiness in managing critical assets across Africa. By delivering reliable, safe, and sustainable operations, we not only create long-term value for WAQBID but also contribute to Guinea’s broader development agenda. Our commitment is to ensure that world-class facility management standards support the country’s economic growth and infrastructure transformation.`,
  }
];

export const rwandaData = [
  {
    title: "Rwanda",
    content: `In Rwanda, Alphamead provides professional facility management services for global brands such as <span class='font-bold'>Ericsson</span>. Our solutions ensure efficiency, sustainability, and workplace safety across corporate and commercial facilities.`,
  }
];

export const coteData = [
  {
    title: "Côte d'Ivoire",
    content: `Alphamead has a strong presence in Côte d’Ivoire, managing facilities for leading organizations including <span class='font-bold'>MTN, Joelle, Novotel, Hellen Keller, and Golka.</span> Our ability to serve diverse industries demonstrates our expertise in delivering tailored solutions that enhance business performance and preserve asset value.`,
  }
];

export const ethiopiaData = [
  {
    title: "Ethiopia",
    content: `In Ethiopia, Alphamead supports leading organizations such as <span class='font-bold'>Ericsson</span> with world-class facility management services. Our solutions help clients maintain safe, efficient, and sustainable environments that drive business productivity.`,
  }
];

export const tanzaniaData = [
  {
    title: "Tanzania",
    content: `Alphamead has delivered facility management solutions in Tanzania for <span class='font-bold'>Ericsson</span>. By combining local knowledge with international best practices, we ensure facilities run efficiently while supporting clients’ long-term growth.`,
  }
];

export const botswanaData = [
  {
    title: "Botswana",
    content: `In Botswana, Alphamead provides facility management services to global organizations such as <span class='font-bold'>Ericsson</span>. Our approach emphasizes preventive maintenance, cost efficiency, and sustainability, ensuring facilities operate at world-class standards.`,
  }
];

export const uaeData = [
  {
    title: "UAE",
    content: `Alphamead’s expertise extends to the UAE, where we provide facility management services for <span class='font-bold'>Panasonic</span>. Operating in one of the world’s most competitive real estate markets, we combine technology, innovation, and customer-focused solutions to deliver premium facility management experiences.`
  }
];

export const beninData = [
  {
    title: "Benin Republic",
    content: `Alphamead has established a strong reputation as one of Africa’s leading facility management companies, with a proven track record of delivering world-class services to multinational and local organizations across the continent. In Benin Republic, we have a growing presence and are actively engaging with reputable businesses and property developers to bring our expertise to the market. With our commitment to preventive maintenance, sustainability, and operational efficiency, Alphamead stands ready to be the trusted partner for organizations in Benin Republic seeking reliable and professional facility management solutions.`
  }
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