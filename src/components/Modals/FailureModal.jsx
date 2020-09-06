import React from "react";
import { createPortal } from "react-dom";
import { error } from "../../assets/index";

const FailureModal = ({ isShowing, hide }) =>
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
              <div className="modal-header error-header">
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
                <img className="gif" src={error} alt="error" />
                <div class="error">
                  <h1>ERROR!</h1>
                  <span>Something went wrong, try again</span>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default FailureModal;
