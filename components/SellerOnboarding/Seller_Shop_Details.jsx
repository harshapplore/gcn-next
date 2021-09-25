import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ShopProgressBar from "./Utils/ShopProgressBar";
import { authAxios } from "@/setups/axios";
import { uploadFiles } from "_controllers/product"
import Message from "@/shared/Message";
import { fetchSeller } from "@/slices/user";
import Button from "@/shared/Button";




const Seller_Shop_Details = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [errors, setErrors] = useState([]);
    const [profilePic, setProfilePic] = useState("");
    const [headerImage, setHeaderImage] = useState("");
    const [shopImages, setShopImages] = useState([]);
    const [shopName, setShopName] = useState("");
    const [shopDesc, setShopDesc] = useState("");
    const [loading,setLoading] = useState(false);

    const dispatch = useDispatch();

    // console.log(seller)
    // useEffect(() => {
    //   if (seller.questionaire) setInitials(seller.questionaire);
    // }, [seller]);

    const validate = () => {
        const err = [];

        !profilePic ? err.push(`Please Enter  profile picture`) : "";
        !headerImage ? err.push(`Please Enter Header image`) : "";
        !shopImages ? err.push(`Please Enter shop images`) : "";
        !shopName ? err.push(`Please Enter shop name`) : "";
        !shopDesc ? err.push(`Please Enter shop description`) : "";
        setErrors(err);

        if (err.length) return false;

        return true;
    };
    const checkAvailable = async (e) => {
        setErrors(err)
        const totalShops = await authAxios()({
            url: `/shops/`,
            method: "GET",
        });
        const err = []
        // const checkAvailablity = totalShops.filter( shop => {
        //   shop.name
        // } )

        // checkAvailablity && checkAvailablity.length ? err.push(`Shop name already taken`) : "";
    }
    const profilepicture = []
    profilePic && profilepicture.push(profilePic)
    const cover = []
    headerImage && cover.push(headerImage)
    const shopimage = []
    shopImages[0] && shopimage.push(shopImages[0])
    shopImages[1] && shopimage.push(shopImages[1])
    shopImages[2] && shopimage.push(shopImages[2])
    shopImages[3] && shopimage.push(shopImages[3])

    const submit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        const logo = profilepicture ? await uploadFiles(profilepicture) : []
        const head = cover ? await uploadFiles(cover) : []
        const image = shopimage ? await uploadFiles(shopimage) : []

        const data = {
            name: shopName,
            description: shopDesc,
            seller: seller.id,
            logo: logo.length > 0 ? logo : [],
            cover: head.length > 0 ? head : [],
            images: image.length > 0 ? image : []
        }
        setLoading(true)
        const res = await authAxios()({
            url: `/shops`,
            method: "POST",
            data: data
        });

        const rs = await authAxios()({
            url: `/sellers/${seller.id}`,
            method: "PUT",
            data: {
                shop: res.data._id
            }
        })
        setLoading(false)
        console.log(rs.data)
    };
    return (
        <div className="page-section wf-section">
            <div className="container">
                <div className="heading-wrapper">
                    <h1 className="headline-2 mb-30">Create your Shop</h1>
                    <br />
                    <ShopProgressBar />
                    <div className="settings-block">
                        <h3 className="headline-5 mb-30">Shop Information</h3>
                        <div className="w-form">
                            <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
                                <ol role="list" className="assessment-list assessment-list--4">
                                    <li>
                                        <div className="subtitle-2">Name your Shop</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="account-form-1">
                                                <input type="text" onChange={(e) => setShopName(e.target.value)} className="input-x w-input" maxLength="256" value={shopName} placeholder="Shop Name *" id="Shop-Name" />
                                                <a onClick={checkAvailable} className="button blue">Check</a>
                                            </div>
                                        </div>
                                        {errors && errors.length > 0 && errors.map(error =>
                                            <Message text={error} status={-1} />)
                                        }
                                    </li>
                                    <li>
                                        <div className="subtitle-2">Shop description</div>
                                        <div className="assessment-list-content mb-40">
                                            <div className="assessment-spacer"></div>
                                            <textarea placeholder="Type in here…" onChange={(e) => setShopDesc(e.target.value)} maxLength="5000" className="input-x input-x--text-area w-input" value={shopDesc} ></textarea>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">Add a Profile Picture</div>
                                        <div className="assessment-list-content mb-40">
                                            <div className="assessment-spacer"></div>
                                            <div className="add-profile-picture-wrapper">
                                                {!profilePic && <div className="add-profile-picture"></div>}
                                                {profilePic && <img className="add-profile-picture" src={URL.createObjectURL(profilePic)} alt="Profile-pic" />}
                                                <div className="button icon blue w-inline-block">
                                                    <div className="button-icon w-embed">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                            <g transform="rotate(-90,12,12)" fill="currentcolor" fill-rule="evenodd">
                                                                <path d="M 0,0 H 24 V 24 H 0 Z" fill="none"></path>
                                                                <path d="M 17 8l-1.41 1.41 L 17.17 11 H 9 v 2 h 8.17l-1.58 1.58 L 17 16l4-4-4-4 Z"></path>
                                                                <path d="m 5,5 h 7 V 3 H 5 C 3.9,3 3,3.9 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 V 19 H 5 Z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="profile-picture" >Upload Image (png., jpg., pdf.)</label  >
                                                </div>
                                                <input type="file" style={{ display: "none" }} onChange={(e) => setProfilePic(e.target.files[0])} id="profile-picture" />
                                                <input type="file" style={{ display: "none" }} onChange={(e) => setHeaderImage(e.target.files[0])} id="header-image" />
                                                <input type="file" style={{ display: "none" }} onChange={(e) => setShopImages([...shopImages, e.target.files[0]])} id="shop-images" />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">Add Header Image</div>
                                        <div className="assessment-list-content mb-40">
                                            <div className="assessment-spacer"></div>
                                            {headerImage && <label htmlFor="header-image"> <img src={URL.createObjectURL(headerImage)} id="header-image" alt="header-image" /> </label>}
                                            {!headerImage &&
                                                <label htmlFor="header-image" className="add-header-img">
                                                    <img src="../images/add-black-24-dp.svg" id="header-image" loading="lazy" width="24" height="24" alt="Add" className="add-header-img__icon mb-15" />
                                                    <label htmlFor="header-image">Upload Image (png., jpg., pdf.)</label >
                                                </label>}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle-2">Add Shop Images</div>
                                        <div className="assessment-list-content">
                                            <div className="assessment-spacer"></div>
                                            <div className="add-shop-picture-wrapper">
                                                {shopImages.length ? shopImages[0] &&
                                                    <label htmlFor="shop-images" className="add-shop-img-edit">
                                                        <img src={URL.createObjectURL(shopImages[0])} alt="shop-images" />
                                                    </label>
                                                    : <label htmlFor="shop-images" className="add-shop-img">
                                                        <img src="../images/add-black-24-dp.svg" loading="lazy" width="24" height="24" alt="Add" />
                                                    </label>
                                                }
                                                {shopImages.length > 1 ? shopImages[1] &&
                                                    <label htmlFor="shop-images" className="add-shop-img-edit">
                                                        <img src={URL.createObjectURL(shopImages[1])} alt="shop-images" />
                                                    </label>
                                                    : <label htmlFor="shop-images" className="add-shop-img">
                                                        <img src="../images/add-black-24-dp.svg" loading="lazy" width="24" height="24" alt="Add" />
                                                    </label>
                                                }
                                                {shopImages.length > 2 ? shopImages[2] &&
                                                    <label htmlFor="shop-images" className="add-shop-img-edit">
                                                        <img src={URL.createObjectURL(shopImages[2])} alt="shop-images" />
                                                    </label>
                                                    : <label htmlFor="shop-images" className="add-shop-img">
                                                        <img src="../images/add-black-24-dp.svg" loading="lazy" width="24" height="24" alt="Add" />
                                                    </label>
                                                }
                                                {shopImages.length > 3 ? shopImages[3] &&
                                                    <label htmlFor="shop-images" className="add-shop-img-edit">
                                                        <img src={URL.createObjectURL(shopImages[3])} alt="shop-images" />
                                                    </label>
                                                    : <label htmlFor="shop-images" className="add-shop-img">
                                                        <img src="../images/add-black-24-dp.svg" loading="lazy" width="24" height="24" alt="Add" />
                                                    </label>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                                {loading 
                                        ?
                                <button className="button blue mr-10">Loading....</button>
                                    :
                                <div onClick={submit} className="button blue mr-10">Save and Continue</div>}
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
            </div>
        </div>
    );
};

export default Seller_Shop_Details;