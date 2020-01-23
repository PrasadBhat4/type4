import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CBComponent = () => {
  const [isBQ, setIsBQ] = useState(false);
  const [isBL, setIsBL] = useState(false);
  const [isCheaper, setIsCheaper] = useState(false);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      betterQuality: isBQ,
      betterLooks: isBL,
      Cheaper: isCheaper,
      text
    };
    console.log(data);
  };

  return (
    <div className="container">
      <h2>Why will my customer come to me and not buy from my competition?</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={isBQ}
              onChange={() => setIsBQ(isBQ => !isBQ)}
              className="form-check-input"
            />
            Better Quality
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={isBL}
              onChange={() => setIsBL(isBL => !isBL)}
              className="form-check-input"
            />
            Better Looks
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={isCheaper}
              onChange={() => setIsCheaper(isCheaper => !isCheaper)}
              className="form-check-input"
            />
            Cheaper
          </label>
        </div>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CBComponent;
