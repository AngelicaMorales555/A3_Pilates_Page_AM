import Link from "next/link";
import React from "react";

export default function Nav() {
  return <>

    <div className="card mb-3" style={{ maxWidth: '1620px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="d-block w-100 mb-3"
            src="images/image 1093 (5).png"
            alt="Pilates Image"
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>
        <div className="col-md-8">
          <div
            className="card-body d-flex flex-column justify-content-center align-items-center"
            style={{ padding: '30px', height: '100%' }}
          >
            <h1>Nice to see you here!</h1>
            <p className="small m-0">
              Welcome to CoreFlow Pilates—a studio where strength, flexibility, and mindfulness come together.
            </p>
            <p></p>
            <p className="small m-0">
              Our expert instructors offer classes for all levels, helping you build a balanced body and a focused mind.
            </p>
            <p className="small m-0">
              Join us and experience a transformative journey toward a healthier, more empowered you.
            </p>

            <div className="mt-3">
              <button type="button" className="btn btn-primary">Book a class</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="main-card"></div>
    <div className="card mb-3" style={{ maxWidth: '660px' }}>
      <div className="row g-0">
        <div className="col-md-4">
        <img
            className="d-block w-100 mb-3"
            src="pilates_reformer.jpg"
            alt="Pilates Imag2e"
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    


    <div className="card mb-3" style={{ maxWidth: '660px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>













    <div className="col-3">
      <div className="list-group">
        <Link href="/" className="list-group-item list-group-item-action">
          Welcome
        </Link>
        <Link href="/about" className="list-group-item list-group-item-action">
          About us
        </Link>
        <Link href="/contact" className="list-group-item list-group-item-action">
          Classes
        </Link>
        <Link href="/contact" className="list-group-item list-group-item-action">
          Packages
        </Link>
        <Link href="/contact" className="list-group-item list-group-item-action">
          Contact
        </Link>
      </div>
      <p className="small text-danger text-center mt-3 text-warning">
        Coffee: the magic potion that turns morning mayhem into midday clarity.
      </p>
    </div>
  </>
}