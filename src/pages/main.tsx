const MainPage = (props: any) => {
  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      <h3 className="font-weight-normal">User</h3>
      <div className="row p-3">
        {props.data_person.map((person: any, key: number) => {
          return (
            <div
              key={key}
              className="col-sm-12 col-md-3 p-3 border rounded shadow-sm m-1"
            >
              <strong>{person.person_name}</strong> <br />
              <small>{person.email}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
