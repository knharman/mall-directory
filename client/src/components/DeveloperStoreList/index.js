import React, { useState } from "react";
import DeveloperAddNewStore from "../DeveloperAddNewStore";
import DeveloperEditStore from "../DeveloperEditStore";
import StoreArray from "./StoreArray";
import { Container, Col } from "react-bootstrap";
import "./style.css";

function DeveloperStoreList({ stores = [], mallName = "Select a Mall", mallId }) {
  const [currentStore, setCurrentStore] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <DeveloperAddNewStore mallId={mallId} onClose={toggleModal} />}
      <div className="center">
        <Container className="center" fluid>
          <Col className="list-container" lg={8} md={8}>
            <div className="dropdown-container box">
              <Col className="dropdown-box box">
                <h2 className="store-title">{mallName}</h2>
              </Col>

              <Col>
                <ol className="center">
                  {stores.map((store, index) => (
                    <li key={index}>
                      <StoreArray
                        clickHandler={() => setCurrentStore(store)}
                        {...store}
                      />
                    </li>
                  ))}
                </ol>
                <button className='mall-list-button2' onClick={() => toggleModal()}>Add New Store</button>
              </Col>
            </div>
          </Col>
        </Container>
      </div>
      <div className="center">
        {currentStore && <DeveloperEditStore mallId={mallId} store={currentStore} />}
      </div>
    </>
  );
}

export default DeveloperStoreList;