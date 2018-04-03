import React from "react";
import Popup from "reactjs-popup";

export default () => (
  <Popup trigger={<button className="addCheck"> Add new check </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Add new Check </div>
        <div className="content">
          {" "}
          <form>
            <label>
              Date:
              <input type="text" name="name" />
            </label>
            <label>
               To:
              <input type="text" name="name" />
            </label>
            <label>
               Amount:
              <input type="text" name="name" />
            </label>
            <label>
               Number:
              <input type="text" name="name" />
            </label>
          </form>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            Submit
          </button>
      </div>
      </div>
    )}
  </Popup>
);
