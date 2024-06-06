import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section id="error_page" className="section">
        <div className="container">
          <div className="error_page_content">
            <h1>404</h1>
            <h2>Topilmadi</h2>
            <h3>Kechirasiz, soʻralgan sahifa topilmadi.</h3>
            <Link to="/" className="btn">
              Bosh sahiga qaytish.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
