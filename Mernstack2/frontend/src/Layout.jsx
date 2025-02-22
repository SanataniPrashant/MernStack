import { Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

import Top from "./components/Navbar";
import Bottom from "./components/Bottom";


function Layout() {

    return (
      <>
        <Top/>

        <div>
          <Outlet/>
        </div>
        <div  style={{display:"grid", gridTemplateColumns:"auto auto auto auto", marginLeft:"35px" , padding:"20px"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '300px' }} src="https://down-my.img.susercontent.com/file/sg-11134201-7qvd8-lhguej3gprbn21" />
      <Card.Body>
        <Card.Title>Bhagwat Geeta</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://tse2.mm.bing.net/th?id=OIP.JB0IQ8uf0-4sgOkCY2sj_QHaJw&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Ramayan</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://cloudfront.penguin.co.in/wp-content/uploads/2021/12/9789353490973.jpg" />
      <Card.Body>
        <Card.Title>Mahabharat</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://tse4.mm.bing.net/th?id=OIP.Ekb-9LilnQGzGiRWa_SVDgHaLp&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>The Book theif</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://tse2.mm.bing.net/th?id=OIP.buym5iuffF-gqHRIid0cwwHaLh&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>The Relativity</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://tse3.mm.bing.net/th?id=OIP.tbmz3BH-Wro0oAXiEacgCQAAAA&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Gaban</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://tse2.mm.bing.net/th?id=OIP.vOm1n0B9fEPheYup7t6xhgHaLH&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Godaan</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ height: '300px' }} src="https://tse4.mm.bing.net/th?id=OIP.46lb5QXWIX_-AlSF0iO3MwHaHa&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Manto</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>




        </div>



        <Bottom/>

      </>
    )
  }
  
  export default Layout