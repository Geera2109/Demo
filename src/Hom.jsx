import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Form, Link } from 'react-router-dom';


function Hom() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed bg-black" style={{position:"fixed", width:"100%"}}>
        <a class="navbar-brand" href="#">
          <img style={{ width: '5rem' }} src="SWEET.png" alt='' className='logo' />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div style={{ justifyContent: 'center', marginLeft: "1%" }} class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li style={{ margin: '0px 10px' }} class="nav-item active">
              <a style={{ color: 'white' }} class="nav-link" href="">HOME</a>
            </li>
            <li style={{ margin: '0px 20px' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link" href="About">ABOUT US</a>
            </li>
            <li style={{ margin: '0px 20px' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link disabled" href="Categories">CATEGORIES</a>
            </li>
            <li style={{ margin: '0px 20px' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link" href="Gallery">GALLERY</a>
            </li>
            <li style={{ margin: '0px 20px' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link" href="Videos">VIDEOS</a>
            </li>
            <li style={{ margin: '0px 20px' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link" href="Products">PRODUCTS</a>
            </li>
            <li style={{ margin: '0px 20px', color: 'white' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link" href="Contact">CONTACT US</a>
              {/* <Link className='Links' to="/Feed" style={{textDecoration:"none"}}>
                                Home
                            </Link> */}
            </li>
            <li style={{ margin: '0px 20px' }} class="nav-item">
              <a style={{ color: 'white' }} class="nav-link" href="feed">REVIEW</a>
            </li>

          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit" style={{ color: "white" }}>
              Search
            </button>
          </form>

        </div>
      </nav>


      
      <Carousel activeIndex={index} onSelect={handleSelect} style={{zIndex:"-1"}}>

        <Carousel.Item style={{height:"85vh",marginTop:"80px"}}>
          <img
            className="d-block w-100"
            src="black.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
           
            <img  src="most.png" alt='' style={{position:"relative",width:"800px",marginLeft:"-60%",marginBottom:"5%"}}/>
            <h2 className='big' style={{marginTop:"-36%",marginLeft:"65%",fontSize:"65px",width:"440px"}}><b style={{ color :"red"}}>Welcme</b> to the <br></br> world of&nbsp;Testy & Fresh Snacks. </h2>
       
          </Carousel.Caption>
        </Carousel.Item>




        <Carousel.Item style={{height:"85vh" ,marginTop:"80px"}}>
          <img
            className="d-block w-100"
            src="black.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img  src="su.png" alt='' style={{position:"relative",width:"500px",marginLeft:"-80%",marginBottom:"-10%"}}/>
            <h2 className='big' style={{marginTop:"-33%",marginLeft:"56%",fontSize:"66px",width:"650px"}}>Treat Your  Tastebuds With Our Farsans</h2>
            <img  src="d.png" alt='' style={{position:"relative",width:"350px",marginLeft:"-72%",marginBottom:"20%"}}/>
            <img  src="chip.png" alt='' style={{position:"relative",width:"300px",marginLeft:"-28%",marginBottom:"-30%"}}/>

          </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item style={{height:"85vh" ,marginTop:"80px"}}>
          <img
            className="d-block w-100"
            src="black.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img  src="kaju.png" alt='' style={{position:"relative",width:"500px",marginLeft:"-76%",marginBottom:"-17%"}}/>
            <h2 className='big' style={{marginTop:"-33%",marginLeft:"66%",fontSize:"66px",width:"500px"}}>Snacks that Makes Mouths Happy</h2>
            <img  src="pen.png" alt='' style={{position:"relative",width:"350px",marginLeft:"-68%",marginBottom:"10%"}}/>
            <img  src="ladu.png" alt='' style={{position:"relative",width:"320px",marginLeft:"-31%",marginBottom:"-38%"}}/>

          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>


      <div>
      <img  src="home.png" alt='' style={{marginLeft:"55%",marginTop:"5%",position:"relative", zIndex:"-1"}}/> 
      <div style={{fontSize:"40px",marginTop:"-27%",marginLeft:"6%"}}><b><span style={{color:"red", fontSize:"40px"}}>Welcome To</span> Sweet Bakery</b></div>
      </div>
      <div style={{fontSize:"20px",marginLeft:"6%",marginTop:"20px"}}><b>Little Story</b></div>
      <p style={{width:"400px",marginLeft:"6%",marginTop:"15px"}}>Article evident arrived express highest men did boy.
Mistress sensible entirely am so. Quick can manor smart
money hopes worth too. comfort produce husband boy
her had hearing. Law other theirs passed buut wishes. you
day real less till dear read. Considered use dispatched
melancholy sympathize discretion led. Oh feel if up to till like</p>
<button style={{marginLeft:"6%",marginTop:"15px"}}> <span>Contact Us</span>
</button>

<div>
<img  src="sna.jpg" alt='' style={{width:"100%",height:"300px",marginTop:"4%"}}/>
<p style={{marginTop:"-10%",zIndex:"-1",fontSize:"23px",color:"gray",marginLeft:"13%"}}>"Massive Variety of fast food. The wide selection of goods available at fast food restaurants is another perk."</p>
<div style={{textAlign:"center",fontSize:"25px",color:"white",marginTop:"24px"}}> Sweet Bakery</div>
</div>

<div>
    
</div>
    </>

    
  );
}

export default Hom;
