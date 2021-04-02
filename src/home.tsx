import { Fragment } from "react";

const Home = () => {
  const title: string = "Home Components";
  const persons: { id: number; person_name: string; email: string }[] = [
    {
      id: 0,
      person_name: "Komar",
      email: "komar.izmi@gmail.com",
    },
    {
      id: 1,
      person_name: "Haruka",
      email: "haruka@gmail.com",
    },
  ];

  return (
    <Fragment>
      <div className="container">
        <h1 className="display-4">
          {title} <br />
        </h1>
        <p>
          {persons.map((person, i) => {
            return <div>{person.email}</div>;
          })}
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
