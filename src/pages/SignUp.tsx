import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SubmitHandler } from "react-hook-form";

import style from "../components/SignForm.module.scss";

import SignForm from "../components/SignForm";
import { Inputs } from "../utils/types";
import { postRequest } from "../utils/requests";
import preloader from "../assets/img/preloader.gif";

const SignUp: FC = () => {
  const [success, setSuccess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => setSuccess(null), 3000);
    return () => clearTimeout(id);
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await postRequest("signup", data);
      if (response?.ok) {
        setTimeout(() => navigate("../login"), 2000);
        setSuccess(true);
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
        label={"Signup"}
        onSubmit={onSubmit}
        path={"/login"}
        btnTitle={"SIGN UP"}
        question={"Already have an account?"}
        linkTitle={"Login"}
      />
      {success && (
        <>
          <div className={style.fill}></div>
          <div className={style.success}>
            Registration comleted successfully!
            <img src={preloader} alt="" className={style.preloader} />
          </div>
        </>
      )}
      <div className={success === false ? `${style.fail} ${style.failActive}` : style.fail}>
        User already exists
      </div>
    </>
  );
};

export default SignUp;
