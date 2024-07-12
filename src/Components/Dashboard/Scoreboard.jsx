import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Scoreboard = () => {

  const data = [
    { rank: 1, name: 'John Doe', categories: 'Category 1', score: 95 },
    { rank: 2, name: 'Jane Smith', categories: 'Category 2', score: 88 },
    // Add more data as needed
  ];

  return (
    <>
    <Sidebar />
    <section id="content">
      <main>
      <div className="table-container">
      <h2>Score Board</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Categories</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>{row.name}</td>
              <td>{row.categories}</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
      </main>
    </section>
  </>
  )
}

export default Scoreboard