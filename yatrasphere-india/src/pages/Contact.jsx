import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div style={{ paddingTop: 110, minHeight: '100vh', background: '#0a121c' }}>
      <Container className="pb-5">
        <Row className="g-5 align-items-center">
          <Col lg={5}>
            <h2 className="fw-bold mb-4" style={{ color: '#ff9933' }}>Let’s Plan Your Journey</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              Tell us where you want to go and our travel designers will get back to you with personalized options and pricing.
            </p>

            <div className="mt-4">
              <p className="mb-1" style={{ color: '#ff9933', fontWeight: 500 }}>📍 Studio</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Connaught Place, New Delhi, India</p>

              <p className="mb-1 mt-3" style={{ color: '#ff9933', fontWeight: 500 }}>✉️ Email</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>hello@saffronhorizons.in</p>

              <p className="mb-1 mt-3" style={{ color: '#ff9933', fontWeight: 500 }}>📞 Phone</p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>+91 98765 43210</p>
            </div>
          </Col>

          <Col lg={7}>
            <div className="glass-card p-4 p-md-5">
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control 
                      placeholder="Full Name" 
                      className="form-control-custom"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control 
                      type="email" 
                      placeholder="Email Address" 
                      className="form-control-custom"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control 
                      placeholder="Phone Number" 
                      className="form-control-custom"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Select className="form-control-custom">
                      <option>Select Interest</option>
                      <option>Golden Triangle</option>
                      <option>Kerala</option>
                      <option>Rajasthan</option>
                      <option>Himachal</option>
                      <option>Ladakh</option>
                      <option>Custom Tour</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12}>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      placeholder="Tell us about your travel plans, dates and preferences..." 
                      className="form-control-custom"
                    />
                  </Col>
                  <Col xs={12} className="text-center mt-3">
                    <Button className="btn-saffron px-5">Send Enquiry</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}