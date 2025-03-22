import style from "./App.module.css";

function App() {
  const pets = [
    {
      name: "Kitty",
      image:
        "https://i.pinimg.com/474x/4a/73/d3/4a73d39983123d16812300c2f350c4eb.jpg",
    },
    {
      name: "Puppy",
      image:
        "https://i.pinimg.com/474x/21/2f/c8/212fc8c86b4b30cdaff1e9e1d7ae377a.jpg",
    },
  ];

  return (
    <>
      {pets.map((pet, index) => (
        <div key={pet.index} className={style.box}>
          <div className={style.image}>
            <img src={pet.image} alt={pet.name} />
          </div>
          <h2> {pet.name} +1</h2>
        </div>
      ))}
    </>
  );
}

export default App;
