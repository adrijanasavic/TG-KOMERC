import React from "react";
import Typical from "react-typical";
import "./Home.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz"></div>
          <div className="profile-details-name">
            <span className="primary-text">
              <h3> Sa Vama još od 1998. godine! Tradicija i Kvalitet! </h3>
              <span className="highlighted-text">
                <h3>
                  <b>Izgradnja</b>
                </h3>
                <h3>
                  <b>Stovarište građevinskog materijala</b>
                </h3>
                <h3>
                  <b>Prodaja molerskog alata i pribora</b>
                </h3>
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <div className="detail">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "TG KOMERC-98",
                    2000,
                    "021/2419-400",
                    2000,
                  ]}
                />
              </h1>
            </span>
            </div>
            <span className="profile-role-tagline">
              <h4>
              TG Komerc-98 je preduzeće koje se bavi prodajom gradjevinskog materijala i izgradnjom stambeno-poslovnih objekata. Uspešno poslujemo od 1998. godine a iza nas je veliki broj zadovoljnih kupaca. U ponudi imamo kompletan gradjevinski materijal “od temelja do krova” po pristupačnim cenama.
              </h4>
            </span>
          </div>

          <div className="profile-options">
            <a href="CV_Adrijana_Savić.pdf" download="CV Adrijana Savić.pdf">
              <button className=" btn-get">Saznajte više</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
          <div className="cols-icon">
            <a href="https://www.linkedin.com/in/adrijana-savi%C4%87-50249176/">
              <i
                class="fa fa-linkedin"
                style={{ fontSize: "36px" }}
                aria-hidden="true">
                </i>
            </a>
            <a href="https://github.com/adrijanasavic">
              <i class="fa fa-github" style={{ fontSize: "36px"  }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
