import Carousel from 'react-bootstrap/Carousel';

const Carousels = ()=>{
    return (
        <>
            <Carousel>
      <Carousel.Item>
        <img className='car' src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <Carousel.Caption>
          <h3>Blue Bmw Sedan Near Green Lawn Grass</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='car' src="https://images.pexels.com/photos/14055741/pexels-photo-14055741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <Carousel.Caption>
          <h3>Black Mercedes Benz Car Parked on Road Side</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='car' src="https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <Carousel.Caption>
          <h3>White Mercedes Benz Convertible Coupe</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Carousels