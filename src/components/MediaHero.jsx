import media from "../assets/media.jpg"
const MediaHero = () => {
  return (
    <section className="relative py-20 bg-zinc-950 text-white">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${media})` }}
        ></div>
      
        <div className="relative container mx-auto px-28 text-left">
            <div className="row">
            <div className="col-sm-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">Media & Events</h1>
            </div>
            </div>
        </div>
    </section>
  );
};

export default MediaHero;