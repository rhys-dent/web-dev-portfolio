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
  box-shadow: 0 0 4px black;
  padding: 0 4vh 4vh 4vh;
  height: min-content;
  input {
    width: 100%;
  }
  div input {
    width: 50%;
  }
  div textarea {
  }
`;

export default function () {
  return (
    <Contact>
      <Form
        onSubmit={(e) => {
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
            );
        }}
      >
        <div>
          <h1>Send me a message</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <br />
        <textarea cols="100" rows="25"></textarea>
      </Form>
    </Contact>
  );
}
