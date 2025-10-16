import InterBusiness from '../assets/inter-business.jpg';

const InterBusinessHero = () => {
    return (
        <section className="relative py-20 bg-zinc-950 text-white">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${InterBusiness})` }}
        ></div>
        
        <div className="relative container mx-auto px-10 md:px-28 text-left">
            <div className="row">
            <div className="col-sm-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">International Business</h1>
            </div>
            </div>
        </div>
        </section>
    )
};

export default InterBusinessHero;

