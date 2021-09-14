import { useState, useEffect } from "react";

const DetailsPane = ({description}) => {
  const [tabs] = useState(() => [
    "Description",
    "Reviews",
    "Questions",
    "Terms And Conditions",
  ]);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="page-section pt-0">
      <div className="nav-area seller-item-detail">
        <div className="container">
          {tabs.map((tab, index) => (
            <span
              key={tab + "index"}
              className={
                "nav-link-shop w-inline-block" +
                (activeTab === index ? " current" : "")
              }
              onClick={() => setActiveTab(index)}
            >
              <div>{tab}</div>
            </span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="w-richtext">
          {description}
        </div>
      </div>
    </div>
  );
};

export default DetailsPane;
