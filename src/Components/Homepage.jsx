import React from 'react'
import '../stylesheets/HomePage.css'
import communitycard from '../Images/community-card.png'
import distributecards from '../Images/distribute-cards.png'
import listencard from '../Images/listen-card.png'
import makebeatcard from '../Images/make-beat-card.png'
import mixingcard from '../Images/mixing-card.png'
import promotemusiccard from '../Images/promote-music.png'
import recordcard from '../Images/record-card.png'
import rightarrowicon27 from '../Images/right-arrow-icon-27.png'

const HomePage = () => {
  return (
    <main>
      <div className="circle"></div>
      <nav className="firth">
        <header>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="https://google.com">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://google.com">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://google.com">
                Community
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://google.com">
                Read Music
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://google.com">
                Contact us
              </a>
            </li>
          </ul>
        </header>
        <section className="front-page">
          <h1 className="head-text">WELCOME TO MURRANO MUSIC</h1>
          <h1 id="article">FEEL THE BEAT, FEEL THE VIBE, FEEL ALIVE!</h1>
          <div id="container">
            <a className="head-button" href="https://google.com">
              PROMOTE MY MUSIC
            </a>
            <a className="head-button" href="https://google.com">
              DISRIBUTE MY MUSIC
            </a>
          </div>
        </section>
      </nav>
      <section className="action">
        <div className="row">
          <div className="image-focus">
            <img src={distributecards} alt="distribute-cards" />
          </div>
          <div className="detail">
            <p className="detail-text">
              Distribute to all 243 music streaming platforms including Apple
              Music, Spotify, Audiomack, Youtube and more
            </p>
            <div className="detail-button">
              <a className="head-button" href="https://google.com">
                DISRIBUTE MY MUSIC
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="detail">
            <p className="detail-text">
              Promote your music via different promotional routes and introduce
              your music and brand to music lovers.
            </p>
            <div className="detail-button">
              {' '}
              <a className="head-button" href="https://google.com">
                PROMOTE MY MUSIC
              </a>{' '}
            </div>
          </div>
          <div className="image-focus">
            <img src={promotemusiccard} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="image-focus">
            <img src={makebeatcard} alt="" />
          </div>
          <div className="detail">
            <p className="detail-text">
              Get a custom beat that suites your artistry and your style
            </p>
            <div className="detail-button">
              {' '}
              <a className="head-button" href="https://google.com">
                MAKE ME A BEAT
              </a>{' '}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="detail">
            <p className="detail-text">
              Get high quality mixes and mastering of your recorded hit!
            </p>
            <div className="detail-button">
              {' '}
              <a className="head-button" href="https://google.com">
                MIXING & MASTERING
              </a>{' '}
            </div>
          </div>
          <div className="image-focus">
            <img src={mixingcard} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="image-focus">
            <img src={recordcard} alt="" />
          </div>
          <div className="detail">
            <p className="detail-text">
              Record your next hit song with the best engineers in the studio or
              the comfort of your home
            </p>
            <div className="detail-button">
              {' '}
              <a className="head-button" href="https://google.com">
                RECORD MY MUSIC
              </a>{' '}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="detail">
            <p className="detail-text">
              Listen to playlists that fits perfectly into your current mood
            </p>
            <div className="detail-button">
              {' '}
              <a className="head-button" href="https://google.com">
                LISTEN TO PLAYLISTS
              </a>{' '}
            </div>
          </div>
          <div className="image-focus">
            <img src={listencard} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="image-focus">
            <img src={communitycard} alt="" />
          </div>
          <div className="detail">
            <h2 id="community">Join The Music Community</h2>
            <p id="community-text">
              Get info about everything music from news to playlists and
              exciting new music directly in your inbox
            </p>
            <form
              method="post"
              className="form-data"
              id="formspree"
              action="https://formspree.io/f/mqkoovkd"
            >
              <fieldset>
                <label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="label"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <button type="submit" className="arrow-button">
                      <img id="arrow-button" src={rightarrowicon27} alt="" />
                    </button>
                  </div>
                  <small id="email_error" className="error">
                    Please enter a valid email address
                  </small>
                </label>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
