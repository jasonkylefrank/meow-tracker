import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = ({ meowUpdates }) => (
  <div>
    <Head title="Home" />
    {/* <Nav /> */}

    <div className="hero">
      <h1 className="title">Meow Tracker</h1>
      <p className="description">
        The meows are as big as her heart!
      </p>
    </div>

    <div className="separator" />

    <div className="meowsCountWrapper">
      <label className="meowsCountLabel">Total meows: </label>
      <label className="meowsCount">{meowUpdates.length}</label>
    </div>

    <div className="updatesWrapper">
      <ul className="updates">
        {
          meowUpdates.map(update => (
            <li className="updateItem" key={update.timestamp}>
              <div className="message">{update.message}</div>
              <div className="timestamp">{update.timestamp}</div>
            </li>
          ))
        }
      </ul>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      :global(li) {
        list-style: none;
      }

      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .description {
        font-size: 12px;
        color: rgba(0,0,0,0.54);
      }
      .separator {
        border-top: 1px solid rgba(0,0,0,0.1);
        width: 212px;
        margin: 0 auto;
        margin: 56px auto;
      }
      .meowsCountWrapper {
        display: flex;
        justify-content: center;
        margin-top: 0;
        font-size: 14px;
        color: rgba(0,0,0,0.7);
      }
      .meowsCountLabel {
        color: rgba(0,0,0,0.4);
      }
      .meowsCount {
        margin-left: 8px;
        font-weight: bold;
      }
      .updatesWrapper {
        display: flex;
        justify-content: center;
      }
      .updates {
        margin: 24px;
        margin-top: 48px;
        padding: 0;
      }
      .updateItem {
        margin-bottom: 32px;
      }
      .message {
        margin-bottom: 4px;
      }
      .timestamp {
        font-size: 12px;
        color: rgba(0,0,0,0.45);
      }
      {/* .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      } 
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      */}
    `}</style>
  </div>
)

export async function getServerSideProps() {

  const res = await fetch("https://hobbseymeowtracker.azurewebsites.net/api/GetMeows?code=xJF/cteag7viajXk1xrk5hokq7pqa7y2o8ZYFetq2WkIhgX1WA5pEw==");
  const meowUpdates = await res.json();

  return { props: { meowUpdates } };
}

export default Home
