import React, { Component } from 'react';
import Layout from '../components/layout'
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F7F8FA;
  padding: 1rem;  
  h1{
    text-align: center;
  }
  h4{
    margin: 0;
    color: #FEA340;
  }
  p{
    margin: 0;
  }
  img{
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 2px;
    margin: .2rem;
  }
  .info{
    display: hidden;
    flex-direction: column;
  }
  .groups{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20rem;
  }
  .group{
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: .5rem;
  }
  .leftSide{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  }
  .rightSide{
  display: flex;
  flex-direction: column;
  margin-left: .5rem;
  align-items: center;
  justify-content: space-around;
  }
  .button{
    background-color: #4090FE;
    color: white;
    padding: .3rem;
    border-radius: 3px;
    cursor: pointer
  }
  .images{
    display: flex;
    div{
    height: 1.5rem;
    width: 1.5rem;
    background-color: #F7F8FA;
    border-radius: 2px;
    margin: .2rem;
    }
  }
`

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = { display: 'none' };
    AOS.init()
  }
  join = () =>{
    this.setState({display: 'flex'})
    navigateTo('/event')

  }
  render() {
    const style = {
      display: this.state.display
    }
    return (
      <Layout>
    <Container>
      <h1>Nearby Upcoming Groups</h1>
      <div class='groups'>
        <div class='group' data-aos="fade-up">
          <div class='leftSide'>
            <h4>Code your first website</h4>
            <p>members</p>
            <div class='images'>
              <img alt='img' src='https://pmcvariety.files.wordpress.com/2017/09/jim-carrey-lawsuit.jpg?w=1000'/>
              <img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jim_Parsons_2013.jpg/220px-Jim_Parsons_2013.jpg'/>
              <img alt='img' src='https://cbsmiami.files.wordpress.com/2016/05/jim-defede-600x450.jpg'/>
              <div>+4</div>
            </div>
          </div>
          <div class='rightSide'>
            <p>300Hbar</p>
            <p>10/19/18</p>
            <div class='button' onClick={this.join}>Join Now</div>
          </div>
        </div>
        <div class='group' data-aos="fade-up" data-aos-delay="50">
          <div class='leftSide'>
            <h4>Intro to Machine Learning</h4>
            <p>members</p>
            <div class='images'>
              <img alt='img' src='https://pmcvariety.files.wordpress.com/2017/09/jim-carrey-lawsuit.jpg?w=1000'/>
              <img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jim_Parsons_2013.jpg/220px-Jim_Parsons_2013.jpg'/>
              <img alt='img' src='https://cbsmiami.files.wordpress.com/2016/05/jim-defede-600x450.jpg'/>
              <div>+2</div>
            </div>
          </div>
          <div class='rightSide'>
            <p>250Hbar</p>
            <p>12/11/18</p>
            <div class='button' onClick={this.join}>Join Now</div>
          </div>
        </div>
        <div class='group' data-aos="fade-up" data-aos-delay="100">
          <div class='leftSide'>
            <h4>Learn To Tango</h4>
            <p>members</p>
            <div class='images'>
              <img alt='img' src='https://pmcvariety.files.wordpress.com/2017/09/jim-carrey-lawsuit.jpg?w=1000'/>
              <img alt='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jim_Parsons_2013.jpg/220px-Jim_Parsons_2013.jpg'/>
              <img alt='img' src='https://cbsmiami.files.wordpress.com/2016/05/jim-defede-600x450.jpg'/>
              <div>+8</div>
            </div>
          </div>
          <div class='rightSide'>
            <p>700Hbar</p>
            <p>11/2/18</p>
            <div class='button' onClick={this.join}>Join Now</div>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
    );
  }
}

export default SecondPage;