import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (<Col>
    <Row><h2 className='d-block'>Company name</h2></Row>
    <hr width={'92%'} className='mx-auto'></hr>
    <Row> <p className='about-text ms-4'>At AthleticMart, we are passionate about sports and athletics. Founded in 2018 by John Smith, our mission is to provide high-quality, innovative athletic gear to help you train harder, swim faster, and become the best athlete you can be.

We specialize in equipment for martial arts, swimming, and other demanding physical activities. Our product lines include gloves, pads, protective gear, fins, goggles, wetsuits, and more. Everything we sell is rigorously tested by athletes to ensure it meets the highest standards for safety, comfort, and performance.

Our team includes former athletes, coaches, and gear specialists. We know first-hand the difference that quality equipment can make in powering personal bests. We strive to offer unbeatable value on the most cutting-edge athletic products available.

At AthleticMart, achieving your athletic potential is our passion. Let us help you reach new heights. We'll provide the gear to get you there.

Please let me know if you would like me to modify or expand this sample about us text in any way. I'm happy to tailored it to your specific needs.</p>
</Row>
            <Container>
              <Col>
                <Row>
                  <div className="d-inline-block text-end" style={{ width: "21%" }}>
                    <div className="pgTitle me-1 text-nowrap">Email:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "79%" }}
                  >
                    <ul>
                    <li>info@yourcompany.com</li>
                    <li>sales@yourcompany.com</li>
                    <li>support@yourcompany.com</li>
                    </ul>
                    
                  </div>
                </Row>
                <Row className="mt-1">
                  <div className="d-inline-block text-end" style={{ width: "21%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Address:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "79%" }}
                  >
                    <b>123 Main Street, City, State 12345</b>
                    <small className="d-block text-muted">
                    United States of America</small>
                  </div>
                </Row>
                <Row className="mt-1">
                  <div className="d-inline-block text-end" style={{ width: "21%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Hours of Operation:</div>
                  </div>
                <div
                    className="d-inline-block text-start"
                    style={{ width: "79%" }}
                  >
                    <ul>
                        <li>Monday - Friday: 9am - 5pm</li>
                        <li> Saturday: 10am - 2pm</li>
                        <li> Sunday: Closed</li>
                    </ul>
                </div>
                </Row>
                <Row className="mt-1">
                  <div className="d-inline-block text-end" style={{ width: "21%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Social:</div>
                  </div>
                  <div
                    className="d-inline-block text-start ps-3"
                    style={{ width: "79%" }}
                  >
                    <FontAwesomeIcon className='mx-2' icon={faFacebook} />
                    <FontAwesomeIcon className='mx-2' icon={faTelegram} />
                    <FontAwesomeIcon className='mx-2' icon={faInstagram} />
                    <FontAwesomeIcon className='mx-2' icon={faTwitter} />
                  </div>
                </Row>
              </Col>
            </Container>
    </Col>
  )
}

export default About