import React from "react";

const FormFields = ({ formdata, id, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formdata.validation && !formdata.valid
          ? formdata.validationMessage
          : null}
      </div>
    );
    return errorMessage;
  };
  const tenderTempate = () => {
    let fromTemplate = null;
    switch (formdata.element) {
      case "input":
        fromTemplate = (
          <div>
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={event => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      default:
        fromTemplate = null;
    }
    return fromTemplate;
  };
  return <div>{tenderTempate()}</div>;
};

export default FormFields;
