import React, { useState, useContext } from "react";
import { createPortal } from "react-dom";
import "./modal.scss";
import { coin_animated } from "../../assets/index";
import { addPoints } from "../../services/userService";
import { UserContext } from "../../providers/UserProvider";

const CoinsModal = ({ isShowing, hide }) => {
  const [selected, setSelected] = useState(1000);

  const { setUserResponse } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addPoints(Number.parseInt(selected))
      .then((res) => {
        console.log("response", res);
        setUserResponse(res);
        hide();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return isShowing
    ? createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header coins-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="content">
                <form className="coins-form" onSubmit={handleSubmit}>
                  <img className="gif" src={coin_animated} alt="error" />
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="choice"
                      value={1000}
                    />
                    <label>1000</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="choice"
                      value={5000}
                    />
                    <label>5000</label>
                  </div>
                  <div>
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="choice"
                      value={7500}
                    />
                    <label>7500</label>
                  </div>
                  <button type="submit" className="coins">
                    Get Coins!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};
export default CoinsModal;
