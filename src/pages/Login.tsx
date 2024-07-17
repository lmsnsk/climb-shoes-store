import { FC, useState } from "react";
import { SubmitHandler } from "react-hook-form";

import style from "../components/SignForm.module.scss";

import SignForm from "../components/SignForm";
import { AuthUser, Inputs } from "../utils/types";
import { postRequest } from "../utils/requests";
import { setAuth } from "../redux/productsSlice";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../redux/hooks";

const Login: FC = () => {
  const [success, setSuccess] = useState<boolean | null>(true);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await postRequest("login", data);
      if (response?.ok) {
        const data: AuthUser = await response.json();
        dispatch(setAuth(data));
        navigate("../products");
      } else {
        setSuccess(false);
      }
    } catch (er) {
      console.error(er, "Faild to auth");
    }
  };

  return (
    <>
      <SignForm
        label={"Login"}
        onSubmit={onSubmit}
        path={"/signup"}
        btnTitle={"LOG IN"}
        question={"Don't have an account?"}
        linkTitle={"Signup"}
      />
      {!success && <div className={style.fail}>User not found</div>}
    </>
  );
};

export default Login;
