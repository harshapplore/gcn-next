const OrderHistory = () => {
  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Order History</h2>
        <div className="overline-text">30 Products</div>
      </div>
      <div className="w-form">
        <form id="email-form-4" name="email-form-4" data-name="Email Form 4">
          <div className="order-wrapper">
            <div className="order-item">
              <div className="date-row">
                <div>12.12.2012</div>
              </div>
              <div className="id-row">
                <div>#231245213</div>
              </div>
              <div className="state-row big">
                <select
                  id="field-6"
                  name="field-6"
                  className="text-field select state w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
              <div className="price-row">
                <div>€259,99</div>
              </div>
              <div className="button-row">
                <a href="#" className="button w-button">
                  Details
                </a>
              </div>
            </div>
            <div className="order-item">
              <div className="date-row">
                <div>12.03.2021</div>
              </div>
              <div className="id-row">
                <div>#4325141324</div>
              </div>
              <div className="state-row big">
                <select
                  id="field-6"
                  name="field-6"
                  className="text-field select state w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
              <div className="price-row">
                <div>€419,99</div>
              </div>
              <div className="button-row">
                <a href="#" className="button w-button">
                  Details
                </a>
              </div>
            </div>
            <div className="order-item">
              <div className="date-row">
                <div>12.08.2012</div>
              </div>
              <div className="id-row">
                <div>#23415234</div>
              </div>
              <div className="state-row big">
                <select
                  id="field-6"
                  name="field-6"
                  className="text-field select state w-select"
                >
                  <option value>Select one...</option>
                  <option value="First">First Choice</option>
                  <option value="Second">Second Choice</option>
                  <option value="Third">Third Choice</option>
                </select>
              </div>
              <div className="price-row">
                <div>€1.259,99</div>
              </div>
              <div className="button-row">
                <a href="#" className="button w-button">
                  Details
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderHistory;
