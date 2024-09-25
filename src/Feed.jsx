import React from 'react'
import './Feed.css'

function Feed() {
  return (
    <div>


<nav class="navbar navbar-expand-lg navbar-light fixed bg-black" style={{position:"fixed", width:"100%",marginTop:"-8%"}}>
        <a class="navbar-brand" href="#">
          <img style={{ width: '5rem' }} src="SWEET.png" alt='' className='logo' />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div style={{ justifyContent: 'center', marginLeft: "1%" }} class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li style={{ margin: '0px 10px' }} class="nav-item active">
              <a style={{ color: 'white' }} class="nav-link" href="Hom">HOME</a>
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

      <div className="wrap" style={{marginTop:"8%"}}>
      <h1>Feedback Form</h1>
      <form action="" method="">
        <table>
          <tbody>
            <tr>
              <td style={{ color: "rgb(242, 203, 203)" }}>
                <label>How do you rate your overall experience</label>
                <br />
                <input type="radio" name="rate" value="bad" /> Bad
                <input type="radio" name="rate" value="average" /> Average
                <input type="radio" name="rate" value="good" /> Good
              </td>
            </tr>
            <tr style={{ color: "rgb(242, 203, 203)" }}>
              <td>
                <label>Fullname*</label>
                <br />
                <input type="text" name="Fullname" className="txt" />
              </td>
              <td>
                <label>Email*</label>
                <br />
                <input type="text" name="Email" className="txt" />
              </td>
              <td className="t1">
                <label>Age*</label>
                <br />
                <input type="text" name="Age" className="txt" />
              </td>
              <td>
                <label>Phone*</label>
                <br />
                <input type="text" name="Phone" className="txt" />
              </td>
            </tr>
            <tr style={{ color: "rgb(242, 203, 203)" }}>
              <td colSpan={4}>
                <label>Message</label>
                <br />
                <textarea className="txtarea" defaultValue="" />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <div className="btns">
                  <button type="submit">
                    <b>Submit</b>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      </div>





    </div>
  )
}

export default Feed