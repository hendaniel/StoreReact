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
              <div className="modal-header success-header">
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
                <img className="gif" src={success} alt="error" />
                <div className="success">
                  <h1>SUCCESS!</h1>
                  <span>Everything went ok!, enjoy your coins</span>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default CoinsModal;
