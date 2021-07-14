import "./dish.css";

const Dish = ({ dish }) => {
    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{dish.country}</h5>
            </div>
            <div className="row">
                <h5 className="col-md-12">{dish.name}</h5>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img className="image" src={`/images/${dish.photo}.jpeg`} alt="Dish" />
                </div>
                <div className="col-md-5">
                    <h5 className="description">Description</h5>
                    <p className="time">{dish.cookingTime}m</p>
                    <p>{dish.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Dish;