import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "@/slices/categories";

import Select from "@/shared/Input/Select";
import CheckBox from "@/shared/Input/Checkbox";
import Radio from "@/shared/Input/Radio";
import TextInput from "@/shared/Input/Text";
import TextArea from "@/shared/Input/TextArea";
import ErrorInput from "@/shared/Input/Error";
import Button from "@/shared/Button";

import { triggerInput } from "libs/upload";

import { BASE_ROUTE, PRODUCTS } from "../routes";

import {
  getProduct,
  addProduct,
  putProduct,
  uploadFiles,
} from "@/_controllers/product";

import filtersList from "@/_data/filters.json";
import Sizes from "@/_data/sizes.json";
import CountriesList from "@/_data/countries.json";
import CurrenciesList from "@/_data/currencies.json";

import { readFiles } from "@/_methods/files";

import styles from "@/components/SellerBackend/backend.module.scss";
import Products from ".";

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

  const [product, setProduct] = useState({ images: [], filters: {} });
  const [filters, setFilters] = useState({});

  const [files, setFiles] = useState([]);
  const [filesData, setFilesData] = useState();

  const [toggles, setToggles] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(async () => {
    if (!categories || !categories.length) dispatch(fetchCategories());
    const { action, id } = router.query;

    if (action === "edit") {
      const product = await getProduct(id);
      console.log("//", product);
      setProduct(product);
      setFilters(product.filters || {});
    }
  }, []);

  useMemo(async () => {
    const fData = await readFiles(files);
    setFilesData(fData);
  }, [files]);

  useEffect(() => {
    setProduct({ ...product, size: [] });
  }, [toggles.size]);

  const validate = () => {
    const errors = {};

    if (!product.name) errors.name = "Please provide a product name.";
    if (!product.description)
      errors.description = "Please provide product description";
    if (!product.category)
      errors.category = "Please choose a category for the product.";
    if (!product.sustainability || !product.sustainability.length >= 2)
      errors.sustainability =
        "Please choose at least 2 sustainability categories.";

    if (!product.weight) errors.weight = "Product Weight cannot be empty";
    if (!product.price) errors.price = "Product price cannot be empty";

    if (!product.countryOfProduction)
      errors.countryOfProduction = "Please choose a country of production.";

    if (!product.colors)
      errors.colors = "Please choose available colors for the product";

    if (!product.sizes)
      errors.sizes = "Please choose appropriate sizes for the product";

    if (!product.currency)
      errors.currency = "Please choose a suitable currency.";

    if (product.sale && !product.salePrice)
      errors.salePrice = "Please provide the Product price during sale.";

    setErrors(errors);

    if (Object.keys(errors).length) return false;

    return true;
  };

  const handleSave = () => {
    if (!validate()) return;
  };

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

  const handleNext = (e) => {
    save(e);

    router.push(`${BASE_ROUTE + PRODUCTS}?action=add`);
  };

  console.log("Products", product);

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2>Add product</h2>
      </div>

      {/* Add Image Section */}
      <div className="product-add-block">
        <div className="heading-wrapper mb-40">
          <h3>Add Photos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="flex left mb-40">
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
            <div className="mb-40">
              <TextInput
                type="text"
                className="text-field grow w-input"
                maxLength={256}
                placeholder="Product name*"
                value={product.name || ""}
                setValue={(value) => setProduct({ ...product, name: value })}
                error={errors.name}
              />

              <div className="w-tab-pane w--tab-active mb-10">
                <TextArea
                  placeholder="Description (max. XX)"
                  className="text-field area w-input"
                  value={product.description || ""}
                  setValue={(value) =>
                    setProduct({ ...product, description: value })
                  }
                  error={errors.description}
                />
              </div>

              <Select
                choices={categories.map((cat) => cat.name)}
                value={""}
                placeholder={
                  (categories &&
                    categories.reduce((a, c) => {
                      if (c.id === product.category) return a + c.name;

                      return a + "";
                    }, "")) ||
                  "Category"
                }
                setValue={(value) =>
                  setProduct({ ...product, category: categories[value].id })
                }
                error={errors.category}
              />
            </div>

            <div className="mb-40">
              <label className="mb-20">Sustainability</label>
              {filtersList.sustainability &&
                filtersList.sustainability.map((sustain) => {
                  const status =
                    filters.sustainability &&
                    filters.sustainability.includes(sustain);
                  return (
                    <div>
                      <CheckBox
                        text={sustain}
                        value={status}
                        setValue={(value) => {
                          if (!status)
                            setFilters({
                              ...filters,
                              sustainability: [
                                ...(filters.sustainability || []),
                                sustain,
                              ],
                            });
                          else {
                            const index =
                              filters.sustainability &&
                              filters.sustainability.findIndex(
                                (item) => sustain === item
                              );
                            setFilters({
                              ...filters,
                              sustainability: [
                                ...filters.sustainability.slice(0, index),
                                ...filters.sustainability.slice(index + 1),
                              ],
                            });
                          }
                        }}
                      />
                    </div>
                  );
                })}
              {errors.sustainability && (
                <ErrorInput message={errors.sustainability} />
              )}
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
            </div>

            <div className="mb-40">
              <label className="mb-20"> Sizes </label>
              <div className="mb-20 ml-40">
                <div>
                  <div className="mb-10">
                    <Radio
                      text="Clothing Sizes (S, M, L, etc.)"
                      value={toggles.size === "clothing"}
                      setValue={(value) =>
                        value
                          ? setToggles({ ...toggles, size: "clothing" })
                          : setToggles({ ...toggles, size: null })
                      }
                    />
                  </div>
                  <div>
                    {toggles.size === "clothing" &&
                      Sizes &&
                      Sizes.clothing.map((size) => (
                        <CheckBox
                          text={size}
                          value={product.sizes && product.sizes.includes(size)}
                          setValue={(value) => {
                            if (value) {
                              setProduct({
                                ...product,
                                sizes: [...(product.sizes || []), size],
                              });
                            } else {
                              const index =
                                product.sizes &&
                                product.sizes.findIndex((s) => s === size);

                              setProducts({
                                ...product,
                                sizes: [
                                  ...product.sizes.slice(0, index),
                                  ...product.sizes(index + 1),
                                ],
                              });
                            }
                          }}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <div className="mb-10">
                    <Radio
                      text="Shoe Sizes (UK)"
                      value={toggles.size === "shoe"}
                      setValue={(value) =>
                        value
                          ? setToggles({ ...toggles, size: "shoe" })
                          : setToggles({ ...toggles, size: null })
                      }
                    />
                  </div>
                  <div>
                    {toggles.size === "shoe" &&
                      Sizes &&
                      Sizes.shoe.map((size) => (
                        <CheckBox
                          text={size}
                          value={product.sizes && product.sizes.includes(size)}
                          setValue={(value) => {
                            if (value) {
                              setProduct({
                                ...product,
                                sizes: [...(product.sizes || []), size],
                              });
                            } else {
                              const index =
                                product.sizes &&
                                product.sizes.findIndex((s) => s === size);

                              setProducts({
                                ...product,
                                sizes: [
                                  ...product.sizes.slice(0, index),
                                  ...product.sizes(index + 1),
                                ],
                              });
                            }
                          }}
                        />
                      ))}
                  </div>
                </div>
                <div>
                  <Radio
                    text="Not Applicable"
                    value={toggles.size === "none"}
                    setValue={(value) =>
                      value
                        ? setToggles({ ...toggles, size: "none" })
                        : setToggles({ ...toggles, size: null })
                    }
                  />
                </div>
              </div>
              {errors.sizes && <ErrorInput message={errors.sizes} />}
            </div>

            <div className="mb-20">
              <label className="mb-20">Colors</label>
              <div>
                {filtersList.colors &&
                  filtersList.colors.map((color) => (
                    <CheckBox
                      text={color}
                      value={product.colors && product.colors.includes(color)}
                      setValue={(value) => {
                        if (value) {
                          setProduct({
                            ...product,
                            colors: [...(product.colors || []), color],
                          });
                        } else {
                          const index =
                            product.colors &&
                            product.colors.findIndex((c) => c === color);

                          setProduct({
                            ...product,
                            colors: [
                              ...product.colors.slice(0, index),
                              ...product.colors.slice(index + 1),
                            ],
                          });
                        }
                      }}
                    />
                  ))}
              </div>
              {errors.colors && <ErrorInput message={errors.colors} />}
            </div>

            <div className="mb-20">
              <label className="mb-20"> Sale </label>
              <div className="ml-40 flex">
                <Radio
                  text="Sale"
                  value={product.sale}
                  setValue={(value) => setProduct({ ...product, sale: value })}
                />
                {product.sale && (
                  <TextInput
                    placeholder="Sale Price*"
                    value={product.salePrice}
                    setValue={(value) =>
                      setProduct({ ...product, salePrice: value })
                    }
                    error={errors.salePrice}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="product-add-block">
            <div className="heading-wrapper mb-20">
              <h3>Price</h3>
            </div>
            <div className="flex mb-40 flex-gap-20 flex-justify-start">
              <TextInput
                type="text"
                className="text-field w-input"
                placeholder="Product Price*"
                value={product.price || ""}
                setValue={(value) => setProduct({ ...product, price: value })}
                error={errors.price}
              />

              <TextInput
                type="text"
                className="text-field w-input"
                placeholder="Weight (in Kgs)"
                value={product.weight || ""}
                setValue={(value) => setProduct({ ...product, weight: value })}
                error={errors.weight}
              />

              <Select
                choices={CurrenciesList}
                placeholder="Currency"
                value={product.currency}
                setValue={(value) =>
                  setProduct({ ...product, currency: value })
                }
                error={errors.currency}
              />

              <Select
                choices={CountriesList}
                placeholder="Country of Production"
                value={product.countryOfProduction}
                setValue={(value) =>
                  setProduct({ ...product, countryOfProduction: value })
                }
                error={errors.countryOfProduction}
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

          <Button
            name="Save"
            type="secondary"
            caps={true}
            action={handleSave}
          />

          <input
            type="submit"
            value="Next Product"
            className="button blue secondary w-button"
            onClick={handleNext}
          />
        </form>
      </div>
    </div>
  );
};

export default ConfigProduct;
