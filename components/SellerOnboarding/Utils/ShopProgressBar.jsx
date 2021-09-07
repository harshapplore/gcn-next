import router, { useRouter } from "next/router"


const ShopProgressBar = () => {

    const routers =useRouter();

    return (
        <div className="questionnaire-progress">
          <div className={`questionnaire-step ${routers.query.section=== "shop-info" ? "current":""}`}>
            <div className="questionnaire-step__indicator">1</div>
            <div>Basic Information</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step`}>
            <div className="questionnaire-step__indicator">2</div>
            <div>Terms and Conditions</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step`}>
            <div className="questionnaire-step__indicator">3</div>
            <div>Shipping Settings</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step`}>
            <div className="questionnaire-step__indicator">4</div>
            <div>Shop Information</div>
          </div>
        </div>
    )
}

export default ShopProgressBar
