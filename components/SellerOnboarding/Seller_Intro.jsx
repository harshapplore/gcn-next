import router from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const data = {
    heading: "Hello Thomas, let's get started!",
    subheading: "Sustainability Self-check",

    p1: `This self-check questionnaire is a simplified model of the most robust and used sustainability assessment methods available in the market. Its purpose is to support SMEs to evaluate their status quo regarding sustainability and to insert environmental, social, and governance (ESG) aspects into their business strategies.`,
    p2: `Primarily, we will use this questionnaire as a preliminary evaluation of your company’s performance on business sustainability and ESG. By completing the questionnaire, we will be able to grasp how well your company is managing sustainability in the overall value chain - a key factor for the inclusion of your business in the Green Cloud Nine platform. Also, if applicable, it may serve as the ground for further improvements.`,
    p3: `The questionnaire is divided into four dimensions, totalling <strong>61</strong> indicators in its initial set.`,
    p4: `Achieving a certain score in this questionnaire (100% of red-flag questions + 25% of other questions), is a mandatory step to join our platform. Yet, don’t be intimidated as we don’t expect perfection, but a minimum commitment to sustainability.`,
    p5: `Also, in order to evaluate your company&#x27;s progress in the long journey of sustainability, you will be invited to re-assess annually. Re-assessment will be voluntary; however, we will strongly encourage our vendors to participate.`,
    p6: `Filling in the questionnaire is very simple.`,
    p7: `Each question has 4 possible answers.`,
    p8: `Please indicate the one that best matches the reality of your company currently. Optional, but very useful, is filling in the spaces for comments at the end of each section.`,
    p9: `Once you submit your self-assessment, one of our team members will review it and get back to you within 72 hours.`,
    p10: `Thank you for joining Green Cloud Nine community of transparent and sustainable businesses!`,

    listanswers: [
        "Yes",
        "No",
        "considering or planning to implement",
        "Not applicable",
    ],
    listtabs: [
        "Vision and Strategy",
        "Governance and Management",
        "Social",
        "Environmental",
    ],
    certificates: [
        "First Choice",
        "Second Choice",
        "Third Choice",
        "Next Choice",
        "Last Choice",
    ],
    choices: ["Sample Answer 1", "Sample Answer 2", "Sample Answer 3"],
};

const Seller_Intro = ({ nextPage }) => {
    const { seller } = useSelector((state) => state.user);
    const [sellerName, setSellerName] = useState()
    useEffect(() => {
       if(seller.user)
       setSellerName(seller.user.name)
    }, [seller])

   
    const submit = async (e) => {
        e.preventDefault();
        nextPage(); 
    };
    
    return (
        <div className="page-section">
            <div className="container">
                <div className="heading-wrapper mb-40">
                    <br/>
                    <br/>
                    {/* <br/> */}
                    <h1 className="headline-2 mb-10"> Hello {sellerName} , let's get started!  </h1>
                    <div className="overline-text mb-40">{data.subheading}</div>
                    <div className="w-richtext">
                        <p>{data.p1}</p>
                        <p>{data.p2}</p>
                        <p>{data.p3}</p>
                        <ol start="" role="list">
                            {data.listtabs && data.listtabs.map((tab, index) => <li key={Math.floor(Math.random())+20}>{tab}</li>)}
                        </ol>
                        <p>{data.p4}</p>
                        <p>{data.p5}</p>
                        <p>{data.p6}</p>
                        <p>{data.p7}</p>

                        <ol start="" role="list">
                            {data.listanswers && data.listanswers.map((answer) => {
                                
                                <li key={Math.floor(Math.random())+100}>{answer}</li>
                            })
                            }
                        </ol>
                        <p>{data.p8}</p>
                        <p>{data.p9}</p>
                    </div>
                </div>
                <div className="headline-5 mb-40">
                <p>{data.p10}</p>
                </div>
                <div className="center">
                <div className="button blue" onClick={submit}>Start questionnaire</div>
                </div>
            </div>
        </div>
    );
};

export default Seller_Intro;

