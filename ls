[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 4f33c75..b3cc2fb 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -2,12 +2,14 @@[m [mimport React from 'react';[m
 import './App.css';[m
 import Header from './components/Header/NeoHeader';[m
 import Banner from './components/Banner'[m
[32m+[m[32mimport OurServices from "./components/OurServices";[m
 [m
 function App() {[m
   return ([m
     <div className='App'>[m
         <Header />[m
         <Banner />[m
[32m+[m[32m        <OurServices />[m
     </div>[m
   );[m
 }[m
[1mdiff --git a/src/components/Banner/Banner.css b/src/components/Banner/Banner.css[m
[1mindex babdd9a..b9644e0 100644[m
[1m--- a/src/components/Banner/Banner.css[m
[1m+++ b/src/components/Banner/Banner.css[m
[36m@@ -1,6 +1,6 @@[m
 .banner {[m
     height: 500px;[m
[31m-    background-image: url("https://wallpapercave.com/wp/wp4779329.png");[m
[32m+[m[32m    background-image: url("https://c1.wallpaperflare.com/preview/746/963/770/flowers-leaves-autumn-aesthetic.jpg");[m
     background-size: cover;[m
     margin-top: 0;[m
 }[m
[36m@@ -11,5 +11,4 @@[m
     color: #ffffff;[m
     display: flex;[m
     justify-content: flex-start;[m
[31m-    align-content:[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/components/Banner/index.js b/src/components/Banner/index.js[m
[1mindex 9278f7d..28a2b96 100644[m
[1m--- a/src/components/Banner/index.js[m
[1m+++ b/src/components/Banner/index.js[m
[36m@@ -9,4 +9,4 @@[m [mconst Banner = (props) => {[m
     )[m
 };[m
 [m
[31m-export default Banner;[m
\ No newline at end of file[m
[32m+[m[32mexport default Banner[m
\ No newline at end of file[m
[1mdiff --git a/src/components/OurServices/OurServices.js b/src/components/OurServices/OurServices.js[m
[1mindex 13b570a..9dd0928 100644[m
[1m--- a/src/components/OurServices/OurServices.js[m
[1m+++ b/src/components/OurServices/OurServices.js[m
[36m@@ -4,7 +4,7 @@[m [mimport logo from '../imagenes/logo.svg'[m
 import pelota from '../imagenes/pelota.jpg'[m
 import './ourServicess.css'[m
 [m
[31m-const OurServices = (props) => {[m
[32m+[m[32mconst ourServices = (props) => {[m
   return ([m
       <div className={'section-container'}>[m
           <h2>{props.title}</h2>[m
[1mdiff --git a/src/components/OurServices/index.js b/src/components/OurServices/index.js[m
[1mindex e69de29..671d11b 100644[m
[1m--- a/src/components/OurServices/index.js[m
[1m+++ b/src/components/OurServices/index.js[m
[36m@@ -0,0 +1,35 @@[m
[32m+[m[32mimport React from "react";[m
[32m+[m[32mimport './ourServices.css';[m
[32m+[m[32mimport '../imagenes/logo.svg'[m
[32m+[m
[32m+[m[32mconst OurServices = (props) => {[m
[32m+[m[32m    return ([m
[32m+[m[32m        <div className={'ourservices-section'}>[m
[32m+[m[32m            <h1>OUR SERVICES</h1>[m
[32m+[m[32m            <div className={'container-section'}>[m
[32m+[m[32m                <div className={'ourservices-container'} id={'box1'}>[m
[32m+[m[32m                    <h3 className={'ourservices-title'}>Power BI Cosulting</h3>[m
[32m+[m[32m                    <p className={'ourservices-text'}>We design visually engaging dashboards[m
[32m+[m[32m                        using Power BI to capture what is critical to[m
[32m+[m[32m                        your business at a glance.</p>[m
[32m+[m[32m                </div>[m
[32m+[m[32m                <div className={'ourservices-container'} id={'box2'}>[m
[32m+[m[32m                    <h3 className={'ourservices-title'}>Business Analysis</h3>[m
[32m+[m[32m                    <p className={'ourservices-text'}>We work with process owners to identify key[m
[32m+[m[32m                        business drivers, set targets and measure[m
[32m+[m[32m                        performance with the aim of transforming data[m
[32m+[m[32m                        into valuable information for decision making.[m
[32m+[m[32m                    </p>[m
[32m+[m[32m                </div>[m
[32m+[m[32m                <div className={'ourservices-container'} id={'box3'}>[m
[32m+[m[32m                    <h3 className={'ourservices-title'}>Executive reporting</h3>[m
[32m+[m[32m                    <p className={'ourservices-text'}>We develop detailed executive summaries and[m
[32m+[m[32m                        business cases to support major business[m
[32m+[m[32m                        decisions.</p>[m
[32m+[m[32m                </div>[m
[32m+[m[32m            </div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m    )[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default OurServices[m
\ No newline at end of file[m
[1mdiff --git a/src/components/OurServices/ourServices.css b/src/components/OurServices/ourServices.css[m
[1mindex e69de29..138a01a 100644[m
[1m--- a/src/components/OurServices/ourServices.css[m
[1m+++ b/src/components/OurServices/ourServices.css[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32m.container-section {[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m}[m
[32m+[m[32m.ourservices-container {[m
[32m+[m[32m    padding: 20px;[m
[32m+[m[32m    width: 550px;[m
[32m+[m[32m    height: 200px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.ourservices-text {[m
[32m+[m[32m    font-size: large;[m
[32m+[m[32m    font-family: "Comic Sans MS", sans-serif;[m
[32m+[m[32m}[m
[32m+[m[32m.ourservices-title {[m
[32m+[m[32m    font-size: 30px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m#box1, #box3 {[m
[32m+[m[32m    background-color: #000000;[m
[32m+[m[32m    color: #ffffff;[m
[32m+[m[32m}[m
[32m+[m[32m#box2 {[m
[32m+[m[32m    background-color: #f39f18;[m
[32m+[m[32m}[m
\ No newline at end of file[m
