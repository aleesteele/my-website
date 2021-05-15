import React, {Component} from 'react';
import {Link} from 'react-router';
import Portfolio from '../Portfolio/Portfolio';
import ScrollableAnchor from 'react-scrollable-anchor'

import './Home.css';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        console.log('inside Home component');
        return (
            <div className="Home">
                <h1 className="Home-main-text">
                  Hello, world. 🌎<br/>
                </h1>
                <h1 className="Home-main-text">
                  I'm Anne Lee Steele, a digital anthropologist, writer, and designer. Right now, I'm redoing this little corner of the web – please check back soon.
                </h1>
                <h1 className="Home-main-text">
                  If you'd like to learn more about me, check out my <a href="http://notes.aleesteele.com" className="Home-link link anim-middleout">digital garden</a> or <a href="https://res.cloudinary.com/aleesteele/image/upload/v1620909383/Steele_CV_2021.pdf" className="Home-link link anim-middleout">CV</a>. And of course, feel free to <a href="mailto:aleesteele@gmail.com" className="Home-link link anim-middleout">get in touch. ✉</a>
                </h1><br/>
                <h3 className="Home-main-text">
                  Recent Projects & Publications:
                </h3>
                <h3 className="Home-main-text">
                  <ul>
                    <li><a href="https://www.graduateinstitute.ch/communications/news/open-movement-and-its-discontents" className="Home-link link anim-middleout">"The 'Open' Movement and its Discontents"</a>. IHEID Communications. (2021)</li>
                    <li>"Data visualization and crowdsourced research: experiments in collective storytelling". Presented at <a href="https://csvconf.com/speakers/#anne-lee-steele" className="Home-link link anim-middleout">csv,CONF</a>. (2021)</li>
                    <li>Frictionless Data Blog: <a href="https://fellows.frictionlessdata.io/blog/anne-datapackage-blog/" className="Home-link link anim-middleout">[1]</a> <a href="https://fellows.frictionlessdata.io/blog/anne-goodtables-blog/" className="Home-link link anim-middleout">[2]</a> <a href="https://fellows.frictionlessdata.io/blog/anne-partner-blog/" className="Home-link link anim-middleout">[3]</a>. (2020-2021)</li>
                    <li><a href="https://www.graduateinstitute.ch/communications/news/open-movement-and-its-discontents" className="Home-link link anim-middleout">"The 'Open' Movement and its Discontents"</a>. IHEID Communications. (2020)</li>
                    <li>“Investigating the Global and Local in Wangchuck Centennial National Park: A Case for the Bhutanese Conservation Actors In-Between”. Published online in <a href="https://www.goo.gl/GFSuTi" className="Home-link link anim-middleout"><i>Consilience</i></a>, Issue XVIII (2018)</li>
                  </ul>
                </h3>
                <div className="App-sidebar-nav-div">
                  <ol>
                      <li className="sidebar-icon"><a class="icon-github social-button color" href="http://github.com/aleesteele"></a></li>
                      <li className="sidebar-icon"><a class="icon-twitter social-button color" href="http://twitter.com/aleesteele"></a></li>
                      <li className="sidebar-icon"><a class="icon-linkedin social-button color" href="http://linkedin.com/in/anneleesteele"></a></li>
                  </ol>
                </div>
            </div>
        );
    }
}

export default Home;
