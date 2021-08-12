import Dish from "../dish";

const FeaturedDish = ({ dish }) => {
    if (dish)
        return (
            <div>
                <div className="row featuredDish">
                    <h3 className="col-md-12 text-center">Featured Dish</h3>
                </div>
                <Dish dish={dish} />
            </div>
        );
    return <div>No featured dish at this time</div>
}

export default FeaturedDish;