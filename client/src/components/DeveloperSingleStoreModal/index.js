import React from "react";
import "./style.css";

function CustomerStoreModal(onClose, currentStore) {
  const { storeName, category, description, url } = currentStore;

  const linking = () => {
    window.location.href = `https://${url}`;
  };

  return (
    <>
      <section>
        <div id="myModal" className="modalBackdrop">
          <div className="modalContainer">
            <div className=" inline margin50">
              <button onClick={onClose} type="button">
                &times;
              </button>
              <div className="box">
                <h1 className="modalTitles storeName">{storeName}</h1>
              </div>

              <div className="box">
                <h3 className="modalTitles">Category:</h3>
                <p className="modalText">{category}</p>
              </div>

              <div className="box">
                <h3 className="modalTitles">Description:</h3>
                <p className="modalText">
                  {description}
                </p>
              </div>
              <div className="box">
                <span
                  className="modalTitles"
                  onClick={() => {
                    linking();
                  }}
                >
                  {url}
                </span>
                <p className="modalText">
                  Click the link for more info!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerStoreModal;