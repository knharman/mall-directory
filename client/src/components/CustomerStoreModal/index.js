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

// <********  Needs to be set above return statement in CustomerStoreList  ********>

// const [currentStore, setCurrentStore] = useState();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = (store, i) => {
//     setCurrentPhoto({ ...store, index: i });
//     setIsModalOpen(!isModalOpen);
//   };

//   <********  Needs to be set inside of return statement in CustomerStoreList  ********>

// {isModalOpen && (
//   <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
// )}

//   <********  Needs to be set inside of map function for stores in CustomerStoreList  ********>
//   <********  can be attached to name or icon  ********>
// onClick={() => toggleModal(store, i)}

