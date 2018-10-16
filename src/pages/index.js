import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('https://lh3.googleusercontent.com/46qn59_gU_XT6oibftqVx64cehrivjxTTc-d8IyiK0FuzUKGj-nTuX8IL8JEJuXdAbtmivtLxYdoz6vyDnA3zJMpPHe9Yv0XM_6Is2G75zEsd0uxYnE7RyjkajXTPAiCsvV_NUCvg2TEsF-LHVDtd9hHOJQZvTes4EwPByCYPZdGNKpWI3Ev05dB3dkd5pI0SooxdXciV15adYExTeAY82mY4ym0T9lF3RuPdD6rSAyNv8uBGhMiMp833WBpPsAUjop9uAHNBkAaSrH4Zf8N2V61foxYO9segmS5sakPbpBx994ehjQF4y-oVokE5pTKRmwr2GmLcAbIz8HiSDL9IARR5R3S5XafxmzthdkB_xL_6VnnwszAoJR38zkBR878rbzNV6LaeqJXAPTdZi0Jm4z8yK3_2VyZzb3Y_PLm8krsf1mru4WLABun6msIlAAas-q7P7bUyNhOT9zQvVgiW9aLjNTfQYYJxhA4QbZHPR3CGq0S6kD14WGi9amKO-YS2iS5mx0KXyuOuFpzls8plgreW8Iz1feFtRTCJhbkXMIJeBIpocIidAGMzr-FNK8BNg7u-7hhtLpqb6L4Q1RR84FgFLFET_fGpLM_NpKTzKP0zAePvxMvMmFywAv6gZwmiydJ-Qyp1Cjr8Z1dqZQRiNOhkXjVr1iNH8-Kl__W0RXC4KH_qw=w328-h710-no');
  padding: .6rem;
  h1{
    color: white;
  }
  height: 35rem;
    .button{
      width: 10rem;
      height: 2rem;
      background-color: #50E3C2;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items:center;
    }
    a{
      text-decoration: none;
      color: white;
    }
    a:visited{
      color: white;
    }
  p{
    color: white;
  }
`
AOS.init()
const IndexPage = () => (
  <Layout>
    <Container>
    <h1>{'{L}'}Earn</h1>
    <p>Invest in Hedera, Invest in your skills</p>
    <div class='button' data-aos="fade-up" data-aos-delay="100">
    <Link to="/events/">Get Started</Link>
    </div>
    </Container>
  </Layout>
)

export default IndexPage
