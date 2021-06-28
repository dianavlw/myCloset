*::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

/* ############### LOGIN COMPONENT ########### */
.signInPage{
  background-size: cover;
  height: 100vh;
  background:rgb(77, 224, 235);
  overflow: hidden;
}

.login-logoimg {
  float: right;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.sign-logoimg {
  position: fixed;
  padding-right: 20px;
  display: inline-flex;
  margin-top: 9%;
  margin-left: 20%;
  max-width: 45%;
  top: 0;
  left: 0;
}

.sign-list-inline-item {
  padding: 5%;
}

.login-component {
  position: fixed;
  top: 35%;
  left: 20%;
  width: auto;  
  height: 100%;
  background-color:#EA6570; 
  display:block;
  height: auto;
  box-shadow: 12px 12px 2px 1px #B9A7EC;
}

.login-form {
  /* background-color: rgb(247, 247, 247); */
  opacity: 0.9;
  color:white;
  width: auto;
  margin: 0 auto;
  font-size: 2.0rem;
  border-radius: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  margin-right:40px;
  margin-left: 40px;

}

.login-header {
  text-align: center;
  font-size: 2.5rem;
}


/* ############### PROFILE COMPONENT ########### */
.profile-component {
  background-image: url('https://ik.imagekit.io/0jty0e7po/1_VcHVCyRSAOF3V6Ldi0iXOQ_6o1h4pipfT0.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;

}

.profile-section {
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  color: rgb(1, 62, 73);
  width: auto;
  /* height: 10vh; */
  margin: 0 auto;
  font-size: 2.0rem;
  border: 4px solid rgb(0, 0, 0);
  padding: 40px 20px 20px 20px;
  margin-bottom: 50px;
}

.text-muted{
  font-size: 10px;
  color: #000;
  align-items: center;
}
.cards-profile-container {
  /* background-color: rgb(255, 255, 255); */
}


.cards-profile-container h1 {
  background-color: rgb(0, 0, 0);
  border: 4px solid rgb(255, 255, 255);
  padding: 5%;
  font-family: 'Love Ya Like A Sister', cursive;
  font-size: 70px;
  color: white;
}

.card-container{
 align-items: center;
 display: inline-flexbox;
 width: 50%;
}


.profile-grid-container {
  display: grid;
  grid-gap: 60px;
  grid-template-columns: auto auto auto;
  background-color: rgb(0, 0, 0);
  border: 10px solid rgba(8, 0, 0, 0.8);
  color: rgb(255, 255, 255);
  padding: 10px;
}

.profile-grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.8);
  padding: 25px;
  font-size: 30px;
  text-align: center;
}

.profile-card{
align-items: center;
width: 100%;

}

.custom-file-upload {
  color: white;
  background:  rgb(20, 94, 190);
  border: none;
  padding: 7px 15px;
  font-weight: 700;
  border-radius: 3px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 10pt;
}

.profile-section h3 {
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight: bold;
  color: white;
  /* font-size: 70px; */
}

.profile-section p {
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight: bold;
  color: white;
  /* font-size: 70px; */
}
.text-center{
  padding: 25px;
  font-size: 1.5rem;
}

.text-center h6{
  font-size: 1rem;
}

/* .profile-container{
  
    margin: 10% auto;
    padding: 40px 20px 20px 20px;
    padding-bottom: 50px;
    text-align: center;
    height: 100%;
} */
.circle-img {
  border-radius: 50%;
  border: 7px solid #fff;
  width: 450px;
  height: 450px;
  margin: 40px;
  
}

.profile-comp {
  border-radius: 25px;
  position: relative;
  padding: 25px 15px;
  background-color: #81afec;
  margin: 50px 0;
  height: 210px;
  box-shadow: 0 2px 5px #ccc;
  text-align: left;
}
.profile-comp h3 {
  font-size: 20px;
  color:rgb(2, 35, 83);
}
.profile-comp p {
  font-size: 18px;
  font-family:‘Love Ya Like A Sister’, cursive;
}



/* Splash Page */
.container-page {
  background:  #EA6570;
  background-size: cover;
  overflow: hidden;
}

.header-splash {
  margin-left: 8%;
  margin-top: 20px;
  background-color:white;
  border-radius: 50%;
  width: 200px;
  height:auto;
  
}

