import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { authAxios } from "@/setups/axios";

import Select from "@/shared/Select";
import CheckBox from "@/shared/Checkbox";
import Message from "@/shared/Message";
import Button from "@/shared/Button";

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
  choices: ["Sample Answer 1", "Sample Answer 2", "Sample Answer 3"],
};

const PS1 = ({ nextPage }) => {
  const { seller } = useSelector((state) => state.user);

  const [answers, setAnswers] = useState(() => {
    let len = data.questions.length;
    const arr = [];

    while (len > 0 && len--) arr.push({});

    return arr;
  });

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (seller.questionaire) setAnswers(seller.questionaire);
  }, [seller]);

  const validate = () => {
    const err = [];

    answers.map((answer, index) =>
      !answer.answer
        ? err.push(`The answer for question "${data.questions[index]}" is missing.`)
        : ""
    );

    setErrors(err);

    if (err.length) return false;

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const response = await authAxios()({
      url: `sellers/${seller.id}`,
      method: "PUT",
      data: {
        onboardStatus: 1,
        questionaire: answers,
      },
    });

    if (response) {
      nextPage();
    }
  };

  const updateAnswer = (index, value) => {
    setAnswers([
      ...answers.slice(0, index),
      {
        question: data.questions[index],
        answer: value,
      },
      ...answers.slice(index + 1),
    ]);
  };

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
                value={answers[0].answer}
                onChange={(e) => updateAnswer(0, e.target.value)}
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
                value={answers[1].answer}
                onChange={(e) => updateAnswer(1, e.target.value)}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label">
                {data.questions[2]}
              </label>
              <Select
                choices={data.certificates}
                required={true}
                value={answers[2].answer}
                setValue={(value) => updateAnswer(2, value)}
              />
            </div>
            <div className="mb-60">
              <label htmlFor="name" className="field-label mb-20">
                {data.questions[3]}
              </label>
              <CheckBox
                text="Sample Answer One"
                value={answers[3].answer === data.choices[0]}
                setValue={() => updateAnswer(3, data.choices[0])}
              />
              <CheckBox
                text="Sample Answer Two"
                value={answers[3].answer === data.choices[1]}
                setValue={() => updateAnswer(3, data.choices[1])}
              />
              <CheckBox
                text="Sample Answer Three"
                value={answers[3].answer === data.choices[2]}
                setValue={() => updateAnswer(3, data.choices[2])}
              />
            </div>

            {errors && errors.length > 0 && errors.map(error => 
              <Message text={error} status={-1} />)
            }

            <Button name="Save & Continue" action={submit} type="secondary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PS1;
