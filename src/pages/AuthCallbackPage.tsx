import { useCreateMyUser } from "@/api/myUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const hasUserCreated = useRef(false);
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    if (user?.sub && user?.email && !hasUserCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasUserCreated.current = true;
    }
    navigate("/");
  }, []);

  return <div>Loading..!</div>;
}