#car {
    width: 50%;
    height: 40%;
    margin-left: auto;
    margin-right:10px;
    margin-top:auto;
    border-radius: 50%;
    image-rendering: auto;
}

#car img {
    border-radius: 50%;
    width: 90%;
    height: 90%;
    position: relative; top: -30px;
    margin-right: 50px;
    padding:5%;
}

.carousel-inner > .carousel-item {
    height: 100vh;
}

.carousel-fade .carousel-item {
    opacity: 0;
    transition-duration: .6s;
    transition-property: opacity;
}
   
.carousel-fade  .carousel-item.active,
.carousel-fade  .carousel-item-next.carousel-item-left,
.carousel-fade  .carousel-item-prev.carousel-item-right {
     opacity: 1;
}
   
.carousel-fade .active.carousel-item-left,
.carousel-fade  .active.carousel-item-right {
    opacity: 0;
}
   
.carousel-fade  .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active,
.carousel-fade .active.carousel-item-left,
.carousel-fade  .active.carousel-item-prev {
    transform: translateX(0);
    transform: translate3d(0, 0, 0);
}

.about-header {
  position: absolute;
  width: 300px;
  height: 200px;
  top:30%;
  left: 25%;
  margin-right: 50%;
  margin: -100px 0 0 -150px;
  letter-spacing: 2px;
  font-weight: 900;
}

.top-text-heading{
  width: 80%;
  margin: 0 8px 16px;
  margin-bottom: 25px;
  font-size: 5.3rem;
  line-height: 64px;
  color:#fff;
  letter-spacing: 4px;
  -webkit-text-stroke-color: #000;
  text-shadow:-1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000, -5px 5px #000, -6px 6px #000, -7px 7px #000, -8px 8px #000;
}

.paragraph-div {
  font-size: 20px;
  margin: 0 8px 16px;
}

.splash-btn-sign-in {
  float: right;
  margin-top: 20px;
  margin-right: 5%;
  border-color:black;
}

.splash-sign-in-text {
  margin-right: 15px;
  font-weight: bold;
  font-size: 1.2rem;
}

.splash-btn-join {
  position: absolute;
  width: 300px;
  height: 200px;
  z-index: 15;
  top:72%;
  left: 28%;
  margin: -100px 0 0 -150px;
  max-width: 100%;
  padding-left:25px;
  padding-right:25px;
}

/* ############### ADDACTIVITY COMPONENT ########### */
.formgroup {
  border: 4px solid black; 
}

.addactivity-component {
 /* background-color: #EA6570; */
 background-image: url('https://ik.imagekit.io/0jty0e7po/1_VcHVCyRSAOF3V6Ldi0iXOQ_6o1h4pipfT0.jpg');
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
 background-size: cover;
 min-height: 87.3vh;
 height: 88%;
}

.grid-container {
 display: flex;
 grid-template-columns: auto auto auto;
 grid-gap: 10px;
 padding: 10px;
 flex-wrap: wrap;
 justify-content: space-between;
} 

.grid-item {
 background-color: rgba(255, 255, 255, 0.8);
 padding: 20px;
 font-size: 30px;
 text-align: center;
 cursor: pointer;
 flex-grow: 1;
 margin: 0 20px;
 border: 1px solid transparent;
}

.active-category {
border: 1px solid rgb(77, 224, 235);
border-radius: 8px;
background-color: rgba(77, 224, 235, .2);
}
 
.addactivity-form {
 opacity: 0.9;
 color: black;
 width: 100%;
 background-color: white;
 opacity: 0.9;
 color: black;
 max-width: 90%;
 margin: 0 auto;
 font-size:medium;
 border-radius: 20px;
 padding-top: 20px;
 margin-top: 20px;
 padding-bottom: 50px;
 padding-left: 40px;
 padding-right: 40px;
 font-family: 'Noto Sans JP', sans-serif;
 border: 4px solid rgb(77, 224, 235);
}
 
.addactivity-form h3 {
 text-align: center;
 font-size: 2.5rem;
}

.categorytitle {
 text-decoration: underline;
 font-size: 3vh;
 padding-top: 2px;
}

.activitysubmit {
margin-top: 24px;
}

.activityform {
  text-align: center;

}










