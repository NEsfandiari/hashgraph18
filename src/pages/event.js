import React, { Component } from 'react';
import Layout from '../components/layout'
import styled from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #F7F8FA;
    padding: 1rem;
    h1{
        text-align: center;
        color: #FEA340;
    }
    h2{
        text-align: center;
    }
    .info{
        display: flex;
        justify-content: space-between;
    }

    .leftside{
        display: flex;
        flex-direction: column;
    }
    .rightside{
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
    }
    .button{
      width: 10rem;
      height: 2rem;
      background-color: #50E3C2;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items:center;
      cursor: pointer;
      color: white;
    }
    .success{
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .hide{
        position: fixed;
        z-index: 10;
        opacity: 1 !important;
        width: 360px;
        background-color: #2F6CA9;
        padding: 1rem;
        border-radius: 6px;
        h4{
        text-align: center;
        color: white;
        }
        h2{
        }
    }
    
`

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = { state: true };
        AOS.init()
    }
    join = () =>{
        this.setState({state: false})
    }
    render() {
        const opacity = this.state.state ? '1' : '.3'
        const display = this.state.state ? 'none' : 'flex'
        return (
            <Layout>
                <Container data-aos="fade-up"> 
                    <h1 style={{opacity: opacity}}>Intro To Machine Learning</h1>
                    <div class='info' style={{opacity: opacity}} >
                    <div class='leftside' data-aos="fade-right" data-aos-delay="400">
                        <h4>Start Date:</h4>
                        <h4>End Date:</h4>
                        <h4>Course Material:</h4>
                        <h4>Spots Left:</h4>
                        <h4>Minimum Buy In:</h4>
                    </div>
                    <div class='rightside' data-aos="fade-left" data-aos-delay="800">
                        <h4>12/11/18</h4>
                        <h4>2/21/19</h4>
                        <h4>Andrew ng Coursera Course</h4>
                        <h4>13 Members</h4>
                        <h4>250Hbar</h4>
                    </div>
                    </div>
                    <div class='button' onClick={this.join} data-aos="fade-up" data-aos-delay="1000">Join Now</div>
                    <div class='hide' style={{display: display}}>
                    <div class='success'>
                        <h2>Successfully added To: <br/>Into to Machine Learning</h2>
                        <h4>-250Hbar</h4>
                    </div>
                    </div>
                </Container>
            </Layout>
        );
    }
}

export default Event;