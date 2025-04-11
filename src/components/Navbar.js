import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";

const Navbar = ({ auth, setAuth }) => {
  //사이드메뉴 오픈
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  //form에서 검색 키워드 인식
  const [query, setQuery] = useState("");
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

  //로그인버튼 클릭하면 로그인페이지로
  const navigate = useNavigate();
  const goToLogin = () => {
    if (auth === true) {
      alert("로그아웃 되었습니다");
      navigate("/");
      setAuth(false);
    } else {
      navigate("/login");
    }
  };

  //검색
  const search = (keyword) => {
    //입력한 검색어 기반으로 url 변경
    navigate(`/?q=${keyword}`);
  };

  //form 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    search(query);
    setIsSidenavOpen(false);
  };

  return (
    <div>
      {/* 햄버거 메뉴 */}
      <SideNav
        isOpen={isSidenavOpen}
        onClose={() => setIsSidenavOpen(false)}
        search={search}
        menuList={menuList}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="nav-container">
        <div className="search-login">
          <div
            className="hamburger-icon"
            onClick={() => setIsSidenavOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <form className="search-box" onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색어를 입력해주세요"
            />
          </form>
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} size="xl" />
            <div className="is-login">
              {auth === true ? "로그아웃" : "로그인"}
            </div>
          </div>
        </div>
        <div className="nav-logo">
          <Link to="/">
            <img
              width={210}
              src="https://dev-wedc.pantheonsite.io/wp-content/uploads/2020/09/Stella-and-Chewys-Logo-scaled.jpg"
            />
          </Link>
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Navbar;
