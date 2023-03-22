import Login from "../../components/log-in/log-in.component";

import "./pets.styles.scss";

const Pets = () => {
  const pets = [
    {
      id: 1,
      name: "Alligator",
      imageUrl: "https://i.imgur.com/gKjvhlt.png",
    },
    {
      id: 2,
      name: "Rabbit",
      imageUrl: "https://i.imgur.com/VDOCpoN.png",
    },
    {
      id: 3,
      name: "Leopard",
      imageUrl: "https://i.imgur.com/T8rRf7Z.png",
    },
    {
      id: 4,
      name: "Zebra",
      imageUrl: "https://i.imgur.com/qknAHaC.png",
    },
    {
      id: 5,
      name: "Giraffe",
      imageUrl: "https://i.imgur.com/nf55Ezu.png",
    },
  ];
  return (
    <div>
      <br></br>
      <br></br>
      <Login pets={pets} />
      <h2>
        The award-winning website where k-5 students go to make sense of math -
        anytime, anywhere!
      </h2>
      <h3>Sign in. Pick a pet. Pick a land. Start the game!</h3>
    </div>
  );
};

export default Pets;
