import styled from 'styled-components';
 
export const Box = styled.div`
  padding: 80px 60px;
  background:#3a0999;
  position: flex;
  bottom:0;
  width: 100%;
     
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
       /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;
  
   
  &:hover {
      color: #39DBDB;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  margin-top: 20px

  `;
  




























/* .card {
    background-color: darkviolet;
    background: linear-gradient(to bottom right, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    padding: 1.5rem;
    border: 2px solid transparent;
    transition: var(--transition);
}
.card:hover {
   background: transparent;
   border-color: var(--color-white);
   transition: translateY(0.5rem);
}
.card.light {
    background: var(--color-light);
}
  card.light:hover {
    border-color: var(--color-light);
    background : transparent;
 }

/* Media Queries (phones */
    
/* 
.about__container {
    display: grid;
    grid-template-columns: 35% 53%;
    gap:12%;
    align-items: left;
    columns: left;
    margin-top: 3rem;
    display: block;
    position: relative;
    align-items: right;
    


}
.about__portrait {
    width: 40%;
    height: fit content;
    max-height: 40rem;
    border: 1rem solid var (--color-white);
    transition: var(--transition);
}
.about__portrait:hover {
    border-width: 0;
    transform: translateY(-0.5rem);
}
.about__cards {
    margin: 3rem 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:1.5rem;
    position: relative;

    

}
.card.about__cards {
    text-align: center ;
    }

.about__card-icon {
    color: var(--color-primary);
    font-size: 2rem;
    margin-bottom: 1rem;
    border-radius: var(--border-radius-1);
    width: fit-content;
    margin-inline: auto;
    padding: 0.6rem;
    display : flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);

}
.about__card-icon:hover.about_card.about__card-icon {
    background: var(--color-primary);
    color: var(--color-white);

}
.card.about__card-icon h5{
    margin-bottom: 1rem 0;

}


    
 */ 