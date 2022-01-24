import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'

export default function WebsiteIndex() {

  return (
    <Layout>
      <Helmet title="404 | Gatsby Dark Mode Starter" />
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>Not Found</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="flex-content">
            <p>
              Page not found. Sorry{" "}
              <span role="img" aria-label="Pensive emoji">
                😔
              </span>{" "}
              we couldn’t find what you were looking for.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}