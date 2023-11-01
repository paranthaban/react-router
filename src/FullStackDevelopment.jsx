import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";

function FullStackDevelopment() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/top-full-stack-developer-tools/">
                  <Card.Img variant="top" src="./image/fsd1.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    The Top 10 Tools Every Full Stack Developer Should Master in
                    2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    ‍As a full stack developer, having the right set of tools is
                    crucial for your
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/top-full-stack-developer-tools/"
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
                <a href="https://www.guvi.in/blog/top-must-know-full-stack-development-applications/">
                  <Card.Img variant="top" src="./image/fsd2.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    The Ultimate Guide to Real-World Full Stack Development
                    Applications
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Full stack development has become increasingly popular in
                    recent years, with companies seeking professionals who
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/top-must-know-full-stack-development-applications/"
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
                <a href="https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/">
                  <Card.Img variant="top" src="./image/fsd3.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Best Ways to Learn Full Stack Development in 2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Full stack development is and will be a promising and an
                    in-demand career in the
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/"
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
                  4 August 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/">
                  <Card.Img variant="top" src="./image/fsd4.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    How Long Would It Take to Be a Full Stack Developer?
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Have you ever wondered how much time it would take to become
                    a skilled Full Stack Developer, capable of creating awesome
                    websites and web applications? Whether you’re already
                    familiar with coding or just starting, you might be
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/"
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
                  4 August 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/">
                  <Card.Img variant="top" src="./image/fsd5.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Top Skills To Become a Full Stack Developer in 2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Are you interested in becoming a great full-stack developer?
                    If so, then you’re at the right place! In this comprehensive
                    guide,
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/"
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
                  3 August 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/top-full-stack-development-webinars-and-workshops/">
                  <Card.Img variant="top" src="./image/fsd6.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Top Full Stack Development Webinars and Workshops
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    Are you keen to elevate your web development skills and
                    master the art of Full
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/top-full-stack-development-webinars-and-workshops/"
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
                  29 July 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default FullStackDevelopment;
