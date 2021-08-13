import styled from "styled-components";

const RadioContainer = styled.div`
  padding: 5px;
  display: inline-block;

  .radio-button{
    width: 22px;
    height: 22px;
    border: 1px solid var(#ccc);
    border-radius: 50%;
  }
`;


const Radio = ({ value, setValue }) => {
  return (
    <RadioContainer>
      <div className="radio-button">
        {value && <div className="active-button"> &nbsp; </div>}
      </div>
    </RadioContainer>
  );
};

export default Radio;
