import "./dish.css";
import { useState } from "react";
import emailIcon from './emailIcon.png';
import Inquiry from "./Inquiry";

const Dish = ({ dish }) => {
    const [inquiryShown, setInquiryShown] = useState(false);
    const inquiryClick = () => {
        setInquiryShown(!inquiryShown);
    }
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
                    <img
                        src={emailIcon} height="50" alt="Inquiry"
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry dish={Dish} />}
                </div>
            </div>
        </div>
    );
}

export default Dish;