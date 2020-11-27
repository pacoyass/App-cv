import React from 'react'
import  '../dashbord/Showcv.scoped.css'
import image from '../images/image.jpg'
export default function Showcv() {
    return (
        <div>
            <div>
        {/* Begin Wrapper */}
        <div id="wrapper">
          <div className="wrapper-top" />
          <div className="wrapper-mid">
            {/* Begin Paper */}
            <div id="paper">
              <div className="paper-top" />
              <div id="paper-mid">
                <div className="entry">
                  {/* Begin Image */}
                  <img className="portrait" src={image} alt="John Smith" />
                  {/* End Image */}
                  {/* Begin Personal Information */}
                  <div className="self">
                    <h1 className="name">John Smith <br />
                      <span>Interactive Designer</span></h1>
                    <ul>
                      <li className="ad">111 Lorem Street, 34785, Ipsum City</li>
                      <li className="mail">johnsmith@business.com</li>
                      <li className="tel">+11 444 555 22 33</li>
                      <li className="web">www.businessweb.com</li>
                    </ul>
                  </div>
                  {/* End Personal Information */}
                  {/* Begin Social */}
                  <div className="social">
                    {/* <ul>
                      <li><a className="north" href="#" title="Download .pdf"><img src="images/icn-save.jpg" alt="Download the pdf version" /></a></li>
                      <li><a className="north" href="javascript:window.print()" title="Print"><img src="images/icn-print.jpg" alt="" /></a></li>
                      <li><a className="north" id="contact" href="contact/index.html" title="Contact Me"><img src="images/icn-contact.jpg" alt="" /></a></li>
                      <li><a className="north" href="#" title="Follow me on Twitter"><img src="images/icn-twitter.jpg" alt="" /></a></li>
                      <li><a className="north" href="#" title="My Facebook Profile"><img src="images/icn-facebook.jpg" alt="" /></a></li>
                    </ul> */}
                  </div>
                  {/* End Social */}
                </div>
                {/* Begin 1st Row */}
                <div className="entry">
                  <h2>OBJECTIVE</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim viverra nibh sed varius. Proin bibendum nunc in sem ultrices posuere. Aliquam ut aliquam lacus.</p>
                </div>
                {/* End 1st Row */}
                {/* Begin 2nd Row */}
                <div className="entry">
                  <h2>EDUCATION</h2>
                  <div className="content">
                    <h3>Sep 2005 - Feb 2007</h3>
                    <p>Academy of Art University, London <br />
                      <em>Master in Communication Design</em></p>
                  </div>
                  <div className="content">
                    <h3>Sep 2001 - Jun 2005</h3>
                    <p>University of Art &amp; Design, New York <br />
                      <em>Bachelor of Science in Graphic Design</em></p>
                  </div>
                </div>
                {/* End 2nd Row */}
                {/* Begin 3rd Row */}
                <div className="entry">
                  <h2>EXPERIENCE</h2>
                  <div className="content">
                    <h3>May 2009 - Feb 2010</h3>
                    <p>Agency Creative, London <br />
                      <em>Senior Web Designer</em></p>
                    <ul className="info">
                      <li>Vestibulum eu ante massa, sed rhoncus velit.</li>
                      <li>Pellentesque at lectus in <a href="#">libero dapibus</a> cursus. Sed arcu ipsum, varius at ultricies acuro, tincidunt iaculis diam.</li>
                    </ul>
                  </div>
                  <div className="content">
                    <h3>Jun 2007 - May 2009</h3>
                    <p>Junior Web Designer <br />
                      <em>Bachelor of Science in Graphic Design</em></p>
                    <ul className="info">
                      <li>Sed fermentum sollicitudin interdum. Etiam imperdiet sapien in dolor rhoncus a semper tortor posuere. </li>
                      <li>Pellentesque at lectus in libero dapibus cursus. Sed arcu ipsum, varius at ultricies acuro, tincidunt iaculis diam.</li>
                    </ul>
                  </div>
                </div>
                {/* End 3rd Row */}
                {/* Begin 4th Row */}
                <div className="entry">
                  <h2>SKILLS</h2>
                  <div className="content">
                    <h3>Software Knowledge</h3>
                    <ul className="skills">
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>InDesign</li>
                      <li>Flash</li>
                      <li>Fireworks</li>
                      <li>Dreamweaver</li>
                      <li>After Effects</li>
                      <li>Cinema 4D</li>
                      <li>Maya</li>
                    </ul>
                  </div>
                  <div className="content">
                    <h3>Languages</h3>
                    <ul className="skills">
                      <li>CSS/XHTML</li>
                      <li>PHP</li>
                      <li>JavaScript</li>
                      <li>Ruby on Rails</li>
                      <li>ActionScript</li>
                      <li>C++</li>
                    </ul>
                  </div>
                </div>
                {/* End 4th Row */}
                {/* Begin 5th Row */}
                <div className="entry">
                  <h2>WORKS</h2>
                  {/* <ul className="works">
                    <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/2.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/3.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/2.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/3.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                    <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                  </ul> */}
                </div>
                {/* Begin 5th Row */}
              </div>
              <div className="clear" />
              <div className="paper-bottom" />
            </div>
            {/* End Paper */}
          </div>
          <div className="wrapper-bottom" />
        </div>
        <div id="message"><a href="#top" id="top-link">Go to Top</a></div>
        {/* End Wrapper */}
      </div>
        </div>
    )
}
