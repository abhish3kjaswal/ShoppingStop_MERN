import React from 'react'
import { Card, Carousel } from 'react-bootstrap'

const FirstPart = ({ pro }) => {
  const products = []
  pro.map((prod, index) => {
    products[index] = prod
  })

  console.log(products)

  return pro.map((product, index) => (
    <Card>
      <Card.Body>
        <Carousel>
          <Carousel.Item key={1}>
            <img
              className="d-block w-100"
              src={product.image}
              alt="First slide"
              style={{ height: '500px', 'object-fit': 'contain' }}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              {/* <p>{products[0].brand}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item key={2}>
            <img
              className="d-block w-100"
              src={product.image}
              alt="First slide"
              style={{ height: '500px', 'object-fit': 'contain' }}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              {/* <p>{products[0].brand}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card.Body>
    </Card>
  ))
}

export default FirstPart
