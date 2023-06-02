import Link from "next/link";
import React from "react";
import '/src/styles/navbar.css'

function Navbar() {
  const links = [
    {
      label: "example1",
      link: "example1",
    },
    {
      label: "example2",
      link: "example2",
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar__name-container">
        <p className="navbar__name-container_p">Pokemon history</p>
      </div>
      <ul className="navbar__link-container">
        {links.map(({ label, link }) => (
          <li className="navbar__link-container_item" key={link}>
            <Link href={link}>{label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
