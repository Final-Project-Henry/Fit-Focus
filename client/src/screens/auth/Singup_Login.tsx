import { useAppSelector, useSesion } from "@/app/hooks";
import { Navigate, useParams } from "react-router-dom";
import icon from "@/assets/legacy/icons/login.jpg";
import { selectUser } from "@/features/user/userSlice";
import Login from "./Login";
import SingUp from "./signup/sing-up";
import loading_icon from "@/assets/legacy/icons/loading.svg";
import ValidadUser from "./ValidadUser";
import ProtectedRoute from "@/routes/ProtectedRoute";

export default function SingUp_Login() {
  const { id } = useParams();
  useAppSelector(selectUser);
  const user_existing = useSesion();

  return (
    <>
      {!id?.includes("login") &&
      !id?.includes("sing-up") &&
      !id?.includes("nuevaContraseña") ? (
        <ProtectedRoute />
      ) : (
        <div className="m-2.5 flex h-[90vh] justify-center shadow-[0_4px_10px_#000e3e55]">
          {user_existing && <Navigate to="/fitFocus" />}
          <div className="flex h-full w-full">
            {id == "login" && <Login loading_icon={loading_icon} icon={icon} />}
            {id == "sing-up" && (
              <SingUp icon={icon} loading_icon={loading_icon} />
            )}
            {id == "nuevaContraseña" && (
              <ValidadUser loading_icon={loading_icon} icon={icon} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