/* About Us Componenet */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.aboutUsPage{
  background-image: url('https://ik.imagekit.io/0jty0e7po/1_VcHVCyRSAOF3V6Ldi0iXOQ_6o1h4pipfT0.jpg');
  padding-top: 20px;
  padding-bottom: 20px;
  background-size: cover;
  /* height: 100vh; */
  overflow: hidden;
}

.aboutUsPage h2 {
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight: bold;
  color: white;
  font-size: 90px;
  text-align: center;
}

#team {
    background: #eee !important;
}

.header {
  margin: 10% auto;
  padding: 40px 20px 20px 20px;
  padding-bottom: 50px;
  text-align: center;
  width: 100%;
  height: 70%;
}

/* .row{
  padding: 80px;
  margin: 100px;
} */

.btn-primary:hover,
.btn-primary:focus {
    background-color: #108d6f;
    border-color: #108d6f;
    outline: none;
}

.btn-primary {
    color: #fff;
    background-color: #007b5e;
    border-color: #007b5e;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
    border-radius: .25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.mainflip {
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
}

.frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 205px;
}

.backside {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 1s;
    -moz-transform-style: preserve-3d;
    -o-transition: 1s;
    -o-transform-style: preserve-3d;
    -ms-transition: 1s;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
    min-height: 312px;
    box-shadow: 12px 12px 2px 1px rgba(0, 6, 10, 0.2);
    /* padding-bottom: 10%;
    margin: 2%; */
}

.frontside .card p,
.backside .card p {
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.backside .card a {
    font-size: 40px;
    color: #000000 !important;
}

.frontside .card .card-title,
.backside .card .card-title {
    color: #000000 !important;
    font-size: 30px;
    padding: 5%;
}

.frontside .card .card-body img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
}

/* Footer Component */

.main-container{
  min-height: 100vh; /* will cover the 100% of viewport */
   overflow: hidden;
   display: block;
   position: relative;
   padding-bottom: 75px; /* height of your footer */
  }

.footer {
  padding: 1rem;
  background-color:black;
  /* position: fixed causes the navbar to stick to the page instead of the bottom so i commented it out so you can play with it and see the difference*/
  /* position: fixed; */
  /* so images go behind footer */
  position:absolute; 
  width:100%;
  bottom: 0;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  height: 75px;
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight:bold;
  font-size: 25px;
}

.footer a:hover {
    color:black !important;
}

.footer-inline {
    display:inline-block !important;
    padding: 2px 4px !important;
}

.platoon {
    width: 100px;
    height: auto;
    padding-right: 0;
    margin-right: 0;
}

/* Navbar Component*/
.navbar {
     /* background-image: linear-gradient(to bottom, black, #b20a2c); */
     /* background-image: linear-gradient(to bottom, #b20a2c, black); */
     background-color: black;
     box-shadow: 0 0.5rem 0.5rem black;
     z-index: 1;
}

.navbarmarginbottom {
    margin-bottom: 90px;
}

.brand {
  background-color:white;
  border-radius: 50%;
  width: 200px;
  height:auto;
}

.date-links {
  font-family: 'Love Ya Like A Sister', cursive;
  padding-right: 15px;
  font-weight:bold;
  font-size: 25px;
}

.date-links a {
  color:white !important;
  
}

.date-links a:hover {
  color:#EA6570 !important;
}


.nav-link {
    color: white;
    margin-right: 23px;
}


/* signup Page */

.signUpPage {
  background-size: cover;
}

.loginimg {
    position: fixed;
    top: 0;
    left: 0;
    /* width: auto;  */
    height: 100%;
    background-color: #EA6570; 
    
} 

.logoimg {
    position: fixed;
    padding-right: 20px;
    display: inline-flex;
    margin-top: 9%;
    margin-left: 62%;
    max-width: 45%;
    top: 0;
    left: 0;

}

.list-inline {
    padding: 5%
}
.signup-component{
    position: fixed;
    top: 35%;
    left: 65%;
    width: auto;  
    height: 100%;
    background-color:#B9A7EC; 
    display:block;
    height: auto;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  }
  
  .signup-form {
    /* background-color: rgb(247, 247, 247); */
    opacity: 0.9;
    color:white;
    width: auto;
    margin: 0 auto;
    font-size: 2.0rem;
    border-radius: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;

  }
  
  .signup-form h3 {
    text-align: center;
    font-size: 2.5rem;
  }
  





