import {Tab, Tabs, Col, Row, Container} from 'react-bootstrap';


function ProdFeature() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-1 mt-5 bg-white"
      
    >
      <Tab eventKey="home" style={{ minHeight: "39rem" }} title="Features" className="pt-2 mb-5 bg-white">
      <Container >
              <Col>
                <Row>
                  <div className="d-inline-block" style={{ width: "18%" }}>
                    <div className="featureTitle text-nowrap text-end">Size:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "82%" }}
                  >
                    <b>
                    Adult S/M/L  
                    </b>
                    
                  </div>
                </Row>

                <hr
                width="80%" className="me-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr> 

                <Row className="mt-1">
                  <div className="d-inline-block" style={{ width: "18%" }}>
                    <div className="featureTitle  me-1 text-nowrap text-end">Country:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "82%" }}
                  >
                    <b>Made in USA</b>
            
                  </div>
                </Row>

                <hr
                width="80%" className="me-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr> 

                <Row className="mt-1">
                  <div className="d-inline-block" style={{ width: "18%" }}>
                    <div className="featureTitle  me-1 text-nowrap text-end">Dimensions:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "82%" }}
                  >
                     <p>Lens width: 14cm</p>
                     <p>Bridge width: 6cm</p>
                  </div>
                </Row>


                <hr
                width="80%" className="me-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr>

                <Row className="mt-1">
                  <div className="d-inline-block" style={{ width: "18%" }}>
                    <div className="featureTitle  me-1 text-nowrap text-end">Protection:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "82%" }}
                  >
                     <b>UV Protection</b>
                     
                  </div>
                </Row>

                <hr
                width="80%" className="me-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr>

                <Row className="mt-1">
                  <div className="d-inline-block" style={{ width: "18%" }}>
                    <div className="featureTitle  me-1 text-nowrap text-end">Frame Material:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "82%" }}
                  >
                     <b>Polycarbonate plastic</b>
                     
                  </div>
                </Row>

                <hr
                width="80%" className="me-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr>

                <Row className="mt-1 mb-5">
                  <div className="d-inline-block" style={{ width: "18%" }}>
                    <div className="featureTitle  me-1 text-nowrap text-end">Strap Type:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "82%" }}
                  >
                     <b>Adjustable silicone</b>
                     
                  </div>
                </Row>
              </Col>
            </Container>
      </Tab>
      <Tab eventKey="About Product" title="About Product" className="bg-white">
     <p className=' w-50 text-start text-justify pt-3'>Our new swim goggles are designed for superior vision and ultimate comfort during your swim workouts or competitions. The lenses are made from polycarbonate plastic which provides excellent optical clarity and 100% UV protection.</p>
     <p className=' w-50 text-start text-justify'>The goggles feature a curved lens shape that provides a wide field of vision with minimal distortion. This allows you to maintain proper sight of the walls and other swimmers during lap swimming. The lenses also have an anti-fog coating to prevent fogging from your breathing during freestyle laps.</p>
     <p className=' w-50 text-start text-justify'>The goggles have a low profile design that sits close to the face for a secure and leak-proof fit. The strap is made from durable yet comfortable silicone that can be easily adjusted for your ideal tightness. Multiple nose bridge sizes are included so you can customize the fit.</p>
     <p className=' w-50 text-start text-justify'>Our swim goggles are designed to last through countless hours of training. The lenses and straps are chlorine-resistant to prevent degradation. All components are also latex-free and hypoallergenic.</p>
     <p className=' w-50 text-start text-justify'>For ideal performance, our swim goggles feature a dual headstrap design that keeps the goggles securely in place, even during the most vigorous swimming and flip turns. This prevents the goggles from shifting or coming off.</p>
     <p className=' w-50 text-start text-justify'>The lens shape and nose bridge create an enclosed eye chamber when worn to prevent water from leaking in. Our goggles provide a reliable watertight seal for clear vision lap after lap.</p>
     <p className=' w-50 text-start text-justify'>All of our swim goggles are manufactured under strict quality control standards. We only use durable materials built to withstand years of regular pool use. While some goggles may look similar, ours provide unmatched quality and durability.</p>
     <p className=' w-50 text-start text-justify'>Our goal is to provide competitive and fitness swimmers with goggles they can rely on. We want swimming and racing to be enjoyable, not a struggle with poorly designed eyewear. Give our goggles a try for your next workout and we're confident you'll be impressed!</p>

       
</Tab>
      
    </Tabs>
  );
}

export default ProdFeature;