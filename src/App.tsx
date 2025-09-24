import './App.css'
import heroImg from './assets/hero image.png'
import logo from './assets/logo.png'
import speakingMock from './assets/mockup.png'
import speakingIcon from './assets/speaking icon.png'
import appleIcon from './assets/apple.svg'
import mockup2 from './assets/mockup2.png'

function App() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 這一行是關鍵！它會阻止表單的默認提交行為
    // 在這裡處理表單資料，例如發送到後端 API 或進行其他操作
    console.log("表單已提交！但頁面沒有重新加載。");
    // 您可以在這裡添加您的表單提交邏輯
  };

  const handleDownloadApp = () => {
    // 打開 App Store 的 Yoka English 應用頁面
    window.open('https://apps.apple.com/ca/app/yoka-english/id6747695231', '_blank');
  };


  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src={logo} alt="Yoka English" className="brand-logo" />
            <span className="brand-name">Yoka English</span>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <button className="btn-primary" onClick={handleDownloadApp}>Download App</button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>Master English with Confidence</h1>
              <p>
                Transform your English speaking skills with our innovative app featuring
                vocabulary flashcards and phrase practice for real conversations.
              </p>
              <button className="store-btn" onClick={handleDownloadApp}><img className="store-icon" src={appleIcon} alt="Apple" /> Download for iOS</button>
            </div>
            <div>
              <img src={heroImg} alt="App preview" style={{ width: '800px', maxWidth: '100%', justifySelf:'center' }}/>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="about" className="section center">
          <div className="container">
            <h2>Our Mission</h2>
            <p className="lead">
              We believe that learning English should be engaging, practical, and accessible to everyone.
              Our app is designed to help you improve your speaking confidence and expand your vocabulary
              through proven learning methods that make language acquisition natural and enjoyable.
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Powerful Learning Features</h2>
            <p className="lead">Everything you need to master English speaking and vocabulary</p>
          </div>
          <div className="container features">
            <div className="feature-card with-image">
              <div className="feature-content">
                <div className="icon-wrap"><img className="feature-icon" src={speakingIcon} alt="Speaking icon" /></div>
                <div>
                  <h3 className="feature-title">Improve Your Speaking</h3>
                  <p className="feature-sub">Speak Confidently</p>
                  <ul className="checklist">
                    <li><span className="check">✓</span> Real conversation scenarios</li>
                    <li><span className="check">✓</span> Native speaker examples</li>
                    <li><span className="check">✓</span> Speaking practice exercises</li>
                  </ul>
                </div>
              </div>
              <div className="mock-wrap">
                <img className="feature-mock" src={speakingMock} alt="Speaking practice mockup" />
              </div>
            </div>
            <div className="feature-card with-image">
              <div className="feature-content">
                <div className="icon-wrap"> 
                  <img className="feature-icon" src={speakingIcon} alt="Vocabulary icon" /></div>
                <div>
                  <h3 className="feature-title">Build Your Vocabulary</h3>
                  <p className="feature-sub">Mark Your Comfort Level</p>
                  <ul className="checklist">
                    <li><span className="check">✓</span> Spaced repetition algorithm</li>
                    <li><span className="check">✓</span> Progress tracking</li>
                    <li><span className="check">✓</span> Audio pronunciation</li>
                  </ul>
                </div>
              </div>
              <div className="mock-wrap">
                <img className="feature-mock" src={mockup2} alt="Vocabulary mockup" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h3>Ready to Start Learning?</h3>
            <p>Join thousands of learners who are already improving their English with Speak Easy</p>
            <button className="store-btn" onClick={handleDownloadApp}><img className="store-icon" src={appleIcon} alt="Apple" /> Download for iOS</button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container contact">
            <div>
              <h2>Contact Us</h2>
              <p>Have questions? We’d love to hear from you.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid two">
                <div className="field">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" placeholder="First name" />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" placeholder="Last name" />
                </div>
              </div>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" placeholder="How can we help?" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us a bit more..." />
                </div>
              </div>
              <button className="submit" type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">Copyright © YOKA ENGLISH. All Rights Reserved.</div>
      </footer>
    </div>
  )
}

export default App
