import { useNavigate, Outlet } from "react-router-dom";
import Error_page from "../Components/error/Error_page";
import styles from "../Components/error/Error_page.module.css";

const ProtectedRoute = ({ user }: any) => {
  const navigate = useNavigate();
  if (!user) {
    return (
      <Error_page
        error="Sin autorización. Es necesario autenticar para obtener la respuesta solicitada."
        numb_error="401"
      />
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
