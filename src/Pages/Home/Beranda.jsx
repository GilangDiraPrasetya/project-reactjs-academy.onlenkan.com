import React from 'react';
import { Link } from 'react-router-dom';
import kelas1 from '../.././Images/kelas/kelas1.jpg';
import kelas2 from '../.././Images/kelas/kelas2.jpg';
import artikel1 from '../.././Images/artikel/artikel1.png';
import person1 from '../.././Images/artikel/person1.png';
import { Edit, Person, Draft, Newspaper } from 'akar-icons';
import Home from '../../Layouts/Home';

function Beranda() {
  return (
    <Home>
      <section className="hero" id="hero">
        <div className="container">
          <h1 className="text-dark fw-bold mb-3">
            Bangun Karir Impianmu <br className="d-none d-md-block" />
            Bersama <span className="text-primary">Onlenkan Academy</span>
          </h1>
          <p className="text-secondary text-capitalize mb-4" style={{ fontSize: '18px' }}>
            Tingkatkan Kemampuan Coding Kamu Sekaligus Menambah Jaringan Kamu <br className="d-none d-md-block" />
            Bersama Programmer Hebat Lainnya.
          </p>
          <div className="d-flex align-items-center gap-3">
            <Link to="/register" className="btn btn-primary px-3 py-2 rounded">
              Daftar Kelas
            </Link>
            <a href="#kelas" className="btn btn-light px-3 py-2 rounded">
              Lihat List Kelas
            </a>
          </div>
        </div>
      </section>

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

      <section className="ecourse-list" id="kelas">
        <div className="container">
          <h2 className="section-title text-center text-dark mb-2">Artikel Terakhir</h2>
          <p className="section-description text-center">
            Jika Kamu mempunyai waktu yang singkat, dan ingin dimanfaatkan,
            <br className="d-none d-md-block" />
            kami telah menyediakan Kamu beberapa artikel <br className="d-none d-md-block" />
            yang mungkin bermanfaat.
          </p>

          <div className="row mt-5">
            <div className="col-md-4">
              <Link to="/artikel/artikel-detail" className="card border-0 card-value rounded-3 text-decoration-none mb-3">
                <img src={artikel1} className="card-img-top" />
                <div className="card-body p-0 py-2">
                  <span className="d-inline-block text-primary fw-semibold mb-1" style={{ fontSize: '12px' }}>
                    Laravel
                  </span>
                  <h6 className="text-dark fw-semibold mb-2 pe-2 border-end border-primary">Apa yang baru di Laravel 10</h6>
                  <p className="text-secondary fs-7 mb-2">Dalam artikel ini kita akan membahas apa saja yang terbaru di Laravel 10</p>

                  <div className="d-flex align-items-center gap-3">
                    <img src={person1} alt="" className="avatar rounded-circle" style={{ width: '36px', height: '36px' }} />
                    <div>
                      <p className="text-dark fs-7 fw-semibold mb-0">Muhammad Yunus</p>
                      <span className="fw-normal text-secondary mb-0" style={{ fontSize: '12px', marginTop: '-5px' }}>
                        14 Mar 2023
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="our-value bg-soft-blue" id="our-value">
        <div className="container">
          <p className="text-center text-primary text-uppercase fw-semibold fs-7 mb-2">our value</p>
          <h2 className="section-title text-center text-dark mb-3">Kenapa Memilih Kami?</h2>
          <p className="section-description text-center text-capitalize">
            Akan ada banyak sekali benefit yang akan kamu dapatkan ketika kamu mendaftar <br className="d-none d-md-block" />
            menjadi member kami, contoh besarnya seperti berikut:
          </p>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card border-0 card-value rounded-3 mb-3">
                <div className="card-body p-3 p-md-4">
                  <div className="icon mb-3 rounded-circle bg-primary text-white">
                    <Edit />
                  </div>
                  <h5 className="text-dark fw-semibold mb-2">Mudah Dipelajari</h5>
                  <p className="text-secondary">Materi disusun rapi dengan penyampaian yang mudah diterima sekalipun kepada pemula.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 card-value rounded-3 mb-3">
                <div className="card-body p-3 p-md-4">
                  <div className="icon mb-3 rounded-circle bg-primary text-white">
                    <Person />
                  </div>
                  <h5 className="text-dark fw-semibold mb-2">Mentor Berpengalaman</h5>
                  <p className="text-secondary">Dibimbing oleh mentor atau programmer hebat yang telah berpengalaman lama di bidangnya.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 card-value rounded-3 mb-3">
                <div className="card-body p-3 p-md-4">
                  <div className="icon mb-3 rounded-circle bg-primary text-white">
                    <Draft />
                  </div>
                  <h5 className="text-dark fw-semibold mb-2">Waktu Fleksibel</h5>
                  <p className="text-secondary">Kapanpun dan dimanapun kamu berada, kamu masih bisa mengembangkan skill di Platform.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 card-value rounded-3 mb-3">
                <div className="card-body p-3 p-md-4">
                  <div className="icon mb-3 rounded-circle bg-primary text-white">
                    <Newspaper />
                  </div>
                  <h5 className="text-dark fw-semibold mb-2">Sertifikat</h5>
                  <p className="text-secondary">
                    Akan selalu ada sertifikat khusus pada setiap kelas yang kamu ikuti, <i>selagi mengumpulkan tugas</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Home>
  );
}

export default Beranda;
