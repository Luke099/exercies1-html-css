import React from 'react';
import helper from './Helpers';

const RenderDuration = ({ duration }) => {
    return (<div className="filter-top-text">
        <p>Chuẩn Bị: {duration.prepareTime}</p>
        <p>Chế Biến: {duration.ProcessingTime}</p>
        <p>Khẩu Phần: {duration.ration}</p>
    </div>)
}
const renderMaterial = (listMaterial) => {
    let result = [];
    if (listMaterial) {
        for (let i = 0; i < listMaterial.length; i++) {
            result = result.concat(<div className="check-warp" key={i + 100}>
                <input type="checkbox" id={i + 100} />
                <label  htmlFor={i + 100}>- {listMaterial[i]}</label>
            </div>)
        }
    }
    return result;
}
const renderProcess = (process) => {
    let result = [];
    if(process){
        let i =0;
        process.forEach(processItem => {
            result = result.concat(<li>
                <p key={i}> {processItem}</p>
            </li>);
            i +=1;
        });
    } 
    return result;
}
const Detail = ({recipe}) => {
 
 if(recipe) {
    return (
        <>
        <section className="recipe-details-section">
            <div className="container">
                <div className="recipe-meta">
                    <div className="racipe-cata">
                        <span>Cho Người Chế Biến Lần Đầu</span>
                    </div>
                    <h2>{recipe.name} - món ăn hấp dẫn của người Sài Gòn</h2>
                    <div className="recipe-date">Ngày 14 tháng 12 năm 2018</div>
                    <div className="rating">
                        {helper.renderRating(recipe.rating)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="recipe-filter-warp">
                            <div className="filter-top">
                                <div className="filter-top-text">
                                    <RenderDuration duration={recipe.duration} />
                                </div>
                            </div>
                            <div className="filter-form-warp">
                                <h2>Nguyên Liệu</h2>
                                <form className="filter-form">
                                    {renderMaterial(recipe.material)}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <ul >
                            {renderProcess(recipe.process)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
 }
 return <div></div>
   
}

export default Detail;