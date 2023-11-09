import combo from '../../assets/carousel/combo.jpg';
import steaks from '../../assets/carousel/steaks.jpg';
import salad from '../../assets/carousel/salad.jpg';
import pancakes from '../../assets/carousel/pancakes.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={combo} className="w-full" />
                <div className="absolute flex items-center justify-center h-full w-full top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='flex flex-col items-center text-cyan-400 space-y-7'>
                        <h2 className="text-6xl font-bold text-yellow-500">Best Combo Deals</h2>
                        <p>Find the best combo pack deals in a reasonable price in our website.</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-accent btn-outline">All Menus</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center
                gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={steaks} className="w-full" />
                <div className="absolute flex items-center justify-center h-full w-full top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='flex flex-col items-center text-cyan-400 space-y-7'>
                        <h2 className="text-6xl font-bold text-yellow-500">Best Steaks you have ever eaten</h2>
                        <p>After eating our steaks you will just forget any other steaks of other restaurents</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-accent btn-outline">All Menus</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center
                gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={pancakes} className="w-full" />
                <div className="absolute flex items-center justify-center h-full w-full top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='flex flex-col items-center text-cyan-400 space-y-7'>
                        <h2 className="text-6xl font-bold text-yellow-500">Get your favorite pancakes</h2>
                        <p>Get the best pancakes from us with very reasonable price and within time</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-accent btn-outline">All Menus</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center
                gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={salad} className="w-full" />
                <div className="absolute flex items-center justify-center h-full w-full top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='flex flex-col items-center text-cyan-400 space-y-7'>
                        <h2 className="text-6xl font-bold text-yellow-500">Do you eat Salad?</h2>
                        <p>We provide the most natural and most nourished salad combinig all herbs.</p>
                        <div className='flex gap-4'>
                            <button className="btn btn-accent btn-outline">All Menus</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center
                gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;