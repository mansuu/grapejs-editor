import React from "react";
import closeButton from "../../images/close_with_bg.svg";
const PreviewStylizedModule = ({ stylizedModule, closePreview }) => {
  return (
    <div className="preview-stylized-module-container">
      <div className="preview-stylize-module-head">
        <span>PREVIEW</span>
        <img
          src={closeButton}
          alt="close"
          className="btn-close float-right"
          style={{ cursor: "pointer" }}
          height="32"
          onClick={() => closePreview(true)}
        />
      </div>
      <div className="divider"></div>
      <div>
        <div
          id="stylized-module-preview"
          className="preview-stylized-module customScrollBar"
          dangerouslySetInnerHTML={{
            __html: stylizedModule,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PreviewStylizedModule;
