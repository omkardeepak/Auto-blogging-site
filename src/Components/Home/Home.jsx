import React from 'react'
import image from "../../Assets/350z-cars-coupe-japan-wallpaper-preview.jpg"
import './Home.css'
 function Home(){
   return(
   <div>
      <div className='body_div'>
         <img src={image} className='bg_img'></img>
         <div className='title_div'><b><i>TORQUETALKS </i></b>
         </div>
         <div className='landing_div'><p>
            Welocme to TORQUETALKS !</p>
            <br></br>
            <p>Blogging platform for automobile enthusiasts.
            </p>
            <br></br>
            <p className='quote'>"Driven by passion, powered by words."
            </p>
         </div>
      </div>
      <div className='latest_div'>
         <div className='latestblog'>Latest Blogs</div>
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      xcxcv
    </div>
    <div class="carousel-item">
      xcv
    </div>
    <div class="carousel-item">
      xcv
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
   </div>
      
   )
}
  export default Home;