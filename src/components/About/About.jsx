import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up" data-aos-duration="700">
        O KOMPANIJI
      </h2>
      <div className="summary">
        <h3
          className="aboutHeadline"
          data-aos="fade-up"
          data-aos-duration="700"
        ></h3>
        <div data-aos="fade-up" data-aos-duration="700">
          <p>
            U prethodnih 20 i više godina, izgradili smo preko 15
            stambeno-poslovnih objekata, od kojih je najveći broj u Novom Sadu.
            Naše objekte odlikuje kvalitet i najviši standardi gradnje. U našem
            poslovanju isključivo koristimo materijele i opremu najboljeg
            kvaliteta. U nastavku stranice možete pogledati kratak pregled do
            sada izgrađenih stambeno-poslovnih objekata.
          </p>
        </div>
      </div>
      <div className="btn-res">
        <a href="#">
          <button>Kontaktirajte nas</button>
        </a>
        <a href="#">
          <button>Naši projekti</button>
        </a>
      </div>
    </section>
  );
}

export default About;
