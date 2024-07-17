import { useState, FC } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import style from "./SignForm.module.scss";

import { Inputs } from "../utils/types";

interface ISignFormProps {
  label: string;
  onSubmit: SubmitHandler<Inputs>;
  path: string;
  btnTitle: string;
  linkTitle: string;
  question: string;
}

const SignForm: FC<ISignFormProps> = ({
  label,
  onSubmit,
  path,
  btnTitle,
  question,
  linkTitle,
}) => {
  const [isPassVisible, setPassVisible] = useState<boolean>(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const ClearInputButton = (reset: () => void) => {
    return (
      <div className={style.crossBox} onClick={() => reset()}>
        <span className={style.one}></span>
        <span className={style.two}></span>
      </div>
    );
  };

  const inputStyle = `${style.input} ${style.inputWrong}`;

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>{label}</label>
        <div className={style.inputBox}>
          <input
            placeholder="Username"
            className={errors.password ? inputStyle : style.input}
            {...register("username", { required: true })}
          />
          {ClearInputButton(() => reset({ username: "" }))}
        </div>
        <div className={style.inputBox}>
          <input
            placeholder="Password"
            className={errors.password ? inputStyle : style.input}
            {...register("password", { required: true })}
            type={isPassVisible ? "" : "password"}
          />
          {ClearInputButton(() => reset({ password: "" }))}
        </div>
        <div className={style.checkBox}>
          <input
            className={style.check}
            type="checkbox"
            onChange={() => setPassVisible(!isPassVisible)}
          />
          <p>Show password</p>
        </div>
        <input className={style.button} type="submit" value={btnTitle} />
        <div>
          {question} <Link to={path}>{linkTitle}</Link>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
