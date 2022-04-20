import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Dropdown, DropdownButton, Container, Col, Row } from "react-bootstrap";

import { GET_MALLS } from "../../utils/queries";
import IndividualMall from "./IndividualMall";
import CustomerStoreList from "../CustomerStoreList";
import './style.css';

function CustomerMallList() {
  const { loading, data, error } = useQuery(GET_MALLS);
  const [locationFilter, setLocationFilter] = useState("")
  const [stores, setStores] = useState([])
  const [selectedMall, setSelectedMall] = useState("")

  const uniqueLocations = () => {
    let uniques = []
    data.malls.forEach(mall => {
      if (!uniques.includes(mall.location)) {
        uniques.push(mall.location)
      }
    });
    return uniques
  }

  const filterMalls = () => {
    let matchingMalls = []

    data.malls.forEach(mall => {
      if (locationFilter === mall.location) {
        matchingMalls.push(mall)
      }
    });

    return matchingMalls
  }

  const handleMallClick = (storeList, mallName) => {
    setStores(storeList)
    setSelectedMall(mallName)
  }

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error</div>
  }

  return (
    <>
      <Container fluid>
        <Col className="mall-list-container" lg={6} md={6}>
          <div className="mall-dropdown-container box">
            <Col className="mall-dropdown-box box">
              {/* <div className="box inline margin50"> */}
              <h2 className="center mall-list-title">Mall List</h2>
              {/* <div className="center"> */}
              {
                uniqueLocations().length === 0 ? (
                  <h3>No malls have been added yet!</h3>
                ) : (
                  <>
                    <h4 className="mall-list-filter">Filter by Location:</h4>
                    <DropdownButton id="dropdown-basic-button" title="Select a City">
                      {
                        uniqueLocations().map((uniqueLocation, index) => <Dropdown.Item href="#" key={index} onClick={() => { setLocationFilter(uniqueLocation) }}>{uniqueLocation}</Dropdown.Item>)
                      }
                    </DropdownButton>
                  </>
                )
              }
              {/* </div> */}
              {/* </div> */}
            </Col>

            <Col>
              <ol className="scrollBox list-numbers">
                {filterMalls().map((mall, index) => (
                  <li key={index}>
                    <IndividualMall {...mall} clickHandler={handleMallClick} />
                  </li>
                ))}
              </ol>
            </Col>
          </div>
        </Col>
      </Container>
      <CustomerStoreList stores={stores == null ? [] : stores} mallName={selectedMall} />
    </>
  );
}

export default CustomerMallList;
