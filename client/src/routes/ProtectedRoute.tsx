import { useNavigate, Outlet } from "react-router-dom";
import styles from "../Components/error/Error_page.module.css";

const ProtectedRoute = ({ user }: any) => {
  const navigate = useNavigate();
  if (!user) {
    const handleClickHome = () => {
      navigate("/home");
    };

    const handleClickLogin = () => {
      navigate("/auth/login");
    };

    const handleClickRegister = () => {
      navigate("/auth/sing-up");
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <h1 style={{ color: "#111828", fontSize: "3.5rem", fontWeight: "500" }}>
          Ruta inaccesible
        </h1>
        <h3>
          Debes iniciar sesión o registrarte para acceder a dicho contenido.
        </h3>
        <button className={styles.btn} onClick={handleClickLogin}>
          Iniciar Sesión
        </button>
        <button className={styles.btn} onClick={handleClickRegister}>
          Registrarse
        </button>
        <button className={styles.btn} onClick={handleClickHome}>
          Regresar al Home
        </button>
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
