const Toggle = ({ name, value, setValue }) => {
  return (
    <div className="pick-up-wrapper mb-40">
      <a
        className={
          "pickup-switch-wrapper w-inline-block" + (value ? " active" : "")
        }
        onClick={() => setValue(!value)}
      >
        <div className="switch-switcher" />
      </a>
      {name && <div className="pickup-text">{name}</div>}
    </div>
  );
};

export const Toggle2 = ({ name, value, setValue }) => {
  return (
    <div className="checkout-switch-wrapper">
      <a
        className={
          "pickup-switch-wrapper w-inline-block" + (value ? " active" : "")
        }
        onClick={() => setValue(!value)}
      >
        <div className="switch-switcher" />
      </a>
      {name && <div className="checkout-switch-text">{name}</div>}
    </div>
  );
};

export default Toggle;
