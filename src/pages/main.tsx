import { useState } from "react";

const MainPage = (props: any) => {
  const [click, setClick] = useState(false);
  const [number, setNumber] = useState(0);
  let message_click_me: string = "You Click Me!!";

  const handleClickMe = (message: string) => {
    click === false ? setClick(true) : setClick(false);
    alert(message);
  };

  const handleIncreament = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    number < 1 ? setNumber(0) : setNumber(number - 1);
  };

  return (
    <div>
      <h4 className="display-4">{props.title}</h4>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => handleClickMe(message_click_me)}
      >
        Click Me
      </button>
      <button
        type="button"
        className="btn btn-sm btn-primary mr-1 ml-1"
        onClick={handleIncreament}
      >
        +
      </button>
      {"number: " + number}
      <button
        type="button"
        className="btn btn-sm btn-primary ml-1"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};

export default MainPage;
