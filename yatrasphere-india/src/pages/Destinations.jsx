import { Container, Row, Col, Card } from 'react-bootstrap'

const places = [
  { name: 'Taj Mahal, Agra', tag: 'Iconic Wonder', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700' },
  { name: 'Jaipur', tag: 'Pink City', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=700' },
  { name: 'Udaipur', tag: 'City of Lakes', img: 'https://images.unsplash.com/photo-1599661046223-e066abac4112?w=700' },
  { name: 'Jaisalmer', tag: 'Golden City', img: 'https://images.unsplash.com/photo-1596176068289-3633c0c8c0c0?w=700' },
  { name: 'Kerala Backwaters', tag: 'Serene Waters', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700' },
  { name: 'Munnar', tag: 'Tea Gardens', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700' },
  { name: 'Ladakh', tag: 'High Himalayas', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700' },
  { name: 'Manali', tag: 'Mountain Paradise', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700' },
  { name: 'Varanasi', tag: 'Spiritual Capital', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700' },
  { name: 'Rishikesh', tag: 'Yoga Capital', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700' },
  { name: 'Goa', tag: 'Beaches & Nightlife', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700' },
  { name: 'Andaman', tag: 'Tropical Escape', img: 'https://images.unsplash.com/photo-1586500036706-41963de4c2cc?w=700' },
]

export default function Destinations() {
  return (
    <div style={{ paddingTop: 110, minHeight: '100vh', background: '#0a121c' }}>
      <Container className="pb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#ff9933' }}>Explore Destinations</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Discover the many faces of Incredible India</p>
        </div>

        <Row className="g-4">
          {places.map((p, i) => (
            <Col md={6} lg={3} key={i}>
              <Card className="border-0 overflow-hidden h-100">
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={p.img} alt={p.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <Card.Body>
                  <Card.Title style={{ color: '#fff' }}>{p.name}</Card.Title>
                  <Card.Text style={{ color: '#ff9933' }}>{p.tag}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}