/* Calendar */


/* .react-calendar__navigation {
=======

  .react-calendar__navigation__arrow {
      display: none;
  }

  .react-calendar__navigation__label {
      font-size: 32px;
  }

} */


.react-calendar__tile {
  height: 70px;
}

.react-calendar__month-view__weekdays__weekday {
  font-size: 16px;
  color: rgb(15, 70, 15);
}

.react-calendar__tile--active {
  background: #e70220;
  color: white;
}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #e70220;
}

.react-calendar__tile,
.react-calendar__month-view__days__day {
  font-size: 18px;
}

.calendar-container{
  padding: 5%;
}
.calendar-component {
  /* color: rgb(255, 255, 255); */
  padding-top: 10%;
  padding-bottom: 10%;
  padding-right: 8%;
  
}

.calendar-component h1 {
  /* background-color:  rgb(26, 130, 190); */
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 80px;
}
.weather-icon {
  padding: 2%;
  height: 10%;
  width: 10%;
}

.weather-header{
  padding-top: 20%;
  padding-right: 10%;

}

.weather-header h1{
  text-align: center;
  font-size: 4rem;
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight: bold;
  color: white;
  
}


.main-container{
  min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 75px; /* height of your footer */
}

#additionallinks{
  text-align: center;
  padding: 5px;
}


#weatherpane{
  /* margin:auto; */
  margin-top:-8%;
  padding: 20px 20px 20px 20px;
  padding-top: 5px;
  border: 4px solid yellow;
  background-color: rgb(20, 94, 190);
  font-family: 'Love Ya Like A Sister', cursive;
  padding-bottom: 10px;
  border-radius: 25px;
  width: 300px;
  height: 280px;
  /* float: right; */
}

#weatherpane img {
  width: 35%;
  height: 35%;
}
#weatherpane p {
  font-size: 20px;
}
#weatherpane h3 {
  /* font-size: 20px; */
  text-align: center;
}
#weather-form{
  margin-top: -25px;
  width: 300px;
}
#weather-input{
  width: 50%;
  margin-right: 10px;
}

#weather-word {
  font-size: 26px !important;
  text-align: center;
  margin-top:-20px;
  /* margin-bottom:-5px; */
}

.temperature-results {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  /* border: 2px solid pink; */
  margin-top: -20px;
}
.temperature-results p {
  margin-top: 20px;
  margin-left: 15px;

}

#temperature{
  font-size: 50px !important;
  margin-right: 20px;
}

@media screen and (max-width: 1672px) {
  
   .profile-card {
      width: 70%;
  }
}




/* RESOURCES */
#babysitting {
  background-size: cover;
}

.resources-heading {
  font-size: 2rem;
  color:#EA6570;
  text-shadow: -1px -1px #EA6570;
}

.resources-form {
  opacity: 0.9;
  color: black;
  width: 90%;
  height: 50%;
  background-color: white;
  opacity: 0.9;
  color: black;
  margin: 0 auto;
  border-radius: 20px;
  padding-top: 1px;
  margin-top: 10px;
  font-family: 'Love Ya Like A Sister', cursive;
 }


.resources-container {
  background-image: url('https://ik.imagekit.io/0jty0e7po/1_VcHVCyRSAOF3V6Ldi0iXOQ_6o1h4pipfT0.jpg');
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 87.3vh;
  height: 88%;
  padding: 8%;

}
.container-resources {
  width: 50%;
  margin-left: 25%;
  margin-bottom: 30px;
  font-size: 4rem;
  line-height: 64px;
  color: #3f9784;
  letter-spacing: 3px;
  -webkit-text-stroke-color: #000;
  text-shadow:-1px 1px #3f9784, -2px 2px #000, -3px 3px #000, -4px 4px #000, -5px 5px #000, -6px 6px #000, -7px 7px #000, -8px 8px #000;

}
.stroller-text {
  margin-bottom: 30px;
}
.stroller-icon {
  cursor:pointer;
}
.rideshare-text {
  margin-bottom: 30px;
  padding-top: 20px;
}

.uber-icon {
  padding-right:5%;
}

.lyft-icon {

}

/*//////////////////////////// HOMEPAGE / QUESTIONS COMPONENT */

