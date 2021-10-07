import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { useImageInput, useMultiImageInput } from "@/_hooks";

import { fetchCategories } from "@/slices/categories";

import Select from "@/shared/Input/Select";
import CheckBox from "@/shared/Input/Checkbox";
import Radio from "@/shared/Input/Radio";
import TextInput from "@/shared/Input/Text";
import TextArea from "@/shared/Input/TextArea";
import ErrorInput from "@/shared/Input/Error";
import Button, { OutlinedButton } from "@/shared/Button";

import { triggerInput } from "libs/upload";

import { ADD_ACTION, BASE_ROUTE, PRODUCTS } from "../routes";

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

const ProductImage2 = ({ url, isMain, setMain, removeImage }) => {
  return (
    <div>
      <div className="shop-img-link">
        <a className="shop-delete w-inline-block cursor" onClick={removeImage}>
          <img src="/images/clear-black-24-dp.svg" loading="lazy" alt="Close" />
        </a>
        <img
          src={url}
          loading="lazy"
          sizes="(max-width: 479px) 46vw, 150px"
          alt="Handcrafted stuff"
          className="back-img"
        />
        <CheckBox
          type="secondary"
          text="Main"
          value={isMain}
          setValue={setMain}
        />
      </div>
    </div>
  );
};

const AddImageBlock = ({
  product,
  setProduct,
  filesData,
  setFilesData,
  main,
  setMain,
}) => {
  const { ref: inputRef, ...imageData } = useImageInput();
  const [imageDataTracker, setImageDataTracker] = useState(imageData);

  const {
    ref: multiInputRef,
    data: imagesData,
    dataRef,
  } = useMultiImageInput();

  const [error, setError] = useState("");

  console.log(imageData);

  useEffect(() => {
    if (!imageData.url) return;

    if (!(imageData.width >= 512 && imageData.height >= 512)) {
      setError(
        "Product Image should be greater than 512 pixels on both sides."
      );

      setTimeout(() => setError(""), 5000);
      return;
    }

    if (imageData.size > 5240000) {
      setError("Product Image cannot be larger than 1 mb.");
      setTimeout(() => setError(""), 5000);
      return;
    }

    setImageDataTracker(imageData);
    setFilesData([...(filesData || []), imageData]);
  }, [JSON.stringify(imageData)]);

  useEffect(() => {
    if (!imagesData.length) return;

    const imagesDataFiltered = imagesData.filter(
      (image) => image.height > 512 && image.width > 512 && image.size < 5240000
    );

    setFilesData([...filesData, ...imagesData]);
  }, [JSON.stringify(imagesData)]);

  return (
    <div className="product-add-block">
      <div className="heading-wrapper mb-40">
        <h3>Add Photos</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
          <br /> <br />
          <li> Image size should be less than 1 mb </li>
          <li> Image should be greater than 512 pixels on both sides. </li>
        </p>
      </div>

      <div className="flex left mb-40">
        {product.images &&
          product.images.length > 0 &&
          product.images.map((data, index) => (
            <ProductImage2
              key={"image-" + index}
              url={data.url}
              removeImage={() =>
                setProduct({
                  ...product,
                  images: [
                    ...product.images.slice(0, index),
                    ...product.images.slice(index + 1),
                  ],
                })
              }
              isMain={main.type === "image" && main.index === index}
              setMain={() =>
                setMain({
                  type: "image",
                  index,
                })
              }
            />
          ))}

        {filesData &&
          filesData.length > 0 &&
          filesData.map((data, index) => (
            <ProductImage2
              key={"image-" + index}
              url={data.url}
              removeImage={() =>
                setFilesData([
                  ...filesData.slice(0, index),
                  ...filesData.slice(index + 1),
                ])
              }
              isMain={main.type === "file" && main.index === index}
              setMain={() => setMain({ type: "file", index })}
            />
          ))}

        <a
          className="shop-img-link w-inline-block"
          onClick={() => triggerInput(inputRef)}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden-input"
            // onChange={(e) => setFiles([...files, e.target.files[0]])}
          />
          <div className="new-img-wrapper cursor">
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

      {error && (
        <div className="mb-10">
          {" "}
          <ErrorInput message={error} />{" "}
        </div>
      )}

      <a
        className="button icon blue w-inline-block mb-10"
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
        />
        <div className="text-block">Bulk Upload</div>
      </a>
    </div>
  );
};

const ConfigProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { seller } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.categories);

  const { action, id } = router.query;

  const [product, setProduct] = useState({ images: [], filters: {} });
  const [filters, setFilters] = useState({});

  const [filesData, setFilesData] = useState();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState({});

  const [main, setMain] = useState({});

  console.log("Product", product);

  useEffect(() => {
    if (!product.main) return;

    const index = product.images.findIndex(
      (image) => product.main.id === image.id
    );

    console.log("Index", index);

    setMain({ type: "image", index });
  }, [product]);

  useEffect(async () => {
    if (!categories || !categories.length) dispatch(fetchCategories());
    const { action, id } = router.query;

    if (action === "edit") {
      const product = await getProduct(id);
      setProduct(product);
      setFilters(product.filters || {});
    }
  }, []);

  useEffect(() => {
    if (loading.save === false) router.push(BASE_ROUTE + PRODUCTS);

    if (loading.next === false) {
      location.reload();
    }
  }, [loading]);

  const validate = () => {
    const errors = {};

    if (!product.name) errors.name = "Please provide a product name.";
    // if (!product.images.length) errors.images = "Please provide a product Images.";
    // console.log(product.images)
    if (!product.description)
      errors.description = "Please provide product description";
    if (!product.category)
      errors.category = "Please choose a category for the product.";
    if (!product.sustainability || product.sustainability.length < 2)
      errors.sustainability =
        "Please choose at least 2 sustainability categories.";

    if (!product.weight) errors.weight = "Product Weight cannot be empty";
    if (!product.price) errors.price = "Product price cannot be empty";

    if (!product.countryOfProduction)
      errors.countryOfProduction = "Please choose a country of production.";

    if (!product.colors)
      errors.colors = "Please choose available colors for the product";

    if (!product.sizes && product.sizesCategory != "none")
      errors.sizes = "Please choose appropriate sizes for the product";

    if (!product.currency)
      errors.currency = "Please choose a suitable currency.";

    if (!product.tags || !product.tags.length)
      errors.tags = "Please choose suitable tag filters for your product.";

    if (product.sale && !product.salePrice)
      errors.salePrice = "Please provide the Product price during sale.";

    if (product.salePrice && product.salePrice > product.price)
      errors.salePrice = "Sale price cannot be more than regular price.";

    if (action === "add" && !filesData)
      errors.images = "You must provide at least one product image.";
    setErrors(errors); 
    console.log(errors)

    if (Object.keys(errors).length) return false;

    return true;
  };

  const save = async () => {
    const productData = {
      ...product,
      ...filters,
      shop: seller.shop.id,
      seller: seller.id,
    };

    const fData = filesData && filesData.map((file) => file.file);

    const uploadedFiles =
      fData && fData.length
        ? (await uploadFiles(fData)).map((file) => file.id)
        : [];

    if (action === "add") {
      await addProduct({
        ...productData,
        main: main.index ? uploadedFiles[main.index] : uploadedFiles[0],
        images: uploadedFiles,
      });
    } else if (action === "edit") {
      console.log("=>", uploadedFiles[main.index]);

      await putProduct(product.id, {
        ...productData,
        main:
          main.type === "image"
            ? product.images[main.index]
            : main.index
            ? uploadedFiles[main.index]
            : uploadedFiles[0],
        images: [...product.images, ...uploadedFiles],
      });
    }

    return true;
  };

  const handleSave = async () => {
    if (!validate()) return;

    setLoading({ save: true });

    await save();

    setLoading({ save: false });
  };

  const handleNext = async () => {
    if (!validate()) return;

    setLoading({ next: true });

    await save();

    setLoading({ next: false });
  };

  const updateTags = (state, tag) => {
    if (state) setProduct({ ...product, tags: [...(product.tags || []), tag] });
    else {
      setProduct({
        ...product,
        tags: product.tags.filter((tagg) => tagg != tag),
      });
    }
  };

  return (
    <div className="dynamic-content">
      <div className="heading-wrapper mb-40">
        <h2> Add product </h2>
      </div>

      <AddImageBlock
        product={product}
        setProduct={setProduct}
        filesData={filesData}
        setFilesData={setFilesData}
        main={main}
        setMain={setMain}
      />
      {errors.images && <ErrorInput message={errors.images} />}

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
                value={product.description ||""}
                placeholder={
                  (categories &&
                    categories.reduce((a, c) => {
                      if (c.id === product.category) return a + c.name;

                      return a + "";
                    }, "")) ||
                  "Select Category"
                }
                setValue={(value) =>
                  setProduct({ ...product, category: categories[value].id })
                }
                error={errors.category}
              />
            </div>

            <div className="mb-40">
              <label className="mb-20">Sustainability</label>
              <div className="spacer-10" />
              {filtersList.sustainability &&
                filtersList.sustainability.map((sustain, index) => {
                  const status =
                    product.sustainability &&
                    product.sustainability.includes(sustain);
                  return (
                    <div className="ml-10">
                      <CheckBox
                        key={"sustain-" + index}
                        text={sustain}
                        value={status}
                        setValue={(value) => {
                          if (!status)
                            setProduct({
                              ...product,
                              sustainability: [
                                ...(product.sustainability || []),
                                sustain,
                              ],
                            });
                          else {
                            const index =
                              product.sustainability &&
                              product.sustainability.findIndex(
                                (item) => sustain === item
                              );
                            setProduct({
                              ...product,
                              sustainability: [
                                ...product.sustainability.slice(0, index),
                                ...product.sustainability.slice(index + 1),
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
            <label className="mb-20">Filters</label>

            <div className="mb-40 ml-10">
              <div className="spacer-10" />

              <CheckBox
                text="For Him"
                value={product.tags && product.tags.includes("for-him")}
                setValue={(value) => updateTags(value, "for-him")}
              />
              <CheckBox
                text="For Her"
                value={product.tags && product.tags.includes("for-her")}
                setValue={(value) => updateTags(value, "for-her")}
              />
              <CheckBox
                text="For Children"
                value={product.tags && product.tags.includes("for-children")}
                setValue={(value) => updateTags(value, "for-children")}
              />
              <CheckBox
                text="For Babies"
                value={product.tags && product.tags.includes("for-babies")}
                setValue={(value) => updateTags(value, "for-babies")}
              />

              {errors.tags && <ErrorInput message={errors.tags} />}
            </div>

            <div className="mb-40">
              <label className="mb-20"> Sizes </label>
              <div className="spacer-10" />
              <div className="mb-20 ml-40">
                <div>
                  <div className="mb-10">
                    <Radio
                      text="Clothing Sizes (S, M, L, etc.)"
                      value={product.sizesCategory === "clothing"}
                      setValue={(value) =>
                        value
                          ? setProduct({
                              ...product,
                              sizesCategory: "clothing",
                            })
                          : setProduct({ ...product, sizesCategory: null })
                      }
                    />
                  </div>
                  <div>
                    {product.sizesCategory === "clothing" &&
                      Sizes &&
                      Sizes.clothing.map((size, i) => (
                        <CheckBox
                          key={"size-" + i}
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

                              setProduct({
                                ...product,
                                sizes: [
                                  ...product.sizes.slice(0, index),
                                  ...product.sizes.slice(index + 1),
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
                      value={product.sizesCategory === "shoe"}
                      setValue={(value) =>
                        value
                          ? setProduct({ ...product, sizesCategory: "shoe" })
                          : setProduct({ ...product, sizesCategory: null })
                      }
                    />
                  </div>
                  <div>
                    {product.sizesCategory === "shoe" &&
                      Sizes &&
                      Sizes.shoe.map((size, index) => (
                        <CheckBox
                          key={"sz-" + index}
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

                              setProduct({
                                ...product,
                                sizes: [
                                  ...product.sizes.slice(0, index),
                                  ...product.sizes.slice(index + 1),
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
                    value={product.sizesCategory === "none"}
                    setValue={(value) =>
                      value
                        ? setProduct({ ...product, sizesCategory: "none" })
                        : setProduct({ ...product, sizesCategory: null })
                    }
                  />
                </div>
              </div>
              {errors.sizes && <ErrorInput message={errors.sizes} />}
            </div>

            <div className="mb-20">
              <label className="mb-20">Colors</label>
              <div className="spacer-10" />
              <div className="flex flex-wrap  max-content ml-10">
                {filtersList.colors &&
                  filtersList.colors.map((color, index) => (
                    <CheckBox
                      styles={{
                        width: "150px",
                      }}
                      key={"color-" + index}
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

            <div className="spacer-20" />

            <div className="mb-20">
              <label className="mb-20"> Sale </label>
              <div className="ml-40 flex">
                <Radio
                  text="Sale"
                  value={product.sale}
                  setValue={(sale) => setProduct({ ...product, sale })}
                />
                {product.sale && (
                  <TextInput
                    placeholder="Sale Price*"
                    value={product.salePrice}
                    setValue={(salePrice) =>
                      setProduct({ ...product, salePrice })
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
            <div className="flex mb-40">
              <TextInput
                type="text"
                className="text-field w-input"
                placeholder="Product Price*"
                value={product.price || ""}
                setValue={(price) => setProduct({ ...product, price })}
                error={errors.price}
              />

              <TextInput
                type="text"
                className="text-field w-input"
                placeholder="Weight (in Kgs)"
                value={product.weight || ""}
                setValue={(weight) => setProduct({ ...product, weight })}
                error={errors.weight}
              />

              <Select
                choices={CurrenciesList}
                placeholder="Currency"
                value={product.currency}
                setValue={(currency) => setProduct({ ...product, currency })}
                error={errors.currency}
              />

              <Select
                choices={CountriesList}
                placeholder="Country of Production"
                value={product.countryOfProduction}
                setValue={(countryOfProduction) =>
                  setProduct({ ...product, countryOfProduction })
                }
                error={errors.countryOfProduction}
              />
            </div>

            <CheckBox
              text="In Stock"
              value={product.stock}
              setValue={(stock) => setProduct({ ...product, stock })}
            />

            <CheckBox
              text="Pick Up Available"
              value={product.pickUpAvailable}
              setValue={(pickUpAvailable) =>
                setProduct({ ...product, pickUpAvailable })
              }
            />
          </div>

          <div className="flex mb-20 flex-gap-20 flex-justify-start">
            <Button
              name="Save"
              type="secondary"
              caps={true}
              loading={loading.save}
              action={handleSave}
            />

            <OutlinedButton
              loading={loading.next}
              name="Save And Add Next"
              type="secondary"
              caps={true}
              action={handleNext}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfigProduct;
