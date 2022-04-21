import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import IndividualStore from "./IndividualStore";
import CustomerStoreModal from "../CustomerStoreModal";
import { GET_CATEGORIES } from "../../utils/queries";
import { Dropdown, DropdownButton, Container, Col, Row } from "react-bootstrap";
import "./style.css";

function CustomerStoreList({ stores = [], mallName = "Select a Mall" }) {
  const { loading, data, error } = useQuery(GET_CATEGORIES);
  const [currentCategory, setCurrentCategory] = useState({ name: "" });
  const [currentStore, setCurrentStore] = useState(null);

  const letsCancel = async (event) => {
    window.location.reload();
  };

  if (loading) {
    return <h2>Loading Categories...</h2>;
  }
  if (error) {
    return <h2>Sorry, no categories exist.</h2>;
  }

  return (
    <>
      <Row>
        <Col>
          {currentStore && (
            <CustomerStoreModal
              store={currentStore}
              closeHandler={() => setCurrentStore(null)}
            />
          )}
          <>
            <Container fluid>
              <Col className="store-list-container" lg={12} md={12}>
                <div className="store-dropdown-container box">
                  <Col className="store-dropdown-box box">
                    <h2 className="store-list-title">{mallName}</h2>
                    <h4 className="store-list-filter">Category:</h4>
                    <DropdownButton
                      id="store-dropdown-basic-button"

                      title="Choose a Category"
                    >
                      {data.categories.map((category, index) => (
                        <Dropdown.Item
                          name={category}
                          value={category}
                          key={index}
                          onClick={() => {
                            setCurrentCategory(category);
                          }}
                        >
                          {category.name}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                    <button
                      class="catBtn catBtn2"
                      onClick={() => letsCancel()}
                      type="button"
                    >
                      {currentCategory.name || ""}
                    </button>

                  </Col>

                  <Col>
                    <ol className="scrollBox list-numbers">
                      {stores
                        .filter(
                          (store) =>
                            store.category.name === currentCategory.name ||
                            currentCategory.name === ""
                        )
                        .map((store, index) => (
                          <IndividualStore
                            key={index}
                            clickHandler={() => setCurrentStore(store)}
                            {...store}
                          />
                        ))}
                    </ol>
                  </Col>
                </div>
              </Col>
            </Container>
          </>
        </Col>
      </Row>
    </>
  );
}

export default CustomerStoreList;
