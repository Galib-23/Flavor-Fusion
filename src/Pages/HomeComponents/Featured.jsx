import delivery from '../../assets/delivery.png';
const Featured = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src={delivery} className="max-w-xs md:max-w-md  rounded-lg shadow-2xl border border-cyan-400 p-8" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold text-yellow-300">Get Delivery Anywhere & Anytime !</h1>
                    <p className="py-6 text-cyan-200">We cover a wide range of delivery location and the foods are delivered within time always. We also care about the delivery process so that the food to deliver never get damaged. If damaged you get a free return policy.</p>
                    <button className="btn btn-secondary btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;