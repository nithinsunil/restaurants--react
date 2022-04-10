import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'

function Home() {
const[hotel, setHotel] = useState([])
useEffect(() => {
  const fetchData = async () => {
    await fetch('/restaurants.json')
    .then(data=> data.json())
    .then(data=> setHotel(data.restaurants))
  }
  fetchData();
}, [])
console.log("Data is ", hotel);
  return (
  <Row>
    {hotel.map(item => (
      <Col sm={12} md={8} lg={4} xl={3}>
      <RestaurantCard data = {item} />
      </Col>
    ))}
  </Row>  
  )
}

export default Home