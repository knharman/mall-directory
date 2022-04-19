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
              <button onClick={closeHandler} type="button">
                &times;
              </button>
              <div className="box">
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
              <div className="box">
                <h3 className="modalTitles">Category:</h3>
                <p className="modalText">{category.name}</p>
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


