import React from "react"
import { useLocation} from "react-router-dom"

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)

		

		return (
			<section className="container mt-5">
				<h3 className="text-primary">Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>
				<button type="button" className="btn btn-light">
			<Link to={"/"}>Back to Home</Link>
			</button>
			</section>
		)
 }

 export default QuizResult