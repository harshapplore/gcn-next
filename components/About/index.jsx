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
              </p>
              <p className="lead-text mb-20">
                We make it easy to shop sustainably. Our commitment to transparency means that we bring you sustainable brands and you will know the exact values they represent.
              </p>
              <p className="lead-text mb-20">
                We promote fairness, support local producers, and are champions of replacing wasteful, polluting products with sustainable alternatives.
              </p>
              <p className="lead-text mb-20">
                To learn more about our values and how we run our platform with these in mind, head to the „about us“ page
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
              <p>Trust and Transparency</p>
              <p>Sense of Community and Collaboration</p>
              <p>Empowering</p>
              <p>Changemaker</p>
              <p>Respect for Each Other and for our Planet</p>

            </div>
            <div>
              <h3>Vision / Mission</h3>
              <p><strong>Vision</strong></p>
              <p>We aim to make sustainability mainstream, to achieve a more harmonious balance between humanity and the environment, thus contributing to reaching the Global Sustainable Development Goals</p>
              <p><strong>Mission</strong></p>
              <p>Through our digital marketplace we want to speed up the transition to a fairer and more eco-friendly economy, by replacing unfair, wasteful and polluting products & services with sustainable equivalents.</p>
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
                Sustainable vendors
              </h3>
              <p className="mb-60">
                In our platform you will only find brands that have demonstrated a minimum commitment to sustainability in their business practices. Vendors need to pass a Sustainability Assessment and acknowledge our Code of Conduct and Best Practices before joining the platform
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
                Sustainable Products
              </h3>
              <p className="mb-60">
                Every product sold in Green Cloud Nine will positively impact the environment or society in different ways. You can review our impact areas below.
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
                Sustainable platform
              </h3>
              <p className="mb-60">
                As a company we also strive to be as sustainable as possible. In addition to our Code of Conduct and Best Practices that defines our internal & external working framework, our goal is to become CO2 neutral or negative within the 1st year of operations. The strategic initiatives to achieve that goal will be publicly shared in our yearly Sustainability Report.
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
            {/* <div className="impact-swiper-slide">
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
            </div> */}
          </div>
          {/* <div className="impact-swiper-nav">
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
          </div> */}
        </div>
      </div>
      <div class="container">

        <h2> How to become a vendor </h2>
        <b>#1 Sustainability Assessment </b><p>
          Sustainability is a long-term journey, and we don’t expect you to be there 100%. Yet, we need to understand where you stand, and to join our platform we need a minimum commitment to sustainable business practices.
          Of course, we will share the results of the assessment with you, together with some insights and suggestions to improve.</p>
        <b>#2 Registration</b><p>Once you have passed the assessment, select your pricing plan and create your seller profile with your existing administrative information such as contact details, tax number, payment details, your own Terms &amp; Conditions etc…</p>
        <b>#3 Create your shop</b> <p>Simple &amp; intuitive. Customize your store front with your logo, certifications, photos of your business and a description of your values and processes.</p>
        <b>#4 Add your product listings.</b><p>It is time to upload your products. You can do this manually or use an automated mass upload (csv file). You will have lots of flexibility to display your great products using photos, videos, description, options, etc…</p> <p>Of course, each of your products should also be classified under at least 2 of our Sustainability Impact Areas</p>
        <b>#5 Start Selling</b><p>Orders, payments &amp; notifications are automated and will be displayed in your seller dashboard. You will have a communication channel to your customers to keep them updated or resolve issues related to their order.</p>
        <b>#6 Packaging &amp; Shipping </b><p>At the beginning You will pack and ship your orders just as you do it today. Our requirement is that you use sustainable packaging alternatives, and that the delivery is CO2 neutral. Because we know offsetting CO2 is still not easy for many vendors, we will include the option at checkout, for the customer to add a small fee to their order to offset the emissions of the delivery. Customers will also be able to choose the type of project that will be supported using that fee.</p><b>But later on…
        </b><p>We are already working on a centralised sustainable logistic solution that will make it easier and more cost efficient for you to sell across Europe. More to come on this!</p> <b>#7 Payment processing</b><p>We use Stripe as a payment platform. You will have to create a free account with Stripe so we can manage your payments. From there, you will decide which payment methods you accept. </p>
        <p>
          → Text
          <our promise="">
            → Text
            <sell products="">
              → Text
              <buy products="">
                → Text
              </buy></sell></our></p><br />
        <h2>Sustainability</h2><p>There is not a unique, universal definition of what makes a product sustainable, rather every consumer understands sustainability differently.
          To help consumers make informed choices, and to be fair and consistent to our vendors, all products sold in our marketplace are classified under 10 sustainability categories or impact areas.</p>
        <p>Each product must belong to at least 2 of the categories, but will often comply with several more. Customers will be able to search by sustainable criteria and decide what is the best option for them.</p><p>
          The more criteria a product meets, the more sustainable it is.
          For some of our 10 sustainability categories, holding a recognised certificate or meeting additional conditions is mandatory. For the rest, vendors are required to describe their production processes in detail to demonstrate their commitment to sustainability.</p><p>Our 10 Sustainability product categories </p>
        <ul>
          <li>🌿 Organic Raw Materials</li>
          <li>🌿 Durable &amp; extended life</li>
          <li>🌿 Resource &amp; Energy efficient. Reduced CO2 impact</li>
          <li>🌿 Pollution-reduced production</li>
          <li>🌿 Fair &amp; social</li>
          <li>🌿 Vegan</li>
          <li>🌿 Produced Regionally</li>
          <li>🌿 Recyclable, Compostable, Biodegradable</li>
          <li>🌿 Recycled, Upcycled, Second-Hand</li>
          <li>🌿 Handmade &amp; Made to order </li>
          <li>🌿 Organic Raw Materials</li>
        </ul>
        <p>
          The first step for a sustainable product is a sustainable raw material.
          Organically produced materials contribute to the long term preservation of resources by effectively reducing gases and the usage of damaging chemicals (pesticides, fertilisers...) that contribute to global warming.</p>
        <p>Products in this category must be backed by a relevant recognised certification which will be displayed in the vendor shop.</p>
        <p>Within the EU, several seals and standards exist, such as the EU standard for organic farming or the GOTS (Global Organic Textile Standards). To satisfy consumer's demand for transparency, vendors can also provide additional details about their materials supply chain in their shop.</p>

        <b>🌿 Durability and extended life</b><p>Single-use, short-lived products and unethical planned-obsolescence practices create unnecessary residual waste and lead to the misuse of valuable resources and energy.
          In this case, we support quality instead of quantity. Products in this category are made from naturally robust and durable materials and are processed through qualitative sustainable manufacturing, allowing them to be used for much longer periods of time.
          Producers stand behind their products either with guarantee periods longer than the standard required by law, with the option to repair or mend them or with replaceable spare parts for high wear components</p>

        <b>🌿 Resource &amp; Energy efficient. Reduced CO2 impact</b><p>Our natural resources are limited and that is why using them efficiently is key for a long-term balance between economy and ecology.
          Products in this category have been produced considering different optimised processes, such as the usage of recycled / waste raw materials, water or renewable energy sources.
          Through a conscious environmental management of the production, these products help reduce the emissions of greenhouse gases and are more environmentally friendly. In the EU, the EMAS (Eco-management &amp; Audit Scheme) is a relevant certificate in this area.
          Another important angle to this category is the efficiency of the end product itself. For example electronics or appliances with high energy efficiency or low water consumption, fall under this category and must display the corresponding certification.</p>

        <b>🌿 Pollution-reduced production</b><p>A pollutant is a chemical or biological substance that, when released in water, air or land can harm full ecosystems including plants, animals and humans.
          These harmful substances can be used as components during the manufacturing process, they can be generated and released during the production and in some cases, they can be part of the final product (microplastics, preservatives, parabens, colour dyes…)
          This category label will be particularly relevant for children and allergy sufferers.
          Cosmetics or other chemical-based goods require transparent and understandable information in this section.
          Products labelled under this category, are either free of pollutants or low-pollutant in their production &amp; components.  Cosmetics, foods and goods that could potentially damage the ecosystem (such as paints, varnishes, isolation materials...) must also display their certification.</p>

        <b>🌿 Fair &amp; Social</b><p>
          Fair and social category is particularly relevant to support small producers in developing countries to ensure that their products are purchased at a fair price.
          This allows them to maintain a sustainable production, decent employment conditions &amp; wages, and good social standards (such as the prohibition of child labour).
          Social also refers to the actual engagement of the company in the community in which it operates. It can include support or participation in local social projects, or work integration of disadvantaged minorities such as disabled or immigrant communities.
          Existing certifications (e.g.: Fairtrade seal) can be displayed in the vendor's shop. If none is available, the vendor must describe the fair &amp; social nature of their business in a clear and understandable way.</p>
        <b>🌿 Vegan</b>
        <p>In line with the vegan philosophy, products under this category will not contain any component originating or deriving from animals. That includes any animal-based products such as beeswax or wool.</p>
        <b>🌿 Regional Production</b><p>
          Regionality is an important element within a sustainable economy. It supports the survival and growth of small and medium sized companies, promotes cultural individuality. It can also have a positive impact on environmental footprint through the reduction of transport.
          To include products in this category, sellers must ensure that their whole production takes place within 500 km of their company site. That includes all processes, from the supply of raw materials, up to the manufacturing and packaging.
          We also strongly encourage customers to purchase products locally. Unfortunately, that is not always possible and for those cases, we offer shoppers the option to make their order CO2 neutral and support internationally certified projects that maximize positive impacts for both the planet and local communities.</p>
        <b>🌿 Recyclable / Compostable / Biodegradable</b><p>
          Products are recyclable, compostable or biodegradable if at the end of their useful lives, do not simply become useless waste and instead, become a resource again. instead of turning into useless waste they become a resource again. This could be either as a raw material for other products or by being returned to the earth, as they decompose and turn into nutrients for plants and animals.
          For this to happen, they should only contain safe, non-toxic ingredients or additives that do not contaminate the end-product so it can be returned to the ecological system.
          The Cradle to Cradle certification, for example, is globally recognised as a measure for products in this category.</p>
        <b>🌿 Recycled, Upcycled, Second-Hand</b><p>
          Under the recycled and upcycled product category, we understand all products that are using existing waste or already used materials to produce new ones.
          Recycling usually involves the destruction of the old material (e.g.: melting glass bottles to make new ones) while, upcycling is normally a more creative process, that using a variety of techniques can transform waste into something new of higher value.
          In second-hand, a product is brought again into the value chain and can be re-sold and re-use.
          In all cases, natural resources (raw materials, water, energy...) are saved and waste is reduced, having a very positive impact on the environment.</p>
        <b>🌿 Handmade / Made to order</b><p>Products in this category have been produced by craftspeople and artisans all over the world, full of cultural richness and frequently using traditional techniques.
          Each piece will be unique and often made to order, challenging the standardisation of mass production that dominates our current economy.
          These products not only support local communities and increase appreciation for human craftsmanship but also contribute to the reduction of waste.</p></div>

      <Footer />
    </>
  );
};

export default About;
