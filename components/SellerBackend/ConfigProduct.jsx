import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Select from "shared/Select";
import CheckBox from "shared/Checkbox";
import { triggerInput } from "libs/upload";

const ProductImage = ({url}) => {
  return <div className="shop-img-link grab">
  <img
    src={url}
    loading="lazy"
    sizes="(max-width: 479px) 42vw, 150px"
    alt="Handcrafted stuff"
    className="back-img"
  />
</div>
}


const ConfigProduct = ({ action, id }) => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.user);

  const [product, setProduct] = useState({});
  const [filters, setFilters] = useState({});

  const [activeDescriptionTab, setActiveDescriptionTab] = useState(1);

  useEffect(() => {
    console.log(filters, product);
  }, [product, filters]);

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Add product</h2>
      </div>

      {/* Add Image Section */}
      <div className="product-add-block">
        <div className="heading-wrapper mb-40">
          <h3>Add Photos &amp; Videos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="flex left mb-40">
          {/* <div className="shop-img-link grab">
            <img
              src="/images/bild-header2x.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 42vw, 150px"
              // srcSet="images/bild-header2x-p-500.jpeg 500w, images/bild-header2x-p-800.jpeg 800w, images/bild-header2x-p-2000.jpeg 2000w, images/bild-header2x-p-2600.jpeg 2600w, images/bild-header2x.jpg 2880w"
              alt="Handcrafted stuff"
              className="back-img"
            />
            <div className="check-floater">
              <img
                src="/images/check-circle-black-24-dp.svg"
                loading="lazy"
                width={24}
                alt=""
              />
              <div className="inline-text">Main</div>
            </div>
          </div>
           */}
          
          
          <a className="shop-img-link w-inline-block">
            <div className="new-img-wrapper">
              <img
                src="/images/expand-more-black-24-dp.svg"
                loading="lazy"
                alt="icon"
                className="mb-10"
              />
              <div>Add image</div>
            </div>
          </a>
        </div>
        <a className="button icon blue w-inline-block">
          <div className="button-icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height={24} width={24} />
              </g>
              <g>
                <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
              </g>
            </svg>
          </div>
          <div className="text-block">Bulk Upload</div>
        </a>
      </div>
      
      
      <div className="w-form">
        <form>

          {/* Description Section */}
          <div className="product-add-block">
            <div className="heading-wrapper mb-20">
              <h3>Description</h3>
            </div>
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field grow w-input"
                maxLength={256}
                placeholder="Product name*"
                value={product.name || ""}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <Select
                choices={["Category 1", "Category 2", "Category 3"]}
                value={product.category}
                defaultValue="Category"
                setValue={(value) =>
                  setProduct({ ...product, category: value })
                }
              />

              <Select
                choices={[
                  "Sustain One",
                  "Sustain Two",
                  "Sustain Three",
                  "Sustain Four",
                ]}
                value={product.sustainability}
                defaultValue={"Sustainability"}
                setValue={(value) =>
                  setProduct({ ...product, sustainability: value })
                }
              />
            </div>
            <div className="mb-40">
              <label htmlFor="name" className="mb-20">
                Filters
              </label>

              <CheckBox
                text="For Him"
                value={filters.forHim}
                setValue={(value) => setFilters({ ...filters, forHim: value })}
              />
              <CheckBox
                text="For Her"
                value={filters.forHer}
                setValue={(value) => setFilters({ ...filters, forHer: value })}
              />
              <CheckBox
                text="For Children"
                value={filters.forChildren}
                setValue={(value) =>
                  setFilters({ ...filters, forChildren: value })
                }
              />
              <CheckBox
                text="For Babies"
                value={filters.forBabies}
                setValue={(value) =>
                  setFilters({ ...filters, forBabies: value })
                }
              />
              <CheckBox
                text="Sale"
                value={filters.onSale}
                setValue={(value) => setFilters({ ...filters, onSale: value })}
              />
            </div>
            <div className="tabs-menu">
              <div
                className={
                  "terms-lang" + (activeDescriptionTab === 1 ? " active" : "")
                }
                onClick={() => setActiveDescriptionTab(1)}
              >
                <div>German</div>
              </div>
              <div
                className={
                  "terms-lang" + (activeDescriptionTab === 2 ? " active" : "")
                }
                onClick={() => setActiveDescriptionTab(2)}
              >
                <div>English</div>
              </div>
            </div>
            <div className="mb-20">
              <div
                className={
                  "w-tab-pane" +
                  (activeDescriptionTab === 1 ? " w--tab-active" : "")
                }
              >
                <textarea
                  placeholder="Description (max. XX)"
                  maxLength={5000}
                  required
                  className="text-field area w-input"
                  onChange={(e) =>
                    setProduct({ ...data, description: e.target.value })
                  }
                />
              </div>
              <div
                className={
                  "w-tab-pane" +
                  (activeDescriptionTab === 2 ? " w--tab-active" : "")
                }
              >
                <textarea
                  placeholder="Kurze Beschreibung (max. XX)"
                  maxLength={5000}
                  className="text-field area w-input"
                  onChange={(e) =>
                    setProduct({
                      ...data,
                      descriptionInGerman: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex">
                <Select
                  choices={[]}
                  defaultValue="Country of Production"
                  value={product.countryOfProduction}
                  setValue={(value) =>
                    setProduct({ ...product, countryOfProduction: value })
                  }
                />

                <input
                  type="text"
                  className="text-field w-input"
                  maxLength={256}
                  placeholder="Weight (in Kgs)"
                  required
                  value={product.weight}
                  onChange={(e) => setProduct(e.target.value)}
                />

                <div className="select-wrapper">
                  <select
                    name="Select-3"
                    data-name="Select 3"
                    id="Select-3"
                    required
                    className="text-field pills w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
                <div className="select-wrapper">
                  <select
                    name="Select-3"
                    data-name="Select 3"
                    id="Select-3"
                    required
                    className="text-field pills w-select"
                  >
                    <option value>Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
              </div>
            </div>

            <CheckBox
              text="Personalization Available"
              value={filters.personalizationAvailable}
              setValue={(value) =>
                setFilters({ ...filters, personalizationAvailable: value })
              }
            />
          </div>




          
          {/* Price Section */}
          <div className="product-add-block">
            <div className="heading-wrapper mb-20">
              <h3>Price</h3>
            </div>
            <div className="flex mb-40">
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                name="field-5"
                data-name="Field 5"
                placeholder="Product Price*"
                id="field-5"
                required
              />
              <Select
                choices={["Euro"]}
                defaultValue="Currency"
                value={product.currency}
                setValue={(value) =>
                  setProduct({ ...product, currency: value })
                }
              />
            </div>

            <CheckBox
              text="In Stock"
              value={filters.inStock}
              setValue={(value) => setFilters({ ...filters, inStock: value })}
            />

            <CheckBox
              text="Pick Up Available"
              value={filters.pickUpAvailable}
              setValue={(value) =>
                setFilters({ ...filters, pickUpAvailable: value })
              }
            />
          </div>
          
          <input
            type="submit"
            value="Save"
            className="button blue mr-10 w-button"
          />
          <input
            type="submit"
            value="Save & Add New Product"
            className="button blue secondary w-button"
          />
        </form>
      </div>
    </div>
  );
};

export default ConfigProduct;
