import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import ecoom from '../images/ecoom.png'
import location from '../images/location.png'
import bluetooth from '../images/bluetooth.png'

import StyledCard from "./StyledCard";

export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  console.log(mainProjects, "Ajeeet main project");
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const customProjects = [
    {
      id: 1,
      image: ecoom,
      name: 'MobileShop – A React Native eCommerce Application',
      description: 'Elevate your shopping experience with my ultra-responsive React Native WooCommerce App, expertly optimized for speed with Redux, FlatList, and local storage integration, ensuring lightning-fast product browsing and seamless order management',
      html_url: 'http://link_to_project_1',
      homepage: 'http://link_to_homepage_1',
    },
    {
      id: 2,
      image: location,
      name: 'React Native Location Tracking App',
      description: 'Experience precision and speed with TrackFast, a React Native location tracking app. Engineered for optimal performance, it utilizes advanced geolocation features, efficient state management through Redux, and smooth UI updates, ensuring real-time tracking accuracy and responsiveness',
      html_url: 'http://link_to_project_2',
      homepage: 'http://link_to_homepage_2',
    },
    {
      id: 3,
      image: bluetooth,
      name: 'React Native Bluetooth Classic Communication App',
      description: 'Dive into seamless communication with our React Native Bluetooth Classic App. Engineered for reliability, it leverages Bluetooth Classic technology for efficient device-to-device communication. The app ensures optimal performance',
      html_url: 'http://link_to_project_2',
      homepage: 'http://link_to_homepage_2',
    },
    // ... other project objects
  ];
  
  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          {mainProjects.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {customProjects.map(function ({
                  id,
                  image,
                  name,
                  description,
                  html_url,
                  homepage,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        image={image}
                        name={name}
                        description={description}
                        url={html_url}
                        demo={homepage}
                      />
                    </Col>
                  );
                })}
              </Row>
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  {/* <Link to="/All-Projects">
                    <Button
                      size="lg"
                      variant={
                        theme === "light" ? "outline-dark" : "outline-light"
                      }
                    >
                      All <Icon icon="icomoon-free:github" /> Projects
                    </Button>
                  </Link> */}
                </Container>
              )}
            </>
          )}
        </Container>
      </section>
    </Element>
  );
}
