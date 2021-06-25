const GreenCloudNine = () => {
  return (
    <div className="page-section blue-gradient">
      <div className="container">
        <div className="_40-wrapper">
          <h2 className="jumbo">What is Green Cloud Nine?</h2>
          <img
            src="images/bitmap.png"
            loading="lazy"
            alt="Frog in nature"
            className="frog-img"
          />
          <p className="lead-text mb-20">
            Wir wollen den Übergang zu einer gerechteren und
            umweltfreundlicheren Wirtschaft und Gesellschaft beschleunigen. Bei
            jedem Einkauf auf unserem Marktplatz ersetzen wir unfaire,
            verschwenderische und umweltschädliche Produkte durch nachhaltige
            Äquivalente.
          </p>
          <p className="mb-40">
            Wir glauben, dass Nachhaltigkeit die Regel und nicht die Ausnahme
            sein sollte. Deshalb möchte Green Cloud Nine nicht nur ein
            Einkaufszentrum sein, sondern eine starke globale Gemeinschaft
            nachhaltiger Unternehmen und Verbraucher, die wirklich etwas
            bewirken.
          </p>
          <a href="#" className="button icon secondary w-inline-block">
            <div className="button-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
                </g>
              </svg>
            </div>
            <div className="text-block">Button</div>
          </a>
          <a href="#" className="button icon w-inline-block">
            <div className="button-icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height={24} width={24} />
                </g>
                <g>
                  <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
                </g>
              </svg>
            </div>
            <div className="text-block">Our Promise</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GreenCloudNine;