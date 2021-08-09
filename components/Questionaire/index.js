import Header from "@/shared/Header2";
import Nav from "@/shared/Nav2";
import Footer from "@/shared/Footer";

import Button from "@/shared/Button";

import data from "./data.json";

import Text from "./Inputs/Text";
import Option from "./Inputs/Option";

const QuestionList = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <div key={"qs"+index}>
            <div />
            {question.type === "option" && <Option text={question.text} />}
            {question.type === "text" && <Text text={question.text} />}
            {question.type === "heading" && <h3> {question.text} </h3>}
            {question.is === "section" && question.questions.length > 0 && (
              <QuestionList questions={question.questions} />
            )}
          </div>
        );
      })}
    </>
  );
};

const Questionaire = () => {
  console.log(data);

  return (
    <>
      <Header nav={<Nav />} />
      <div className="page-section wf-section">
        <div className="container">
          <div className="heading-wrapper mb-40">
            <h1>Hello Thomas, let's get started!</h1>
            <div className="overline-text mb-40">Seller Questionaire</div>
            <p>
              This self-check questionnaire is a simplified model of the most
              robust and used sustainability assessment methods available in the
              market. Its purpose is to support SMEs to evaluate their status
              quo regarding sustainability and to insert environmental, social,
              and governance (ESG) aspects into their business strategies.{" "}
              <br />
              <br />
              Primarily, we will use this questionnaire as a preliminary
              evaluation of your company’s performance on business
              sustainability and ESG. By completing the questionnaire, we will
              be able to grasp how well your company is managing sustainability
              in the overall value chain - a key factor for the inclusion of
              your business in the Green Cloud Nine platform. Also, if
              applicable, it may serve as the ground for further improvements.
            </p>
          </div>
          <div className="w-form">
            <div className="product-add-block">
              <div className="heading-wrapper mb-40">
                <h3>Vision and strategy</h3>
              </div>
              <div className="onboarding-table">
                <div className="ob-row heading">
                  <div className="ob-name">
                    <div className="bold">The Company</div>
                  </div>
                </div>

                <QuestionList questions={data[3].questions} />

                <Button type="secondary" name="Continue" />
              </div>

              <div className="progress-bar">
                <div className="progress" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Questionaire;
