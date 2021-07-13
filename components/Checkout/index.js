const CheckOut = () => {
  return <>
  <div className="page-section">
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h1>3 items in your cart</h1>
      </div>
      <div className="shop-list mb-60">
        <div className="flex mb-20">
          <h2>Thomas' Soap Shop and other things Inc.</h2>
          <div className="hide-mobile">
            <div className="button secondary">
              <div>terms &amp;&nbsp;conditions</div>
            </div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div className="checkout-product-info">
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-20">
            <img
              src="images/done-black-24-dp.svg"
              loading="lazy"
              alt="Checkmark"
            />
            <div className="item-additional-info">In Stock</div>
            <div className="form-block w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
              >
                <select
                  id="field"
                  name="field"
                  className="text-field select cart w-select"
                >
                  <option value>1</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="subtotal-wrapper">
          <div className="medium">Subtotal: € 129,50</div>
          <div>Delivery: € 18,90</div>
          <div>2-3 days</div>
        </div>
      </div>
      <div className="shop-list">
        <div className="flex mb-40">
          <h2>Shop #2</h2>
          <div className="hide-mobile">
            <div className="button secondary">
              <div>terms &amp;&nbsp;conditions</div>
            </div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div className="checkout-product-info">
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-20">
            <img
              src="images/done-black-24-dp.svg"
              loading="lazy"
              alt="Checkmark"
            />
            <div className="item-additional-info">In Stock</div>
            <div className="form-block w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
              >
                <select
                  id="field-5"
                  name="field-5"
                  data-name="Field 5"
                  className="text-field select cart w-select"
                >
                  <option value>1</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div className="checkout-product-info">
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-20">
            <img
              src="images/done-black-24-dp.svg"
              loading="lazy"
              alt="Checkmark"
            />
            <div className="item-additional-info">In Stock</div>
            <div className="form-block w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
              >
                <select
                  id="field-5"
                  name="field-5"
                  data-name="Field 5"
                  className="text-field select cart w-select"
                >
                  <option value>1</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div className="checkout-product-info">
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-20">
            <img
              src="images/done-black-24-dp.svg"
              loading="lazy"
              alt="Checkmark"
            />
            <div className="item-additional-info">In Stock</div>
            <div className="form-block w-form">
              <form
                id="email-form-3"
                name="email-form-3"
                data-name="Email Form 3"
              >
                <select
                  id="field-5"
                  name="field-5"
                  data-name="Field 5"
                  className="text-field select cart w-select"
                >
                  <option value>1</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="subtotal-wrapper">
          <div className="medium">Subtotal: € 1.229,50</div>
          <div>Delivery: € 18,90</div>
          <div>2-3 days</div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-section">
    <div className="container">
      <div className="flex mb-40">
        <div className="checkout-additional">
          <div className="checkout-switch-wrapper">
            <a href="#" className="pickup-switch-wrapper active w-inline-block">
              <div className="switch-switcher" />
            </a>
            <div className="checkout-switch-text">CO2 compensation</div>
          </div>
          <div className="checkout-switch-wrapper">
            <a href="#" className="pickup-switch-wrapper w-inline-block">
              <div className="switch-switcher" />
            </a>
            <div className="checkout-switch-text">Pick up</div>
          </div>
          <div className="checkout-switch-wrapper mb-40">
            <a href="#" className="pickup-switch-wrapper w-inline-block">
              <div className="switch-switcher" />
            </a>
            <div className="checkout-switch-text">This order is a gift</div>
          </div>
          <div className="w-form">
            <form
              id="email-form-4"
              name="email-form-4"
              data-name="Email Form 4"
            >
              <textarea
                placeholder="Add text"
                maxLength={5000}
                id="node"
                data-name
                className="text-field area w-input"
                defaultValue={""}
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Coupon Code"
                id="node-2"
                required
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="total-wrapper">
          <div className="medium">Total: € 129,50</div>
          <div>Delivery: € 18,90</div>
          <div>CO2 compensation (345)km: € 4,80</div>
        </div>
      </div>
      <div className="center">
        <div className="button mx-10">
          <div>Continue as guest</div>
        </div>
        <div className="button blue secondary mx-10">
          <div>Sign in</div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-section">
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Shipping</h2>
      </div>
      <div className="flex mb-40">
        <div className="flex-child-45">
          <h3>Billing address</h3>
          <div className="w-form">
            <form
              id="email-form-6"
              name="email-form-6"
              data-name="Email Form 6"
            >
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Full name*"
                id="node-3"
                required
              />
              <input
                type="text"
                maxLength={256}
                data-name
                placeholder="Company"
                id="node-3"
                className="text-field w-input"
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Street address*"
                id="node-3"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Postal code*"
                id="node-3"
                required
              />
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="City*"
                id="node-3"
                required
              />
              <select
                id="field-4"
                name="field-4"
                className="text-field select mb-10 w-select"
              >
                <option value>Country</option>
                <option value="First">First Choice</option>
                <option value="Second">Second Choice</option>
                <option value="Third">Third Choice</option>
              </select>
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                data-name
                placeholder="Email*"
                id="node-3"
                required
              />
              <input
                type="text"
                maxLength={256}
                data-name
                placeholder="Phone"
                id="node-3"
                className="text-field w-input"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="flex-child-45">
          <h3>Delivery address</h3>
          <div className="w-form">
            <form
              id="email-form-5"
              name="email-form-5"
              data-name="Email Form 5"
            >
              <label className="w-checkbox checkbox-field">
                <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
                <input
                  type="checkbox"
                  id="checkbox-3"
                  name="checkbox-3"
                  data-name="Checkbox 3"
                  style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                />
                <span className="checkbox-label w-form-label">
                  Same as Billing address
                </span>
              </label>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="inline w-form">
          <form id="email-form-7" name="email-form-7" data-name="Email Form 7">
            <label className="w-checkbox checkbox-field">
              <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" />
              <input
                type="checkbox"
                id="checkbox-3"
                name="checkbox-3"
                data-name="Checkbox 3"
                style={{ opacity: 0, position: "absolute", zIndex: -1 }}
              />
              <span className="checkbox-label w-form-label">
                Save for next order
              </span>
            </label>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div className="button">
          <div>Continue as guest</div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-section">
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Payment</h2>
      </div>
      <div className="w-form">
        <form
          id="email-form-3"
          name="email-form-3"
          data-name="Email Form 3"
          className="center"
        >
          <div className="payment-wrapper">
            <div className="payment-item">
              <div className="payment-left">
                <img
                  src="images/fill-2.png"
                  loading="lazy"
                  alt="Green Cloud 9 Logo"
                  className="payment-icon"
                />
                <div className="inline-text">
                  <label className="checkbox-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input" />
                    <input
                      type="radio"
                      data-name="Radio"
                      id="radio"
                      name="radio"
                      defaultValue="Radio"
                      required
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span className="checkbox-label w-form-label">
                      Credit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-left">
                <img
                  src="images/fill-2.png"
                  loading="lazy"
                  alt="Green Cloud 9 Logo"
                  className="payment-icon"
                />
                <div className="inline-text">
                  <label className="checkbox-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input" />
                    <input
                      type="radio"
                      data-name="Radio 3"
                      id="radio-3"
                      name="radio"
                      defaultValue="Radio"
                      required
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span className="checkbox-label w-form-label">
                      Credit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-left">
                <img
                  src="images/fill-2.png"
                  loading="lazy"
                  alt="Green Cloud 9 Logo"
                  className="payment-icon"
                />
                <div className="inline-text">
                  <label className="checkbox-field w-radio">
                    <div className="w-form-formradioinput w-form-formradioinput--inputType-custom checkbox w-radio-input" />
                    <input
                      type="radio"
                      data-name="Radio 2"
                      id="radio-2"
                      name="radio"
                      defaultValue="Radio"
                      required
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span className="checkbox-label w-form-label">
                      Credit Card
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <input
              type="submit"
              defaultValue="Check your order"
              data-wait="Please wait..."
              className="button blue w-button"
            />
          </div>
        </form>
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="page-section">
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Check your order</h2>
      </div>
      <div className="shop-list mb-60">
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div>
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div>
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="flex mb-20">
          <div className="flex">
            <div className="checkout-shop-item-img">
              <img
                src="images/bild-header2x.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 120px"
                srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
                alt="Handcrafted stuff"
                className="back-img"
              />
            </div>
            <div>
              <h3>Long Item Name</h3>
              <div className="overline-text pull-up">By Seller</div>
              <div>Size: S</div>
            </div>
          </div>
          <div className="pt-30">
            <div className="shop-product-price">€ 129,50</div>
          </div>
        </div>
        <div className="total-wrapper">
          <div className="medium">Total: € 429,50</div>
          <div>Delivery: € 18,90</div>
          <div>CO2 compensation (345)km: € 4,80</div>
        </div>
      </div>
      <div className="center">
        <div className="button">order now</div>
      </div>
    </div>
  </div>
  <div className="page-section">
    <div className="container">
      <div className="heading-wrapper mb-40">
        <h2>Thank you for your order</h2>
      </div>
      <div className="mb-40 w-richtext">
        <h2>What’s a Rich Text element?</h2>
        <p>
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place instead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>
        <h4>Static and dynamic content editing</h4>
        <p>
          A rich text element can be used with static or dynamic content. For
          static content, just drop it into any page and begin editing. For
          dynamic content, add a rich text field to any collection and then
          connect a rich text element to that field in the settings panel.
          Voila!
        </p>
        <h4>How to customize formatting for each rich text</h4>
        <p>
          Headings, paragraphs, blockquotes, figures, images, and figure
          captions can all be styled after a class is added to the rich text
          element using the "When inside of" nested selector system.
        </p>
      </div>
      <div className="center">
        <div className="button mx-10">
          <div>Continue Shopping</div>
        </div>
        <div className="button blue secondary mx-10">
          <div>See order</div>
        </div>
      </div>
    </div>
  </div>
</>

}

export const Checkout;