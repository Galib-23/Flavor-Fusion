import avatar from '../../assets/avatar.png';
const Reviews = () => {
    return (
        <div className="h-screen py-4 md:py-20  space-y-10">
            <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">What Our Customers Say ?</h2>
                <p className="text-center">Our Customers are very much satisfied with our foods . They often write their <br /> view to us. We take the criticisms and also the good reviews in a very positive manner <br /> and take actions according to this</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {/* ---card--- */}
                <div className="flex flex-col justify-center items-center card bg-base-100 border border-cyan-300 py-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                {/* ---card--- */}
                <div className="flex flex-col justify-center items-center card bg-base-100 border border-cyan-300 py-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                {/* ---card--- */}
                <div className="flex flex-col justify-center items-center card bg-base-100 border border-cyan-300 py-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                {/* ---card--- */}
                <div className="flex flex-col justify-center items-center card bg-base-100 border border-cyan-300 py-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

