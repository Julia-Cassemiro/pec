import React, { Fragment, ReactNode, useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Sidebar = ({ children }: Props) => {
  const [isActive, setActive] = useState(true);
  const [isActiveG, setActiveG] = useState(false);
  const [isActiveC, setActiveC] = useState(false);
  const [isActiveT, setActiveT] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const CloseToggle = () => {
    setActive(true);
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <img
            src="https://www.vaxxinova.com.br/wp-content/themes/vaxxinova/images/logo-vaxxinova.svg"
            alt="Logo vaxxinova"
            className="mb-3"
          />
          <button
            onClick={handleToggle}
            className="w-10 h-10 header__toggle"
            id="header-toggle"
          >
            <i
              className={
                isActive
                  ? "bx bx-menu header__icon"
                  : "bx bx-menu header__icon bx-x"
              }
            ></i>
          </button>
        </div>
      </header>

      <div className={isActive ? "nav" : "nav show-menu"} id="navbar">
        <nav className="nav__container">
          <div>
            <Link to="#" className="nav__link nav__logo">
              <i className="bx bx-menu nav__icon pt-4"></i>
              <img
                src="https://www.vaxxinova.com.br/wp-content/themes/vaxxinova/images/logo-vaxxinova.svg"
                alt="Logo vaxxinova"
              />
            </Link>

            <ul className="nav__list">
              <li className="nav__items">
                <h3 className="nav__subtitle ">Cadastros</h3>

                <Link to="#" className="nav__link" onClick={handleToggle}>
                  <i className="bx bx-home nav__icon"></i>
                  <span className="nav__name">Home</span>
                </Link>

                <div className="nav__dropdown cursor-pointer">
                  <div className="nav__link">
                    <i className="bx bx-group nav__icon"></i>
                    <span
                      className="nav__name"
                      onClick={(e) => setActiveG(!isActiveG)}
                    >
                      Grupos
                    </span>
                    <i
                      className="bx bx-chevron-down nav__icon nav__dropdown-icon"
                      onClick={(e) => setActiveG(!isActiveG)}
                    ></i>
                  </div>
                  {isActiveG && (
                    <div className="nav__dropdown-collapse ">
                      <Link
                        to="/grupo"
                        className="nav__dropdown-item active"
                        onClick={handleToggle}
                      >
                        <div className="nav__dropdown-content">
                          Grupos de Clientes
                        </div>
                      </Link>
                      <Link
                        to="/grupoProd"
                        className="nav__dropdown-item"
                        onClick={handleToggle}
                      >
                        <div className="nav__dropdown-content">
                          Grupos de Produtos
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="nav__dropdown cursor-pointer">
                  <div className="nav__link ">
                    <i className="bx bx-circle-three-quarter nav__icon "></i>
                    <span
                      className="nav__name "
                      onClick={(e) => setActiveC(!isActiveC)}
                    >
                      Campanha
                    </span>
                    <i
                      className="bx bx-chevron-down nav__icon nav__dropdown-icon"
                      onClick={(e) => setActiveC(!isActiveC)}
                    ></i>
                  </div>
                  {isActiveC && (
                    <div className="nav__dropdown-collapse">
                      <Link
                        to="/tiposCampanha"
                        className="nav__dropdown-item"
                        onClick={handleToggle}
                      >
                        <div className="nav__dropdown-content">
                          Tipos de Campanha
                        </div>
                      </Link>
                      <Link to="/campanha" className="nav__dropdown-item">
                        <div
                          className="nav__dropdown-content"
                          onClick={handleToggle}
                        >
                          Campanha
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="nav__dropdown cursor-pointer">
                  <div
                    className="nav__link"
                    onClick={(e) => setActiveT(!isActiveT)}
                  >
                    <i className="bx bx-pin nav__icon"></i>
                    <span className="nav__name ">Tipos</span>
                    <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                  </div>
                  {isActiveT && (
                    <div className="nav__dropdown-collapse">
                      <Link
                        to="/tipos"
                        className="nav__dropdown-item"
                        onClick={handleToggle}
                      >
                        <div className="nav__dropdown-content">
                          Tipos de Clientes
                        </div>
                      </Link>
                      <Link
                        to="/brindes"
                        className="nav__dropdown-item"
                        onClick={handleToggle}
                      >
                        <div className="nav__dropdown-content">Brindes</div>
                      </Link>
                    </div>
                  )}
                </div>
              </li>

              <li className="nav__items">
                <h3 className="nav__subtitle">Menu</h3>

                <Link to="/areaCliente" className="nav__link">
                  <i className="bx bx-collection nav__icon"></i>
                  <span className="nav__name">Area do Cliente</span>
                </Link>

                <Link to="#" className="nav__link">
                  <i className="bx bx-grid-alt nav__icon"></i>
                  <span className="nav__name">Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>

          <Link to="#" className="nav__link nav__logout">
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </Link>
        </nav>
      </div>

      <div
        onClick={CloseToggle}
        className="max-w-7xl pt-20 mx-auto sm:px-10 lg:px-8"
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;
