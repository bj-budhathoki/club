import React from "react";

const FormFields = ({ fromData, id, change }) => {
  const tenderTempate = () => {
    let fromTemplate = null;
    switch (fromData.element) {
      case "input":
        fromTemplate = (
          <div>
            <input
              {...fromData.config}
              value={fromData.value}
              onChange={event => change({ event, id })}
            />
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
