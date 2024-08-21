import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
	return (
		<section className="container">
			<h2 className="mt-5 text-light">Welcome to admin home page</h2>
			<hr />
			<nav className="nav flex-column">
				<Link to={"/create-quiz"} className="nav-link; bg-info">
					Create a New Quiz
				</Link>
				<Link to={"/all-quizzes"} className="nav-link bg-warning">
					Manage existing Quizes
				</Link>
			</nav>
		</section>
	)
}

export default Admin