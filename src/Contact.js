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
	margin: 0 auto;

	box-shadow: 0 0 4px black;
	height: min-content;
	width: min-content;
	text-align: center;
	input {
		width: 100%;
		border: 1px solid black;
	}
	div input {
		width: 50%;
	}
	div textarea {
	}
	@media only screen and (max-width: 1000px) {
		div textarea {
			columns: 30;
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
					<input type="text" placeholder="Name" required />
					<input type="text" placeholder="Email" required />
				</div>
				<input type="text" placeholder="Subject" required />
				<br />
				<textarea cols="50" rows="15" required></textarea>
				<input type="submit" />
			</Form>
		</Contact>
	);
}
