import emailjs from "emailjs-com";
import styled from "styled-components";
const Contact = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 85vh;
	h1 {
		color: black;
		font-size: 2rem;
		color: whitesmoke;
	}
`;

const Form = styled.form`
	width: 60%;
	margin: 0 auto;
	box-shadow: 0 0 4px black;
	text-align: center;
	input {
		width: 100%;
		border: 1px solid black;
	}
	div input {
		width: 50%;
	}
	input[type="submit"] {
		display: inline-block;
		width: 25%;
		height: 50px;
	}
	textarea {
		width: 100%;
	}
	@media only screen and (max-width: 1000px) {
		div textarea {
			width: 100vw;
		}
	}
`;

export default function () {
	return (
		<Contact>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					emailjs
						.sendForm(
							"service_u3dr8kd",
							"template_hmnv7af",
							e.target,
							"user_hXe0OrmEMYraO9iuCTYUr"
						)
						.then(
							(result) => {
								console.log(result.text);
							},
							(error) => {
								console.log(error.text);
							}
						)
						.then(() => {
							e.target.reset();
						});
				}}
			>
				<div>
					<h1>Send me a message</h1>
					<input
						type="text"
						placeholder="Name"
						name="from_name"
						id="from_name"
						required
					/>
					<input type="text" placeholder="Email" required />
				</div>
				<input type="text" placeholder="Subject" name="subject" required />
				<br />
				<textarea cols="120" rows="10" name="message" required></textarea>
				<input type="submit" value="Send" />
			</Form>
		</Contact>
	);
}
