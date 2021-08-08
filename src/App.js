import logo from './logo.svg';

import classes from './App.module.css';
import ProductData from './ProductData.js';

function App(){
  const Hours = new Date().getHours() >9?new Date().getHours(): '0'+new Date().getHours();
  const Minutes = new Date().getMinutes() >9?new Date().getMinutes(): '0'+new Date().getMinutes();
  return(
    <div className="App">
      <header className="App-header">
       <nav className={classes.Topbar}>
         <img src="http://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt="Amazon logo"/>
       </nav>
      </header>
   <div className={classes.MainContainer}> 
    <div className={classes.ProductPreview}>
      <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
      {/*<div className={classes.TimeSection}>
         <p>{`${ Hours}:${Minutes}`}</p>
      </div>*/}
      <div className={classes.HeartBeatSection}>
      <i class="fas fa-heart"></i>
      <p>78</p>
      </div>
    </div>
  <div className={classes.ProductData}>
  <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
  <p className={classes.ProductDescription}>{ProductData.description}</p>
  <h3 className={classes.SectionHeading}>Select Color</h3>
  <div>
     <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black color Watch"/>
     <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red color Watch"/>
     <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue color Watch"/>
     <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple color Watch"/>
   </div>
   <h3 className={classes.SectionHeading}>Features</h3>
   <div>
     <button className={[classes.FeatureItem,classes.SelectedItemFeature].join(' ')}>Time</button>
     <button className={[classes.FeatureItem,classes.SelectedItemFeature].join(' ')}>Heart Rate</button>
   </div>
   <button className={classes.PrimaryButton}>Buy Now</button>
  </div>
   </div>
  </div>  
  );
}

export default App;
