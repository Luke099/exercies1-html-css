import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (<div>
        <div id="preloder">
            <div className="loader"></div>
        </div>
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="header-social">
                        <Link to="/home"><i className="fa fa-pinterest"></i></Link>
                        <Link to="/home" ><i className="fa fa-facebook"></i></Link>
                        <Link to="/home"><i className="fa fa-twitter"></i></Link>
                        <Link to="/home"><i className="fa fa-dribbble"></i></Link>
                        <Link to="/home"><i className="fa fa-behance"></i></Link>
                        <Link to="/home"><i className="fa fa-linkedin"></i></Link>
                    </div>
                    <div className="user-panel">
                        <Link to="/home">Đăng Ký</Link> /
                        <Link to="/home">Đăng Nhập</Link>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <p href="index.html" className="site-logo">
                        <img src="./assets/img/NewLogo.png" alt=""
                            style={{ maxHeight: 150, position: 'relative', bottom: 30 }}
                        />
                    </p>
                    <div className="header-search">
                        <p href="#"><i className="fa fa-search"></i></p>
                    </div>
                    <ul className="main-menu">
                        <li> <Link to="/home">Trang Chủ</Link></li>
                        <li><Link to="/home">Các Món Ăn Ngon</Link></li>
                        <li><Link to="/home">Địa Chỉ Ăn Ngon</Link></li>
                        <li><Link to="/home">Công Thức Nấu Ăn</Link></li>
                        <li><Link to="/home">Liên Hệ</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        <section className="page-top-section set-bg" data-setbg="img/page-top-bg.jpg">
            <div className="container">
            <Link to="/home">
                <h2>Công Thức Nấu Ăn</h2>
                </Link>
            </div>
        </section>
        <div className="search-form-section">
            <div className="sf-warp">
                <div className="container">
                    <form className="big-search-form">
                        <select>
                            <option>Danh Sách Công Thức</option>
                            <option>Gỏi</option>
                            <option>Món Ăn Vặt</option>
                            <option>Món Nhậu</option>
                            <option>Món Ăn Chính</option>
                        </select>
                        <select>
                            <option>Món Theo Buổi Ăn</option>
                            <option>Ăn Sáng</option>
                            <option>Ăn Trưa</option>
                            <option>Ăn Tối</option>
                        </select>
                        <input type="text" placeholder="Tìm Kiếm Công Thức" />
                        <a><button className="bsf-btn">Tìm</button></a>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default Header;