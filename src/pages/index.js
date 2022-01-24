import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import github from '../assets/nav-github.png'
import looking from '../assets/me.png'

export default function WebsiteIndex() {
  const [followers, setFollowers] = useState(null)
  useEffect(() => {
    async function getGithubAPI() {
      const response = await fetch('https://api.github.com/users/heriswn')
      const data = await response.json()

      return data
    }

    getGithubAPI().then((data) => {
      setFollowers(data.followers)
    })
  }, [])

  return (
    <Layout>
      <Helmet title="Home | Gatsby Dark Mode Starter" />
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>Hey, I'm Heri</h1>
                <p className="subtitle small">
                  I'm a data analyst in Indonesia. I love building
                  open-source <Link to="/404">projects</Link> and{' '}
                  <Link to="/404">writing</Link> about what I learn. This
                  website is my digital garden—a compendium of the things I've
                  learned and created over the years.
                </p>
              </div>
              <img src={looking} alt="Me" className="main-image desktop-only" />
            </div>
            <p className="hero-buttons">
              <Link to="/404" className="button">
                About me
              </Link>
              {followers && (
                <a
                  href="https://github.com/taniarascia"
                  className="button icon-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="GitHub" />
                  {Number(followers).toLocaleString()} on GitHub
                </a>
              )}
            </p>
          </div>
        </header>
        <div className="container">
          <h2 className="main-header">Newsletter</h2>
          <div className="flex-content">
            <p>
              Subscribe to the newsletter to get my latest content by email. Not
              on any set schedule. Unsubscribe anytime.
            </p>
            <p className="hero-buttons">
              <a
                href="/#"
                className="button"
              >
                Subscribe
              </a>
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}