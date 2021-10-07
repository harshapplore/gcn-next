import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

const About = () => {
  return (
    <>
      <Header nav={<Nav />} />
      <div className="page-section banner wf-section">
        <img
          src="images/bild-header2x.jpg"
          loading="eager"
          sizes="100vw"
          srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
          alt="Handcrafted stuff"
          className="back-img"
        />
        <div className="container">
          <div className="home-banner-content" />
        </div>
      </div>
      <div className="page-section pb-0 wf-section">
        <div className="container">
          <h1 className="mb-50">About Green Cloud Nine</h1>
          <div className="">
            <img
              src="images/bild-header2x.jpg"
              loading="lazy"
              width={592}
              height={368}
              srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              sizes="(max-width: 479px) 189.25px, (max-width: 767px) 46vw, (max-width: 1279px) 47vw, 592px"
              alt="Handcrafted stuff"
              className="about-img"
            />
            <div className="left-60">
              <p className="lead-text mb-20">
                Green Cloud Nine is an eco-conscious marketplace,  on a mission to make sustainability mainstream. That means, to make sustainable products available and affordable to everyone, so they become the norm and not the exception.
                Our values
              </p>
              {/* <p className="mb-40">
                Wir glauben, dass Nachhaltigkeit die Regel und nicht die
                Ausnahme sein sollte. Deshalb möchte Green Cloud Nine nicht nur
                ein Einkaufszentrum sein, sondern eine starke globale
                Gemeinschaft nachhaltiger Unternehmen und Verbraucher, die
                wirklich etwas bewirken.
              </p> */}
            </div>
            <div>
              <h3>Our values</h3>
              <p>We believe that Sustainability should be the rule and not the exception, that is why Green Cloud Nine does not just want to be a place to shop but a strong global community of sustainable companies and consumers that really make a difference. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section about wf-section">
        <div className="container">
          <h2 className="headline-4">Our Promise</h2>
          <div className="our-promise-wrapper">
            <div className="our-promise-item">
              <img
                src="images/clear-black-24-dp.svg"
                loading="lazy"
                width={35}
                height={35}
                alt="Close"
                className="our-promise-icon"
              />
              <h3 className="headline-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </h3>
              <p className="mb-60">
                Wir glauben, dass Nachhaltigkeit die Regel und nicht die
                Ausnahme sein sollte.
              </p>
            </div>
            <div className="our-promise-spacer" />
            <div className="our-promise-item">
              <img
                src="images/clear-black-24-dp.svg"
                loading="lazy"
                width={35}
                height={35}
                alt="Close"
                className="our-promise-icon"
              />
              <h3 className="headline-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </h3>
              <p className="mb-60">
                Wir glauben, dass Nachhaltigkeit die Regel und nicht die
                Ausnahme sein sollte.
              </p>
            </div>
            <div className="our-promise-spacer" />
            <div className="our-promise-item">
              <img
                src="images/clear-black-24-dp.svg"
                loading="lazy"
                width={35}
                height={35}
                alt="Close"
                className="our-promise-icon"
              />
              <h3 className="headline-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </h3>
              <p className="mb-60">
                Wir glauben, dass Nachhaltigkeit die Regel und nicht die
                Ausnahme sein sollte.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section impact wf-section">
        <div className="container">
          <h2 className="headline-4">Our impact on the world</h2>
        </div>
        <div className="impact-swiper">
          <div className="impact-swiper-mask">
            <div className="impact-swiper-slide">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 67vw, (max-width: 767px) 297.546875px, (max-width: 991px) 39vw, 67vw"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
              <div className="impact-slide-1-container">
                <h3 className="impact-slide-header">
                  1330+
                  <br />
                  Trees planted
                </h3>
                <p>Togehter they cover an area about the size of Austria</p>
              </div>
            </div>
            <div className="impact-swiper-slide _2">
              <div className="impact-slide-2-back-color" />
              <img
                src="images/bitmap-copy-3.jpg"
                loading="lazy"
                alt=""
                className="back-img impact-slide-2"
              />
              <div className="impact-slide-2-content-box">
                <h3 className="impact-slide-header green">32</h3>
                <h3 className="headline-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </h3>
                <p>Togehter they cover an area about the size of Austria</p>
              </div>
              <div className="impact-slide-2-content-box">
                <h3 className="impact-slide-header green">12+</h3>
                <h3 className="headline-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </h3>
                <p>Togehter they cover an area about the size of Austria</p>
              </div>
            </div>
            <div className="impact-swiper-slide">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 67vw, (max-width: 767px) 297.546875px, (max-width: 991px) 39vw, 67vw"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
              <div className="impact-slide-1-container">
                <h3 className="impact-slide-header">
                  1330+
                  <br />
                  Trees planted
                </h3>
                <p>Togehter they cover an area about the size of Austria</p>
              </div>
            </div>
          </div>
          <div className="impact-swiper-nav">
            <div className="impact-swiper-left">
              <img
                src="images/clear-black-24-dp.svg"
                loading="lazy"
                width={24}
                height={24}
                alt="Close"
              />
            </div>
            <div className="impact-swiper-right">
              <img
                src="images/clear-black-24-dp.svg"
                loading="lazy"
                width={24}
                height={24}
                alt="Close"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
