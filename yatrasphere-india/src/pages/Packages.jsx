import { Container, Row, Col, Button } from 'react-bootstrap'

const packages = [
  { title: 'Golden Triangle Classic', days: '6 Days / 5 Nights', price: '₹28,999', places: 'Delhi • Agra • Jaipur', desc: 'The perfect introduction to North India’s iconic heritage.' },
  { title: 'Kerala Backwater Bliss', days: '7 Days / 6 Nights', price: '₹34,500', places: 'Kochi • Munnar • Alleppey • Kovalam', desc: 'Houseboats, tea gardens, Ayurveda and beaches.' },
  { title: 'Rajasthan Royalty', days: '9 Days / 8 Nights', price: '₹42,500', places: 'Jaipur • Jodhpur • Udaipur • Jaisalmer', desc: 'Palaces, forts, desert camps and royal hospitality.' },
  { title: 'Himachal Delight', days: '8 Days / 7 Nights', price: '₹31,999', places: 'Shimla • Manali • Dharamshala', desc: 'Hill stations, snow peaks and mountain culture.' },
  { title: 'Spiritual North', days: '7 Days / 6 Nights', price: '₹29,999', places: 'Haridwar • Rishikesh • Varanasi', desc: 'Ganga Aarti, yoga, temples and timeless rituals.' },
  { title: 'Ladakh Adventure', days: '8 Days / 7 Nights', price: '₹48,999', places: 'Leh • Nubra Valley • Pangong Lake', desc: 'High-altitude lakes, monasteries and dramatic landscapes.' },
]

export default function Packages() {
  return (
    <div style={{ paddingTop: 110, minHeight: '100vh', background: '#0a121c' }}>
      <Container className="pb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#ff9933' }}>Tour Packages</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>All packages can be customized according to your preferences</p>
        </div>

        <Row className="g-4">
          {packages.map((pkg, i) => (
            <Col md={6} lg={4} key={i}>
              <div className="glass-card p-4 h-100 d-flex flex-column">
                <h4 style={{ color: '#ff9933' }}>{pkg.title}</h4>
                <p className="mb-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{pkg.days}</p>
                <p className="small mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{pkg.places}</p>
                <p className="small mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>{pkg.desc}</p>
                <h3 className="mt-auto mb-3" style={{ color: '#fff' }}>{pkg.price}</h3>
                <Button className="btn-saffron w-100">Enquire Now</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}