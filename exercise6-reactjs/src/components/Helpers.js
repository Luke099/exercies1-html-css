import React from 'react';

const notFace = "fa fa-star";
const isFace = "fa fa-star is-fade";

const RatingItem = ({ star }) => {
    return (<i className={star}></i>)
}

class Helper {
    renderRating = (rating) => {
        let result = [];
        for (let i = 0; i < rating; i++) {
            result = result.concat(<RatingItem star={notFace} key={i} />);
        }
        let j = 5 - rating;
        if (j > 0) {
            for (let i = 0; i < j; i++) {
                result = result.concat(<RatingItem star={isFace} key={i + 10} />)
            }
        }
        return result;
    }
}
let helper = new Helper();

export default helper;
