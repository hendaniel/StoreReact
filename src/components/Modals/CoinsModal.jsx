import React from "react";
import { createPortal } from "react-dom";
import "./modal.scss";
import { success } from "../../assets/index";

const CoinsModal = ({ isShowing, hide }) =>
  isShowing
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
                <form className="coins-form">
                  <div>
                    <input type="radio" name="choice" value={1000} />
                    <label>1000</label>
                  </div>
                  <div>
                    <input type="radio" name="choice" value={5000} />
                    <label>5000</label>
                  </div>
                  <div>
                    <input type="radio" name="choice" value={7500} />
                    <label>7500</label>
                  </div>
                  <button>Get Coins!</button>
                </form>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default CoinsModal;
