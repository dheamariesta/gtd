// Components
import React from 'react';
import { Row, Col } from "react-bootstrap";

export const FAQ = () => {
  return (
    <section id="faq">
      <Row className="default-bg full-height">
        <Col md={12}>
          <h1 className="section-title title">FAQ</h1>
          <Row>
            <Col xs={12} md={6} mdPush={3}>
              <div className="faq">
                {/* Question 1*/}
                <p>Q : Sebaiknya lunch di mana ya?</p>
                <p>A : Tempat makan bebas (Diskusi sendiri di OG), tapi ada rekomendasi: <br/>
                  <strong>Clarke Quay + Dhoby Ghaut</strong> : Kopitiam Plaza Singapura, Justacia <br/>
                  <strong>MBS</strong> : 1983 - A taste of nanyang (food court)
                </p>
                <small> Untuk info lebih lanjut silahkan kunjungi <a href="https://tinyurl.com/gtd-lunch"
                                                                     className={"hover-underline"}
                                                                     target={"_blank"}>sini</a>
                </small>
                <hr/>

                {/* Question 2*/}
                <p>Q : Gw haus, water point dimana ya?</p>
                <p>A : Cuma ada 2 tempat buat water point, 1 di NTU dan 1 lg tempatnya di antara level 2 / level 3.
                  Jadi isi dulu semua botol minumnya di NTU.</p>
                <hr/>

                {/* Question 3*/}
                <p>Q : Masjid di mana?</p>
                <p>A : Untuk memudahkan kita bersama, masjid yang direcommend yaitu Masjid Moulana ( 80 Raffles Place,
                  #b1-01, 048624 )</p>
                <hr/>

                {/*Question 4*/}
                <p>Q : Gw telat, gimana nyusul OG gw ya?</p>
                <p>A : Hubungi GL terdekat. Semoga bisa ketemu ya.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
