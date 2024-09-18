import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Users Data</h1>
      <div class="userdetailsContainer">
        <p>Name: Sai Krishna</p>
        <p>Username: sai_96</p>
        <p>Email: saikrishna96@gmail.com</p>
        <p>City: Hyderabad</p>
        <button>View details</button>
        <div className="buttonsContainer">
          <button className="button">Edit Profile</button>
          <button className="button">Delete Profile</button>
        </div>
      </div>
    </div>
  );
}
