import { useEffect, useState, useContext } from "react";
import { useHistory, useParams } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import CommentCard from './CommentCard';
import NewCommentForm from "./NewCommentForm";

function PlaceDetails() {

	const { placeId } = useParams()
	const history = useHistory()
	const [place, setPlace] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.REACT_APP_SERVER_URL}places/${placeId}`)
			const resData = await response.json()
			setPlace(resData)
		}
		fetchData()
	}, [placeId])

	if (place === null) {
		return <h1>Loading</h1>
	}

	function editPlace() {
		history.push(`/places/${place.placeId}/edit`)
	}

	async function deletePlace() {
		await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}`, {
			method: 'DELETE'
		})
		history.push('/places')
	}

	async function deleteComment(deletedComment) {
		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}/comments/${deletedComment.commentId}`, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			}
		})
		setPlace({
			...place,
			comments: place.comments
				.filter(comment => comment.commentId !== deletedComment.commentId)
		})
	}

	async function createComment(commentAttributes) {
		const response = await fetch(`${process.env.REACT_APP_SERVER_URL}places/${place.placeId}/comments`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(commentAttributes)
		})

		const comment = await response.json()

		setPlace({
			...place,
			comments: [
				...place.comments,
				comment
			]
		})
	}

	let comments = (
		<h5 className="inactive">
			No comments yet!
		</h5>
	)
	let rating = (
		<h5 className="inactive">
			Not yet rated
		</h5>
	)
	if (place.comments.length) {
		let sumRatings = place.comments.reduce((tot, c) => {
			return tot + c.stars
		}, 0)
		let averageRating = Math.round(sumRatings / place.comments.length)
		let stars = ''
		for (let i = 0; i < averageRating; i++) {
			stars += '⭐️'
		}
		rating = (
			<h3>
				{stars} stars
			</h3>
		)
		comments = place.comments.map(comment => {
			return (
				<CommentCard
					key={comment.commentId}
					comment={comment}
					onDelete={() => deleteComment(comment)}
				/>
			)
		})
	}

	let placeActions = null

	if (CurrentUser?.role === 'admin') {
		placeActions = (
			<>
				<a className="btn btn-warning" onClick={deletePlace}>
					Edit
				</a>
				<button type="submit" className="btn btn-danger" onClick={deletePlace}>
					Delete
				</button>
			</>
		)
	}

	return (
		<main>
			<div className="row">
				<div className="col-sm-6">
					<img style={{ maxWidth: 500, maxHeight: 500 }} src={place.pic} alt={place.name} />
				</div>
				<div className="col-sm-6">
					<h1>{place.name}</h1>
					<h4>
						Rating
					</h4>
					{rating}
					<br />
					<h4>
						Description
					</h4>
					<h5>
						{place.name} has been serving {place.city}, {place.state}.
					</h5>
					<h5>
						You can find this in {place.city}, {place.state}
					</h5>
					<br />
					<a className="btn btn-warning" onClick={editPlace}>
						Edit
					</a>{` `}
					<button type="submit" className="btn btn-danger" onClick={deletePlace}>
						Delete
					</button>
				</div>
			</div>
			<hr />
			<h4>Comments</h4>
			<div className="row">
				{comments}
			</div>
			<hr />
			<h4>Share your experience below!</h4>
				<NewCommentForm
					place={place}
					onSubmit={createComment}
				/>
		</main>
	)
}

export default PlaceDetails