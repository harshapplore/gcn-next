import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { fetchCategories } from "@/slices/categories";
import { useSelector, useDispatch } from "react-redux";

const LinkBlock = ({ to, name, active }) => {
  return (
    <Link href={to}>
      <a className={"nav-link " + (active ? " current" : "")}> {name} </a>
    </Link>
  );
};

const Nav2 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [activeIndex, setActiveIndex] = useState();

  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    const { filters } = router.query;

    if(!filters) return;

    const _filters = JSON.parse(decodeURIComponent(filters));

    console.log("filters", _filters);

    if(!_filters.category) return;

    const id = _filters.category;

    const index =
      categories && categories.findIndex((category) => id === category.id);

    if (index === -1) setActiveIndex(null);
    if (index >= 0) setActiveIndex(index);
  }, [router.query]);

  return (
    <nav className="nav-menu">
      <div className="navlink-wrapper">
        {categories &&
          categories.map((category, index) => (
            <LinkBlock
              key={"cat" + index}
              to={`/products?filters=${JSON.stringify({
                category: category.id,
              })}`}
              name={category.name}
              active={activeIndex === index}
            />
          ))}
      </div>
      <div className="promise-wrapper" onClick={() => router.push("/about")}>
        <a className="nav-link promise w-inline-block">
          <img
            src="/images/spa-black-24-dp.svg"
            loading="lazy"
            alt=""
            className="button-icon"
          />
          <div className="text-block cursor no-select">About Us</div>
        </a>
      </div>
      <div className="mobile-menu-bar">
        <a className="footer-inline-link dark">Austria</a>
        <div className="footer-inline-link-divider">|</div>
        <a className="footer-inline-link dark">English</a>
        <div className="footer-inline-link-divider">|</div>
        <a className="footer-inline-link dark">€ (EUR)</a>
      </div>
    </nav>
  );
};

export default Nav2;
