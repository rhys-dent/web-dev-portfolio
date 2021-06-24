import emailjs from "emailjs-com";
import styled from "styled-components";
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  h1 {
    color: black;
    font-size: 2rem;
    color: whitesmoke;
  }
`;

const Form = styled.form`
  width: min-content;
  margin: 0 auto;
  margin-top: 4vh;
  box-shadow: 0 0 4px black;
  padding: 0 4vh 4vh 4vh;
  height: min-content;
  input {
    width: 100%;
    border: 1px solid black;
  }
  div input {
    width: 50%;
  }
  div textarea {
    height:25vh;
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
        <textarea cols="100" rows="15" required></textarea>
        <input type="submit" />
      </Form>
    </Contact>
  );
}
