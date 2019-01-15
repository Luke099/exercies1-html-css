import React from 'react';


const Footer = () => {
    return (
        <div>
            <div className="gallery">
                <div className="gallery-slider owl-carousel">
                    <div className="gs-item set-bg" data-setbg="./assets/img/instagram/1.jpg"></div>
                    <div className="gs-item set-bg" data-setbg="./assets/img/instagram/2.jpg"></div>
                    <div className="gs-item set-bg" data-setbg="./assets/img/instagram/3.jpg"></div>
                    <div className="gs-item set-bg" data-setbg="./assets/img/instagram/4.jpg"></div>
                    <div className="gs-item set-bg" data-setbg="./assets/img/instagram/5.jpg"></div>
                    <div className="gs-item set-bg" data-setbg="./assets/img/instagram/6.jpg"></div>
                </div>
            </div>
            <footer className="footer-section set-bg" data-setbg="img/footer-bg.jpg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6"style={{position:'relatve', bottom:50}}>
                            <div className="footer-logo">
                                <img src="./assets/imgimg/logo.png" alt="" />
                            </div>
                            <div className="footer-social">
                                <a ><i className="fa fa-pinterest"></i></a>
                                <a ><i className="fa fa-facebook"></i></a>
                                <a ><i className="fa fa-twitter"></i></a>
                                <a ><i className="fa fa-dribbble"></i></a>
                                <a ><i className="fa fa-behance"></i></a>
                                <a ><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <ul className="footer-menu">
                                <li><a >Trang Chủ</a></li>
                                <li><a >Món Ăn</a></li>
                                <li><a>Địa Chỉ</a></li>
                                <li><a >Công Thức</a></li>
                                <li><a >Liên Hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;