import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import Ratings from './Ratings'

function RestaurantDetails() {
  const [details, setDetails] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
        .then(res => res.json())
        .then(data => setDetails(data.restaurants))
    }
    fetchData()


  }, [])
  console.log("res details", details);
  console.log("our id is ", id);
  const restaurantData = details.find(item => item.id == id)
  console.log("Our individual details are ", restaurantData);


  return (
    <>
        <Link className = "btn btn-outline-dark rounded my-2 mx-2 btn-sm" to='/'>Back</Link>
        {restaurantData ? (
          <Row className="my-3">
            <Col md={3}>
              <Image className="image" src={restaurantData.photograph} fluid />
            </Col>
            <Col md={4}>
              <ListGroup.Item>
                <h1>{restaurantData.name}</h1>
                <p>{restaurantData.neighborhood}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Cusine: {restaurantData.cuisine_type}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Address: {restaurantData.address}</p>
              </ListGroup.Item>
            </Col>
            <Col>
              <h3>Operating Hours: </h3>
              <p>Monday: {restaurantData.operating_hours.Monday}</p>
              <p>Tueday: {restaurantData.operating_hours.Tuesday}</p>
              <p>Wednesday: {restaurantData.operating_hours.Wednesday}</p>
              <p>Thursday: {restaurantData.operating_hours.Thursday}</p>
              <p>Friday: {restaurantData.operating_hours.Friday}</p>
              <p>Saturday: {restaurantData.operating_hours.Saturday}</p>
              <p>Sunday: {restaurantData.operating_hours.Sunday}</p>
            </Col>
            <Row>
              <Card>
                <Ratings data={restaurantData.reviews} />
              </Card>
            </Row>

          </Row>
        ) : null}
    </>
      )
}

      export default RestaurantDetails