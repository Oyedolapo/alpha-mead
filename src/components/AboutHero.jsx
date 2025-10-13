import AboutHeroImg from '../assets/photography4.jpg';
const AboutHero = () => {
  return (
    <section className="relative py-20 bg-zinc-950 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${AboutHeroImg})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 text-left">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-4xl md:text-6xl font-light">About Us</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;