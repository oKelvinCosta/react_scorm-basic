import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate(); //hook, must be called with a variable

  return (
    <div style={{ marginBottom: "50px" }}>
      <p>
        <b>Menu</b>
      </p>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => navigate("/")} style={{ marginRight: "10px" }}>
          Home
        </button>

        <button onClick={() => navigate("/about")}>About</button>
      </div>
    </div>
  );
}

export default Navigation;
