import React from 'react';
import { Link } from 'react-router-dom';
import kelas1 from '../../../Images/kelas/kelas1.jpg';
import kelas2 from '../../../Images/kelas/kelas2.jpg';
import Home from '../../../Layouts/Home';

function Kelas() {
  return (
    <Home>
      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-dark mb-2">Pilih Kelas</h2>
          <p className="section-description">Pilih kelas unggulan untuk tingkatkan keahlian kamu!</p>

          <div className="row mt-5">
            <div className="col-md-4">
              <Link to="/kelas/kelas-detail" className="card border-0 card-value rounded-3 text-decoration-none mb-3">
                <img src={kelas1} className="card-img-top" />

                <div className="card-body p-0 py-2">
                  <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                    Full-Stack Web Developer
                  </span>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Mastering Laravel | From Zero to Hero</h6>
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-dark fw-semibold m-0">Rp. 300,000</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <a href="" className="card border-0 card-value rounded-3 text-decoration-none mb-3">
                <img src={kelas2} className="card-img-top" />
                <div className="card-body p-0 py-2">
                  <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                    Full-Stack Web Developer
                  </span>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Full-Stack Web Developer | Belajar Dari 0 Hingga Mahir - Laravel Pride</h6>
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-dark fw-semibold m-0">Rp. 350,000</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Kelas;
