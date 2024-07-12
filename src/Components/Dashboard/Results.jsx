import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./result.css"

const Results = () => {

  const data = [
    { category: 'Math', totalQuestions: 10, correctAnswers: 8, wrongAnswers: 2 },
    { category: 'Science', totalQuestions: 15, correctAnswers: 12, wrongAnswers: 3 },
    { category: 'History', totalQuestions: 20, correctAnswers: 18, wrongAnswers: 2 },
    // Add more data as needed
  ];

  return (
    <>
    <Sidebar />
    <section id="content">
      <main>
        <div className="table-container">
          <h2>Quiz Results</h2>
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Total Questions</th>
                <th>Correct Answers</th>
                <th>Wrong Answers</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td>{row.totalQuestions}</td>
                  <td>{row.correctAnswers}</td>
                  <td>{row.wrongAnswers}</td>
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

export default Results