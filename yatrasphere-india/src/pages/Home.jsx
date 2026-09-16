import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Background3D from '../components/Background3D'

export default function Home() {
  return (
    <>
      <Background3D />

      {/* HERO */}
      <section className="min-vh-100 d-flex align-items-center" style={{ paddingTop: 90 }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <p className="mb-3" style={{ color: '#ff9933', fontWeight: 500 }}>Bespoke Indian Journeys</p>
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#fff', lineHeight: 1.2 }}>
                Experience the<br />
                <span style={{ color: '#ff9933' }}>Soul of India</span>
              </h1>
              <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.88)', maxWidth: 520 }}>
                From the snow-capped Himalayas to the backwaters of Kerala, from royal Rajasthan to spiritual Varanasi — we craft unforgettable journeys across Incredible India.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button as={Link} to="/packages" className="btn-saffron">Explore Packages</Button>
                <Button as={Link} to="/destinations" variant="outline-light" style={{ borderRadius: 50, padding: '12px 28px' }}>
                  View Destinations
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHY US */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: '#ff9933' }}>Why Travel With Saffron Horizons</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Premium experiences crafted by local experts</p>
          </div>
          <Row className="g-4">
            {[
              { title: "Local Experts", desc: "Our team lives and breathes India. Every itinerary is designed by people who know the destinations deeply." },
              { title: "Fully Customizable", desc: "No rigid packages. We shape every journey around your pace, interests and budget." },
              { title: "Handpicked Stays", desc: "From heritage havelis to luxury jungle lodges — only the best properties make our list." },
              { title: "24/7 Support", desc: "Dedicated travel concierge from the moment you book until you return home." },
            ].map((item, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="glass-card p-4 h-100">
                  <h5 style={{ color: '#ff9933' }}>{item.title}</h5>
                  <p className="mb-0" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* DESTINATIONS PREVIEW */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0" style={{ color: '#ff9933' }}>Popular Destinations</h2>
            <Button as={Link} to="/destinations" variant="outline-light" size="sm">View All</Button>
          </div>
          <Row className="g-4">
            {[
              { name: "Rajasthan", tag: "Royal Heritage", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=700" },
              { name: "Kerala", tag: "God's Own Country", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700" },
              { name: "Himachal Pradesh", tag: "Mountain Escape", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700" },
              { name: "Goa", tag: "Beaches & Vibes", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700" },
            ].map((place, i) => (
              <Col md={6} lg={3} key={i}>
                <Card className="border-0 overflow-hidden h-100">
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img src={place.img} alt={place.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ color: '#fff' }}>{place.name}</Card.Title>
                    <Card.Text style={{ color: '#ff9933' }}>{place.tag}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: '#ff9933' }}>Featured Packages</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Carefully designed journeys ready to book</p>
          </div>
          <Row className="g-4">
            {[
              { title: "Golden Triangle", days: "6 Days", price: "₹28,999", places: "Delhi • Agra • Jaipur" },
              { title: "Kerala Backwaters", days: "7 Days", price: "₹34,500", places: "Kochi • Munnar • Alleppey" },
              { title: "Rajasthan Royal", days: "9 Days", price: "₹42,500", places: "Jaipur • Jodhpur • Udaipur" },
              { title: "Himachal Delight", days: "8 Days", price: "₹31,999", places: "Shimla • Manali • Dharamshala" },
            ].map((pkg, i) => (
              <Col md={6} lg={3} key={i}>
                <div className="glass-card p-4 h-100 d-flex flex-column">
                  <h5 style={{ color: '#ff9933' }}>{pkg.title}</h5>
                  <p className="mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{pkg.days}</p>
                  <p className="small mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>{pkg.places}</p>
                  <h4 className="mt-auto mb-3" style={{ color: '#fff' }}>{pkg.price}</h4>
                  <Button as={Link} to="/packages" className="btn-saffron w-100">View Details</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-3" style={{ color: '#ff9933' }}>Ready to Explore India?</h2>
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto' }}>
            Share your travel dates and preferences. Our experts will create a personalized itinerary for you.
          </p>
          <Button as={Link} to="/contact" className="btn-saffron px-5">Plan My Trip</Button>
        </Container>
      </section>
    </>
  )
}