import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SideNav = ({
  isOpen,
  onClose,
  menuList,
  query,
  setQuery,
  handleSubmit,
}) => {
  return (
    <div className="sidenav" style={{ width: isOpen ? "80%" : "0" }}>
      <button className="closebtn" onClick={onClose}>
        &times;
      </button>
      <div className="search-box-mobile">
        <form className="search-box-mobile-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력해주세요"
          />
          <FontAwesomeIcon icon={faSearch} />
        </form>
      </div>
      {menuList.map((menu, idx) => (
        <a key={idx} href="#!" onClick={onClose}>
          {menu}
        </a>
      ))}
    </div>
  );
};

export default SideNav;
