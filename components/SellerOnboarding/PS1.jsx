import { useState } from "react";

import Select from "shared/Select";
import CheckBox from "shared/Checkbox";

const data = {
  heading: "Hello Thomas, let's get started!",
  subheading: "Seller Questionaire",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  varius enim in eros elementum tristique. Duis cursus, mi quis
  viverra ornare, eros dolor interdum nulla, ut commodo diam libero
  vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
  imperdiet. Nunc ut sem vitae risus tristique posuere.`,
  questions: [
    "Why do you think your company is sustainable?",
    "Why do you think your company is sustainable?",
    "Please select your certificates",
    "Why do you think your company is sustainable?",
  ],
  certificates: [
    "First Choice",
    "Second Choice",
    "Third Choice",
    "Next Choice",
    "Last Choice",
  ],
};

const PS1 = ({ nextPage }) => {
  const [answers, setAnswers] = useState({});

  const updateAnswer = (key, value) => {
    const newAnswers = { ...answers };
    newAnswers[key] = value;
    setAnswers(newAnswers);

    console.log(newAnswers);
  };

  const updateCertificates = () => {

  }

  return (
    <div className="page-section">
      <div className="container">
        <div className="heading-wrapper mb-40">
          <h1> {data.heading} </h1>
          <div className="overline-text mb-40">{data.subheading}</div>
          <p>{data.text}</p>
        </div>
        <div className="w-form">
          <form id="email-form-3" name="email-form-3" data-name="Email Form 3">
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                {data.questions[0]}
              </label>
              <textarea
                placeholder="Answer"
                maxLength={5000}
                id="field"
                name="field"
                className="text-field area w-input"
                defaultValue={""}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                {data.questions[1]}
              </label>
              <textarea
                placeholder="Answer"
                maxLength={5000}
                id="field-3"
                name="field-3"
                data-name="Field 3"
                className="text-field area w-input"
                defaultValue={""}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                {data.questions[2]}
              </label>
              <Select
                choices={data.certificates}
                required={true}
                value={answers.certificates}
                setValue={(value) => updateAnswer("choices", value)}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label mb-20">
                {data.questions[3]}
              </label>
              <CheckBox
                text="Sample Answer"
                value={answers.q3One}
                setValue={(value) => updateAnswer("q3One", value)}
              />
              <CheckBox
                text="Sample Answer"
                value={answers.q3Two}
                setValue={(value) => updateAnswer("q3Two", value)}
              />
              <CheckBox
                text="Sample Answer"
                value={answers.q3Three}
                setValue={(value) => updateAnswer("q3Three", value)}
              />
            </div>
            <input
              type="submit"
              value="Continue"
              className="button blue w-button"
              onClick={(e) => {
                e.preventDefault();
                nextPage();
              }}
            />
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
  );
};

export default PS1;
