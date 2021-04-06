import { Fragment, useEffect, useState } from "react";

import Head from "../../components/atoms/head";
import useInput from "../../hooks/useInput";

const CreateBlog = (props: any) => {
  // const [username, setUsername] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [dataForm, setDataForm] = useState<{
  //   username: string;
  //   email: string;
  // }>();

  // const handleSubmitForm = (e: any) => {
  //   e.preventDefault();
  //   setDataForm({
  //     username: username,
  //     email: email,
  //   });
  // };
  // useEffect(() => {
  //   console.log(dataForm);
  // }, [dataForm]);

  const [username, bindUsername, resetUsername] = useInput("");
  const [email, bindEmail, resetEmail] = useInput("");

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("emal: ", email);
    resetUsername();
    resetEmail();
  };
  return (
    <Fragment>
      <Head title="Form Control using useInput()"></Head>
      <h1 className="display-4">{props.title}</h1>
      <hr />
      <div className="div">
        <form action="" onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              autoComplete="off"
              {...bindUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="user_email"
              className="form-control"
              autoComplete="off"
              {...bindEmail}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-sm btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateBlog;
