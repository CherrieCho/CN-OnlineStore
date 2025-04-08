import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "BRAND",
    "BEST",
    "EVENT",
    "ONLY MEMBERSHIP",
    "DOGS",
    "CATS",
    "STORE",
    "리뷰",
    "고객센터",
  ];
  return (
    <div>
      <div className="nav-container">
        <div className="search-login">
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="검색어를 입력해주세요" />
          </div>
          <div className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        </div>
        <div className="nav-logo">
          <img
            width={210}
            src="https://dev-wedc.pantheonsite.io/wp-content/uploads/2020/09/Stella-and-Chewys-Logo-scaled.jpg"
          />
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
