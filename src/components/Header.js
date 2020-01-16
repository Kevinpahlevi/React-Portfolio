/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {ask } from '../push'

export default class Header extends Component {

  state = {
    hasil: 'generate token firebase here'
}

  async asktoken(){
    console.log('get token')
    const token = await ask()
    console.log(token);
    this.setState({hasil: token})
    
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         {/* <nav id="nav-wrap">
           <p>LINGKUNGAN : {process.env.text}</p>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav> */}

         <div className="row banner">
            <div className="banner-text" style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
              <h2 style={{ color: "white"}}>FIREBASE TOKEN</h2>
        {/* <input type="text" value={this.state.hasil} style={{minWidth: '50%'}}/> */}
       <div><textarea value={this.state.hasil} style={{ width: "100%"}}></textarea></div>
       <div><button onClick={this.asktoken.bind(this)}>GET TOKEN</button></div>

               {/* <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul> */}
            </div>
         </div>

         {/* <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p> */}

      </header>
      </React.Fragment>
    );
  }
}