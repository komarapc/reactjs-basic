import { useEffect, useState } from "react";

const MainPage = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("useEffect for name is running");
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log("useEffect for email is running");
    console.log(email);
  }, [email]);

  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      {/* <h1 className="font-weight-normal">&gt;Blog Components</h1> */}
      <hr />
      <div className="border rounded p-3 mb-3">
        Your Name: {name} <br />
        <button
          className="btn btn-sm btn-primary mt-3 mr-1"
          onClick={() => setName("Komar")}
        >
          Set Name
        </button>
        <button
          className="btn btn-sm btn-danger mt-3"
          onClick={() => setName("")}
        >
          Reset Name
        </button>
      </div>
      <div className="border rounded p-3">
        Your Email: {email} <br />
        <button
          className="btn btn-sm btn-primary mt-3 mr-1"
          onClick={() => setEmail("komar.izmi@gmail.com")}
        >
          Set Email
        </button>
        <button
          className="btn btn-sm btn-danger mt-3"
          onClick={() => setEmail("")}
        >
          Reset Email
        </button>
      </div>
    </div>
  );
};

export default MainPage;
