import React from "react";
// import Card from '../Resources/Card';
import "./data";
import "./FooterStyles";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
//import { auto } from "@popperjs/core";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Dialearn: A language learning portal for everyone
      </h1>
      <Container>

           
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Language Translation</FooterLink>
            <FooterLink href="#">Language flash cards</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
            <FooterLink href="#">Writing</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
              4th Floor, Harrods, 87-135 Brompton Rd, Knightsbridge, London,
              SW1X 7XL, United Kingdom
            </FooterLink>
            <FooterLink href="#">
              <ion-icon name="call-outline"></ion-icon>: 020 7946 0612
            </FooterLink>
            <FooterLink href="#">Branches: Birmigham, Sheffield.</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="Github">
                <span style={{ marginLeft: "10px" }}>
                  <ion-icon name="logo-github"></ion-icon>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="YouTube">
                <span style={{ marginLeft: "10px" }}>
                  <ion-icon name="logo-youtube"></ion-icon>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="twitter">
                <span style={{ marginLeft: "10px" }}>
                  <ion-icon name="logo-twitter"></ion-icon>
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="Instagram">
                <span style={{ marginLeft: "10px" }}>
                  <ion-icon name="logo-instagram"></ion-icon>
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );

};
export default Footer;

/* 
  /* 
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
      /*
 */
