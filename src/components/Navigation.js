import React from 'react'
import { Link } from 'gatsby'

import moon from '../assets/moon.png'
import github from '../assets/nav-github.png'
import twitter from '../assets/nav-twitter.png'

const mainNavItems = [
  { url: '/404', label: 'Articles' },
  { url: '/404', label: 'Projects' },
  { url: '/404', label: 'About me' },
]

const socialNavItems = [
  { url: 'https://github.com/heriswn', icon: github, label: 'GitHub' },
  { url: 'https://twitter.com/analystid', icon: twitter, label: 'Twitter' },
]

export const Navigation = ({ onUpdateTheme, theme }) => {
  return (
    <header className="navigation">
      <nav>
        <Link to="/" className="brand">
          <span>Heri Setiawan</span>
        </Link>
      </nav>
      <div>
        <nav>
          {mainNavItems.map((item) => (
            <Link to={item.url} key={item.label} activeClassName="active">
              <div className="tooltip">{item.label}</div>
            </Link>
          ))}
        </nav>
      </div>
      <div className="toolbar">
        <nav className="social-nav">
          {socialNavItems.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.label}
            >
              <img src={item.icon} alt={item.label} />
              <div className="tooltip">{item.label}</div>
            </a>
          ))}
        </nav>
        <button onClick={onUpdateTheme} className="theme-switcher">
          <img src={moon} alt="Theme" />
          <span className="desktop-only">
            {theme === 'dark' && 'Dark'}
            {theme === 'light' && 'Light'}
            {theme === 'sepia' && 'Sepia'}
          </span>
        </button>
      </div>
    </header>
  )
}
