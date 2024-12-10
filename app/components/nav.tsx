import Link from "next/link";
import React from "react";

export default function Nav() {
  return <>

    <div className="card_pilates" style={{ maxWidth: '1620px' }}>
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
            style={{ padding: '30px', height: '80%' }}
          >
            <h1>Nice to see you here!</h1>
            <p></p>
            <p className="small m-0">
              Welcome to The Pilates Room, a studio where strength, flexibility, and mindfulness come together.
            </p>
            <p></p>
            <p className="small m-0">
              Our expert instructors offer classes for all levels, helping you build a balanced body and a focused mind.
            </p>
            <p className="small m-0">
              Join us and experience a transformative journey toward a healthier, more empowered you.
            </p>

            <p></p>
            <p></p>



            <button className="button-classes">Book a class</button>




          </div>
        </div>
      </div>
    </div>


    <p>
    </p>

    <p></p>

    <div className="title-image-container">
      <h1 className="classes">Our Classes</h1>



    </div>
    <p></p>


    <div className="card-group">
      <div className="card">
        <img className="d-block w-100 mb-3" src="images/pilates_reformer.jpg" />
        <div className="card-body">
          <h5 className="card-title">Pilates Reformer</h5>
          <p className="card-text">This versatile machine uses springs and pulleys to create resistance, helping you improve strength, flexibility, and posture. Perfect for all levels, the Reformer offers targeted, controlled movements that challenge your muscles in ways you’ve never felt before.</p>
          <p className="card-text"><small className="text-body-secondary">*Classes available on Monday and Tuesdays.</small></p>
          <button className="button-classes_card">Book a class</button>
        </div>

      </div>

      <div className="card">
        <img className="d-block w-100 mb-3" src="images/pilates_floor.jpg" />
        <div className="card-body">
          <h5 className="card-title">Pilates Floor</h5>
          <p className="card-text">Join our Pilates Mat class to strengthen your core, improve flexibility, and boost overall wellness. Suitable for all levels, this class focuses on controlled movements to tone muscles, increase mobility, and promote relaxation.</p>
          <p className="card-text"><small className="text-body-secondary">*Classes available on Wednesdays and Thursdays.</small></p>
          <button className="button-classes_card">Book a class</button>
        </div>
      </div>
      <div className="card">
        <img className="d-block w-100 mb-3" src="images/pilates_pose 1.png" />
        <div className="card-body">
          <h5 className="card-title">Advanced Pilates</h5>
          <p className="card-text">This session is designed for experienced practitioners, focusing on advanced techniques to enhance strength, flexibility, and control. Push your limits, refine your practice, and take your Pilates to the next level in a supportive environment!</p>
          <p className="card-text"><small className="text-body-secondary">*Classes available on Fridays and Saturdays.</small></p>
          <button className="button-classes_card">Book a class</button>
        </div>
      </div>
    </div>

    <p></p>
    <p></p>


    <p></p>

    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 mb-3"
                src="images/studio_pilates.png"
                alt="Pilates Image"
                style={{ objectFit: 'cover', maxHeight: '400px' }}
              />

            </div>
          </div>
        </div>




      </div>
    </div>

    <p></p>
    <p></p>

    <h1 className="classes">Our packages and discounts </h1>
    <p></p>

    <div className="container_packages">
      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Private Class Reformer</h5>
          <h6 className="card-validation">Valid for 1 day</h6>
          <p className="card-text">A Private Pilates Reformer Class offers a personalized workout to improve strength, flexibility, and posture, tailored to your goals.</p>
          <a href="#" className="card-link">$20 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Reformer class</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">A Pilates Reformer Class offers a dynamic group workout to improve strength, flexibility, and posture, suitable for all fitness levels. Ready to improve your fitness life?</p>
          <a href="#" className="card-link">$15 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Reformer 4 classes</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">We offer a dynamic group workout to improve strength, flexibility, and posture, suitable for all fitness levels while promoting a supportive community atmosphere. </p>
          <a href="#" className="card-link">$80 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Pilates Mat 4 classes</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">A Pilates Mat Class offers a full-body workout to improve strength, flexibility, and posture using just a mat. It's a great way to build core strength.</p>
          <a href="#" className="card-link">$60 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Reformer 8 classes</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">We offer a dynamic group workout to improve strength, flexibility, and posture, suitable for all fitness levels, and designed to enhance endurance and overall health.</p>
          <a href="#" className="card-link">$15 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Pilates Mat 8 classes</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">A Pilates Mat Class offers a full-body workout to improve strength, flexibility, and posture using just a mat. Suitable for all levels, it's a great way to build core strength and enhance mobility.</p>
          <a href="#" className="card-link">$150 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Reformer 12 classes</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">A Pilates Reformer Class offers a dynamic group workout to improve strength, flexibility, and posture, suitable for all fitness levels, while promoting core stability and overall body alignment.</p>
          <a href="#" className="card-link">$210 CAD</a>
          <p></p>
        </div>
      </div>

      <div className="card_prices">
        <div className="card-body_prices">
          <h5 className="card-title">Pilates Mat 8 classes</h5>
          <h6 className="card-validation">Valid for 30 days</h6>
          <p className="card-text">A Pilates Mat Class offers a full-body workout to improve strength, flexibility, and posture using just a mat. Suitable for all levels, it's a great way to build core strength and enhance mobility.</p>
          <a href="#" className="card-link">$150 CAD</a>
          <p></p>
        </div>
      </div>
    </div>





    <p></p>



    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <img
        className="cintillo"
        src="images/Frame 11.png"
        alt="Pilates Image"
        style={{ objectFit: 'cover', width: '60%', height: 'auto' }}
      />
    </div>
    <p></p>
    <p></p>


    <div className="card_footer">
      <div className="card-header">
        <h1 className="title_footer"> @ThePilatesRoom </h1>
      </div>
      <div className="card-body">
        <p className="card-text">832 College St
          Level 2, Toronto,
          ON M6G 1C8

        </p>

        <p className="card-text"> +52 934 544 34 77

        </p>

      </div>
      <div className="card-footer text-body-secondary">
        © 2024 The Pilates Room Ltd. All rights reserved.
      </div>
    </div>
  </>
}