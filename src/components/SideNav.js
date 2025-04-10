import React from "react";

const SideNav = ({ isOpen, onClose, menuList }) => {
  return (
    <div className="sidenav" style={{ width: isOpen ? "250px" : "0" }}>
      <button className="closebtn" onClick={onClose}>
        &times;
      </button>
      {menuList.map((menu, idx) => (
        <a key={idx} href="#!" onClick={onClose}>
          {menu}
        </a>
      ))}
    </div>
  );
};

export default SideNav;
