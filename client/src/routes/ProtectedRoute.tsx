import { Outlet } from "react-router-dom";
import Error_page from "@/screens/error/Error_page";

const ProtectedRoute = ({ user }: any) => {
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
