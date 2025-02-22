
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carouse() {

    return (
      <>
        <Carousel>
      <Carousel.Item interval={1000}>
      <img src="https://wallpaperaccess.com/full/5097458.jpg" alt=""  style={{width:"100%", height:"600px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://wallpaperaccess.com/full/1209397.jpg" alt=""  style={{width:"100%", height:"600px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://wallpapercave.com/wp/wp4430570.jpg" alt=""  style={{width:"100%", height:"600px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </>
    )
  }
  
  export default Carouse