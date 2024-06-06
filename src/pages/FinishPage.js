import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";

const FinishPage = () => {
  return (
    <>
      <section id="error_page" className="section">
        <div className="container">
          <div className="error_page_content">
            <h3>
              Haridingiz muaffaqiyatli amalga oshirildi !
              <IoCheckmarkSharp
                color="green"
                fontWeight="bold"
                fontSize="25px"
              />
            </h3>
            <Link to="/" className="btn">
              Bosh sahiga qaytish.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinishPage;
