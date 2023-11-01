import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";

function Career() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/">
                  {" "}
                  <Card.Img variant="top" src="./image/car1.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Top Product-Based Companies for Digital Marketers
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Selecting the right launchpad for a successful career in
                    digital marketing isn’t just about joining
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/"
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    READ MORE »
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  12 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/career-opportunities-in-digital-marketing/">
                  {" "}
                  <Card.Img variant="top" src="./image/car2.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Career Opportunities in Digital Marketing | Digital
                    Marketing Career
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    As we move forward in today’s digital age, the need for
                    businesses to engage with
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/career-opportunities-in-digital-marketing/"
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    READ MORE »
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  5 August 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/product-based-companies-for-ui-ux-designing/">
                  <Card.Img variant="top" src="./image/all4.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    8 Excellent Product-based Companies for UI/UX Designing
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    In today’s tech-driven world, the demand for exceptional
                    user experiences has never been higher. From
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/product-based-companies-for-ui-ux-designing/"
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    READ MORE »
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  12 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/cloud-computing-career-roadmap/">
                  {" "}
                  <Card.Img variant="top" src="./image/car4.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Effective Cloud Computing Career Roadmap 2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Have you ever wondered how to turn your passion for cloud
                    computing into a thriving career? Are you curious to know
                    the steps to navigate the field of cloud computing
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/cloud-computing-career-roadmap/"
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    READ MORE »
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  26 September 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/python-job-opportunities/">
                  {" "}
                  <Card.Img variant="top" src="./image/car5.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Python Job Opportunities 2023: What Are The Career
                    Opportunities After Learning Python?
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Interested in Python job opportunities? Good call. To say
                    that the Python job outlook is positive will be an
                    understatement. As its popularity is rising, the demand for
                    Python
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/python-job-opportunities/"
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    READ MORE »
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  14 September 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/essential-skills-for-a-successful-automation-tester/">
                  {" "}
                  <Card.Img variant="top" src="./image/car6.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    The 8 Essential Skills for a Successful Automation Tester
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Being able to automate tasks is one of the most revered
                    skills in the tech industry, especially if it involves
                    streamlining the rigorous software testing processes
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/essential-skills-for-a-successful-automation-tester/"
                    style={{
                      textAlign: "left",
                      color: "green",
                      fontSize: "small",
                    }}
                  >
                    READ MORE »
                  </a>
                </Card.Body>
                <Card.Footer className="text-muted">
                  13 September 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Career;
