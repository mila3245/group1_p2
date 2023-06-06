import FooterImage from "../images/langlearn1.png";
import React from 'react';
import Card from '../Resources/Card';
import data from "./data";
import './footer.css';

const Footer = () => {
  return (
    <section id="">
    {
        data.map((obj, i) => {
            return (<Card key={i} heading={obj.desc}>
                <p>{obj.title}</p>
                {obj.icon}
            </Card>)
        })
    }
      <div className='container footer__container'>
      <div className='container footer__container'>        
        <div className='footer__left'></div>
          <div className='footer__left'></div>
          <div className='footer__portrait'>
            <img src= {FooterImage} alt = "Footer" />
          </div>
        </div>
      </div>       
    </section>   
     )
    }


      export default Footer

