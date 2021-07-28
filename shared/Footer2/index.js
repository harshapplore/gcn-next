import React from "react";
import styled from "styled-components";

import Link from "next/link";
import shop from "@/slices/shop";

const FooterContainer = styled.div`
  .strip {
    background-color: #d5d5d5;
    color: #555;

    padding: 25px 25px;
  }

  .main-ctr {
    margin-block: 10px;
    background-color: #d5d5d5;
    color: #555;

    padding: 50px 25px;

    display: flex;
    gap: 10%;

    .block {

      a{
        display: block;
        padding: 5px 0;
      }

    }
  }

  .foot-strip{
    display: flex;
    justify-content: flex-end;
    gap: 15px;

  }
`;

const Footer = () => {
  const shopLinks = [
    { name: "Cosmetics", link: "/category/cosmetics" },
    { name: "Mother & Child", link: "/category/mother-and-child" },
    { name: "Home & Household", link: "/category/home-and-household" },
    { name: "Food & Drink", link: "/category/food-and-drink" },
    { name: "Fashion", link: "/category/fashion" },
    {
      name: "Accessory & Jewellery",
      link: "/category/accessory-and-jewellery",
    },
    { name: "Sale", link: "/category/sale" },
  ];

  const aboutLinks = [
    { name: "About us", link: "/about-us" },
    { name: "Our Promise", link: "/our-promise" },
    { name: "Sell Products", link: "/seller-info" },
    { name: "Policies", link: "/policies" },
    { name: "Impact", link: "/impact" }
  ]

  const helpLinks = [
    {name: "Help for Buyers", link: '/help-buyers'},
    {name: "Help for Sellers", link: "/help-sellers"}
  ]

  return (
    <FooterContainer>
      <div className="strip">
        <span> Austria</span> | <span> English </span> | <span> EUR </span>
      </div>

      <div className="main-ctr">
        <div className="block">
          <h5> Shop </h5>
          {shopLinks.map((link, index) => (
            <Link key={link+index} href={link.link}>
              <a> {link.name} </a>
            </Link>
          ))}
        </div>
        <div className="block">
          <h5> About </h5>
          {aboutLinks.map((link, index) => (
            <Link key={link+index} href={link.link}>
              <a> {link.name} </a>
            </Link>
          ))}
          </div>

          <div className="block">
          <h5> Help </h5>
          {helpLinks.map((link, index) => (
            <Link key={link+index} href={link.link}>
              <a> {link.name} </a>
            </Link>
          ))}
          </div>
      </div>

      <div className="strip foot-strip">
        <Link href="/terms-of-use">
          <a>Terms of Use</a> 
        </Link>
        <Link href="/privacy-policy">
          <a> Privacy Policy</a> 
        </Link>
        <Link href="/impressum">
          <a> Impressum </a> 
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
