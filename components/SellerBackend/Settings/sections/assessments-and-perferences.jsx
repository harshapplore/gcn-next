const AssessmentsAndPrefernces = () => {
  return (
    <>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">My Assessments</h3>
        <div className="assessments">
          <div>
            <div className="mb-20">
              <div className="label">Vision and Strategy</div>
              <div>Completed</div>
            </div>
            <div>
              <div className="label">Social</div>
              <div>Pending</div>
            </div>
          </div>
          <div>
            <div className="mb-20">
              <div className="label">Integrity</div>
              <div>Pending</div>
            </div>
            <div>
              <div className="label">Environmental</div>
              <div>Completed</div>
            </div>
          </div>
          <a
            id="w-node-_200fd36d-f212-984d-feda-cfdbf1cccd27-0db831b0"
            className="button icon blue w-inline-block"
          >
            <div className="button-icon w-embed">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <g fill="currentcolor" fillRule="evenodd">
                  <path d="M 0,0 H 24 V 24 H 0 Z" fill="none" />
                  <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                </g>
              </svg>
            </div>
            <div>Edit Assessments</div>
          </a>
        </div>
      </div>
      <div className="settings-block">
        <h3 className="headline-5 mb-30">Preferences</h3>
        <div className="w-form">
          <form
            id="wf-form-Change-Contact-Information"
            name="wf-form-Change-Contact-Information"
            data-name="Change Contact Information"
          >
            <div className="account-form-1">
              <select
                name="Language"
                data-name="Language"
                id="Language"
                required
                className="input-x input-x--select w-select"
              >
                <option value>Select a Language</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
              <select
                name="Currency"
                data-name="Currency"
                id="Currency-9"
                required
                className="input-x input-x--select w-select"
              >
                <option value>Select a Currency</option>
                <option value="EUR">€ (EUR)</option>
                <option value="USD">$ (USD)</option>
              </select>
              <select
                name="Region"
                data-name="Region"
                id="Region"
                required
                className="input-x input-x--select w-select"
              >
                <option value>Select a Region</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
              </select>
            </div>
            <a className="button blue mr-10">Save Changes</a>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssessmentsAndPrefernces;
