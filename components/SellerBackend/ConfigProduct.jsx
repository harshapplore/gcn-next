import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "slices/categories";

import { Select, Select2 } from "shared/Select";
import CheckBox from "shared/Checkbox";
import { triggerInput } from "libs/upload";
import { authAxios } from "setups/axios";

import { BASE_ROUTE, PRODUCTS } from "./routes";

import {
  getProduct,
  addProduct,
  putProduct,
  uploadFiles,
} from "controllers/product";

const ProductImage = ({ url }) => {
  return (
    <div className="shop-img-link grab">
      <img
        src={url}
        loading="lazy"
        sizes="(max-width: 479px) 42vw, 150px"
        alt="Product Image"
        className="back-img"
      />
    </div>
  );
};

const ConfigProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { seller } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.categories);

  const { action, id } = router.query;

  const inputRef = useRef();
  const multiInputRef = useRef();

  const [product, setProduct] = useState({});
  const [filters, setFilters] = useState({});

  const [activeDescriptionTab, setActiveDescriptionTab] = useState(1);

  const [files, setFiles] = useState([]);
  const [filesData, setFilesData] = useState();

  useEffect(async () => {
    if (!categories || !categories.length) dispatch(fetchCategories());
    const { action, id } = router.query;

    if (action === "edit") {
      const product = await getProduct(id);
      console.log("//", product);
      setProduct(product);
      setFilters(product.filters);
    }
  }, []);

  const readFiles = (files) => {
    const f = files.map((file) => {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);

        reader.onerror = (e) => {
          console.log(e);
          reject("Error Occured while reading file.");
        };

        reader.readAsDataURL(file);
      });
    });

    return Promise.all(f);
  };

  useMemo(async () => {
    const fData = await readFiles(files);
    setFilesData(fData);
  }, [files]);

  const save = async (e) => {
    e.preventDefault();

    const productData = {
      ...product,
      filters,
      shop: seller.shop.id,
      seller: seller.id,
    };

    if (action === "add") {
      const prod = await addProduct(productData);

      if (!files.length) {
        router.push(BASE_ROUTE + PRODUCTS);
        return;
      }

      const uploadedFiles = (await uploadFiles(files)).map((file) => file.id);

      await putProduct(prod.id, {
        images: [...product.images, ...uploadedFiles],
      });

      router.push(BASE_ROUTE + PRODUCTS);
    }

    if (action === "edit") {
      const prod = await putProduct(id, productData);

      if (!files.length) {
        router.push(BASE_ROUTE + PRODUCTS);
        return;
      }

      const uploadedFiles = (await uploadFiles(files)).map((file) => file.id);

      await putProduct(prod.id, {
        images: [...product.images, ...uploadedFiles],
      });

      router.push(BASE_ROUTE + PRODUCTS);
    }
  };

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

          {product.images &&
            product.images.length > 0 &&
            product.images.map((data, index) => (
              <ProductImage key={"image-" + index} url={data.url} />
            ))}

          {filesData &&
            filesData.length > 0 &&
            filesData.map((data, index) => (
              <ProductImage key={"image-" + index} url={data} />
            ))}

          <a
            className="shop-img-link w-inline-block"
            onClick={() => triggerInput(inputRef)}
          >
            <input
              ref={inputRef}
              type="file"
              className="hidden-input"
              onChange={(e) => setFiles([...files, e.target.files[0]])}
            />
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
        <a
          className="button icon blue w-inline-block"
          onClick={() => triggerInput(multiInputRef)}
        >
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
          <input
            ref={multiInputRef}
            type="file"
            multiple
            className="hidden-input"
            onChange={(e) => setFiles([...e.target.files])}
          />
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
              <Select2
                choices={categories.map((cat) => cat.name)}
                value={product.category}
                defaultValue="Category"
                setValue={(value) =>
                  setProduct({ ...product, category: categories[value].id })
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
                  value={product.description || ""}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
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
                  value={product.descriptionInGerman || ""}
                  onChange={(e) =>
                    setProduct({
                      ...product,
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
                  value={product.weight || ""}
                  onChange={(e) =>
                    setProduct({ ...product, weight: e.target.value })
                  }
                />

                <Select
                  defaultValue="Sizes"
                  choices={["First", "Second", "Third"]}
                  value={product.sizes || ""}
                  setValue={(value) => setProduct({ ...product, sizes: value })}
                />

                <Select
                  defaultValue="Colors"
                  choices={["First", "Second", "Third"]}
                  value={product.colors || ""}
                  setValue={(value) =>
                    setProduct({ ...product, colors: value })
                  }
                />
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
                placeholder="Product Price*"
                value={product.price || ""}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
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
            onClick={save}
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
