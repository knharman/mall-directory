import React from "react";

import "./style.css";

function CustomerStoreModal({closeHandler, store}) {
  const { storeName, category, description, url } = store;

  const linking = () => {
    window.location.href = `https://${url}`;
  };

  return (
    <>
      <section>
        <div id="myModal" className="modalBackdrop">
          <div className="modalContainer">
            <div className=" inline margin50">
              <button onClick={closeHandler} id="button" type="button">
                &times;
              </button>
              <div className="box cust-modal-box">
                <h1 className="modalTitles storeName">{storeName}</h1>
              </div>
              {/* V2 we can link store image here
            <br></br>
            <div className="center">
              <img
                className="pic"
                src="assets/images/icon.jpg"
                alt="icon of store"
              ></img>
            </div>
            <br></br> */}
              <div className="box cust-modal-box">
                <h3 className="modalTitles">Category:</h3>
                <p className="modalText">{category.name}</p>
              </div>

              <div className="box cust-modal-box">
                <h3 className="modalTitles">Description:</h3>
                <p className="modalText">
             {description}
                </p>
              </div>
              <div className="box cust-modal-box">
                <span
                  className="modalTitles store-link"
                  onClick={() => {
                    linking();
                  }}
                >
                  {url}
                </span>
                <p className="modalText">
                  Click the link above for more info!{" "}
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


