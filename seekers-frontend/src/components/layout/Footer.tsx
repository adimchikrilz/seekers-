export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand" style={{ marginBottom: 6 }}>
              <div className="crest">SG</div>
              <div className="brand-name">
                Seekers Group
                <br />
                Of Schools
              </div>
            </div>
            <p>
              A Christian private educational institution accredited by the Ondo State Ministry
              of Education, located at Idanre Garage, Oke-Aro, Akure.
            </p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Academic Calendar</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Director&rsquo;s Page</a></li>
              <li><a href="#">Employment</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Portal Sign In</a></li>
              <li><a href="#">Online Library</a></li>
              <li><a href="#">Check Result</a></li>
              <li><a href="#">e-Testimonial</a></li>
              <li><a href="#">Help / FAQs</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul className="foot-contact">
              <li>Oke-Aro, Akure, Ondo State</li>
              <li>+234 903 474 7594</li>
              <li>info@seekersschools.com</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Seekers Group of Schools. All rights reserved.</span>
          <span>Website design refresh — landing page concept</span>
        </div>
      </div>
    </footer>
  );
}
