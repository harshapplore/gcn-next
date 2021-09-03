import router, { useRouter } from "next/router"


const ProgressBar = () => {

    const routers =useRouter();

    return (
        <div className="questionnaire-progress">
          <div className={`questionnaire-step ${routers.query.section=== "basic-info" ? "current":""}`}>
            <div className="questionnaire-step__indicator">1</div>
            <div>Basic Information</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step ${routers.query.section=== "vision-strategy" ? "current":""}`}>
            <div className="questionnaire-step__indicator">2</div>
            <div>Vision and Strategy</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step ${routers.query.section=== "governance-and-management" ? "current":""}`}>
            <div className="questionnaire-step__indicator">3</div>
            <div>Governance and Management</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step ${routers.query.section=== "social" ? "current":""}`}>
            <div className="questionnaire-step__indicator">4</div>
            <div>Social</div>
          </div>
          <div className="questionnaire-spacer"></div>
          <div className={`questionnaire-step ${routers.query.section=== "environment" ? "current":""}`}>
            <div className="questionnaire-step__indicator">5</div>
            <div>Enviromental</div>
          </div>
        </div>
    )
}

export default ProgressBar
