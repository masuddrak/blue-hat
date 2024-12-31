import React, { useRef, useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { hidModal, showModal } from "./store/slice/modalSlice";

const App = () => {
  const modalRef = useRef(null);
  const modalValue = useSelector((state) => state.productModal.modalValue);
  const dispatch = useDispatch();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(hidModal(false));
    }
  };

  useEffect(() => {
    if (modalValue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalValue]);

  return (
    <div>
      <div className={`modal ${modalValue ? "show" : ""}`}>
        <div
          ref={modalRef}
          style={{
            padding: "20px",
            width: "50% ",
            position: "absolute",
            right: 0,
            top: 0,
            background: "green",
            height: "100%",
          }}
        >
          <h1>This is counter App with Redux</h1>
          <div
            style={{ position: "absolute", right: 0, top: 0, margin: "10px" }}
          >
            <button onClick={() => dispatch(hidModal(false))}>Hide</button>
          </div>
        </div>
      </div>

      <button disabled={modalValue} onClick={() => dispatch(showModal(true))}>
        Show
      </button>
    </div>
  );
};

export default App;