.homePage {
  position: relative;
  /* background-color: #EA6470; */
  min-height: 100vh;
  background-image: url('https://ik.imagekit.io/0jty0e7po/1_VcHVCyRSAOF3V6Ldi0iXOQ_6o1h4pipfT0.jpg');
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}


/*//////////////////////////// DATE RESULTS COMPONENT */

#logout{
  text-align: right;
  padding: 5px;
}

#logout h4{
  /* border: 1px solid black; */
  font-family: 'Love Ya Like A Sister', cursive;
  font-weight: bold;
  color: white;
  font-size: 25px;

}

.date-results{
  /* border-top: 4px solid blue; */
  /* background-color: white; */  
  margin-top: -5%;
}

#recommend-message {
  color: white;
  /* border: 4px solid black; */
  /* background-color: white; */
  /* text-align: center; */
  /* justify-content: center; */
  /* width: 300px; */
  margin: 10px;
  /* display: flex;
  flex-wrap: wrap; */
  /* float: right; */
  margin-top: -3%;
  padding-left: 40px;


}

.date-results h2{
  font-family: 'Love Ya Like A Sister', cursive;
  font-size: 15vh;
  margin-bottom: -20px;
  color: white;
  text-align: center;
}

.parent-div-individual-result{
  /* border-top: 4px solid green; */
  display: flex;
  flex-wrap: wrap;
}

.individual-result {
  border: 4px solid black;
  margin-bottom: 20px;
  width: 30%;
  margin-left: 45px;
  background-image: url('https://ik.imagekit.io/0jty0e7po/1_OEnS6-DEn56szCwdOs2mrA_WZHTuUCSt.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.individual-result h1 {
  /* border: 4px solid black; */
  /* background-color: rgb(19, 20, 20); */
  background-color: white;
  text-align: center;
  color: white;
  color: black;
  font-family: 'Love Ya Like A Sister', cursive;
  font-size: 2vw;


}
.individual-result h3 {
  background-color: rgb(15, 15, 15);
  color: rgb(211, 204, 204);
  text-align: center;
  /* font-size: 20px; */
  font-size: 1vw;
  margin-top: -8px;
}

.local-options p {
  /* text-align: center; */
  margin: 0;
 
}

.individual-name-address {
  border: 2px rgb(14, 13, 14) solid;
  margin-bottom: 8px;
  /* background-color: white; */
  background-color: black;
  border-radius: 20px;
  opacity: 0.4;
}

.individual-name-address:hover {
  opacity: 1;
}


.individual-name-address p{
font-weight: bold;

}

.individual-name-address .name{
color:rgb(249, 251, 252);
margin-left: 10px;
font-size: 20px;
}
.individual-name-address .address{
color:rgb(203, 206, 203);
margin-left: 10px;
font-size: 15px;
font-family: 'Love Ya Like A Sister', cursive;

}
.individual-name-address .number{
color:rgb(211, 205, 205);
margin-left: 10px;
}

/* QUESTION1 AND QUESTION 2 ////////////////////// */

.questions-form {
 opacity: 0.9;
 color: black;
 width: 60%;
 background-color: white;
 opacity: 0.9;
 color: black;
 margin: 0 auto;
 border-radius: 20px;
 padding-top: 10px;
 margin-top: 20px;
 font-family: 'Love Ya Like A Sister', cursive;
}

.questions-component h3 {
  font-family: 'Love Ya Like A Sister', cursive;
  font-size: 7vh;
  margin-bottom: -20px;
  color: white;
  text-align: center;
  margin-top: -50px;
 /* min-height: 87.3vh; */
 /* height: 88%; */
}

.questions-grid-container {
 display: flex;
 /* grid-template-columns: auto auto auto; */
 /* grid-gap: 2px; */
 padding: 10px;
 flex-wrap: wrap;
 justify-content: space-between;
} 

.questions-grid-item {
 padding: 20px;
 font-size: 30px;
 text-align: center;
 flex-grow: 1;
 margin: 0 20px;
}
 
.questions-form h3 {
 text-align: center;
 font-size: 2.5rem;
}

.questions-categorytitle {
 text-decoration: underline;
 font-size: 3vh;
 font-weight: bold;
}

#questions-submit-button{
  font-size: 40px;
  display: flex;
  margin: 0 auto;
}



