import React, { useEffect, useState } from "react";
import DeveloperAddNewStore from "../DeveloperAddNewStore";
import DeveloperEditStore from "../DeveloperEditStore";
import StoreArray from "./StoreArray";
import { Dropdown, DropdownButton, Container, Col } from "react-bootstrap";
import "./style.css";

function DeveloperStoreList({ stores = [], mallName = "Select a Mall" }) {
  const [currentMall, setCurrentMall] = useState({ mallName: mallName });
  const [currentStore, setCurrentStore] = useState();

  console.log("mallName", currentStore);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      {isModalOpen && <DeveloperAddNewStore onClose={toggleModal} />}
      <div className="center">
        <Container fluid>
          <Col className="store-list-container" lg={10} md={10}>
            <div className="store-dropdown-container box">
              <Col className="store-dropdown-box box">
                <h2 className="center store-list-title">{mallName}</h2>
              </Col>

              <Col>
                <ol className="center">
                  {stores.map((store, index) => (
                    <li key={index}>
                      <StoreArray clickHandler={() => setCurrentStore(store)} {...store} />
                    </li>
                  ))}
                </ol>
              </Col>
            </div>
          </Col>
        </Container>
      </div>
      <DeveloperEditStore store={currentStore == null ? {} : currentStore} />
    </>
  );
}

export default DeveloperStoreList;
