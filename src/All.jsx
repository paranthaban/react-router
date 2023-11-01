import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";

function All() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="card">
                <a href="https://www.guvi.in/blog/product-based-companies-for-motion-graphic-designing/">
                  <Card.Img variant="top" src="./image/all1.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    Best Cloud Computing Books That You Shouldn’t Miss in 2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    No matter how much technology evolves or how digital the
                    world gets, reading books can..
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/product-based-companies-for-motion-graphic-designing/"
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
                  26 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/best-digital-marketing-books/">
                  <Card.Img variant="top" src="./image/all2.png" />
                </a>
                <Card.Body>
                  <Card.Title>7 Best Digital Marketing Books 2023</Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    In today’s digital age, where online presence and marketing
                    are very important, gaining expertise in digital marketing
                    is more important than ever. To gain this expertise, digital
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/best-digital-marketing-books/"
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
                  26 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/product-based-companies-for-digital-marketers/">
                  <Card.Img variant="top" src="./image/all3.png" />
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
                    href="https://www.guvi.in/blog/product-based-companies-for-digital-marketers/"
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
                  25 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={3} className="g-4">
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
                <a href="https://www.guvi.in/blog/how-to-hire-a-full-stack-developer/">
                  <Card.Img variant="top" src="./image/all5.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    How to Hire a Full-Stack Web Developer in 2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    In today’s digital age, a strong brand presence in digital
                    platforms is crucial for the success of businesses and
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/how-to-hire-a-full-stack-developer/"
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
                  04 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>

            <Col>
              <Card>
                <a href="https://www.guvi.in/blog/ways-companies-are-attracting-tech-talent/">
                  <Card.Img variant="top" src="./image/all6.png" />
                </a>
                <Card.Body>
                  <Card.Title>
                    7 Unique Ways Companies Are Attracting Tech Talent in 2023
                  </Card.Title>
                  <Card.Text style={{ fontSize: "small" }}>
                    In today’s highly competitive job market, attracting and
                    retaining top tech talent has become a
                  </Card.Text>
                  <a
                    href="https://www.guvi.in/blog/ways-companies-are-attracting-tech-talent/"
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
                  04 October 2023 No Comments
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default All;
