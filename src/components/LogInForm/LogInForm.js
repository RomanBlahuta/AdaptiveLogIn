import "./LogInForm.scss"
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core";
import LogInFooter from "../LogInFooter";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles(() =>({
  LogInForm__container: {
    textAlign: "center",
    padding: "81px 167px",
    height: 667,
    width: 500,
    borderRadius: 10
  },
  LogInForm__input: {
    width: 260,
    height: 59,
    marginBottom: 30,
    borderColor: "#B2B7BB",
    color: "#B2B7BB"
  },
  LogInForm__submit: {
    width: 212,
    height: 48,
    marginTop: 60,
    marginBottom: 16,
    background: "linear-gradient(90deg, #FF9146 0%, #FF351B 100%)",
    color: "#FEFEFE",
    fontSize: 16
  },
  LogInForm__caption: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 78,
    marginTop: 81
  }
}));


const LogInForm = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [visibilityIconColor, setVisibilityIconColor] = useState("#B2B7BB");

  const { control, errors, handleSubmit } = useForm();

  const {LogInForm__container, LogInForm__submit, LogInForm__caption, LogInForm__input, LogInForm__visibility} = useStyles();

  const onSubmit = () => {
    alert(`Submitted!\nEmail: ${emailRef.current.value}\nPassword: ${passwordRef.current.value}`);
  }

  useEffect(() => {
    setVisibilityIconColor(errors.password ? "#f44336" : "#B2B7BB");
  }, [errors]);

  return <div className="LogInForm">
    <Paper className={LogInForm__container}>

      <Typography variant="h5" className={LogInForm__caption}>LOGIN</Typography>

      <form className="LogInForm__form" onSubmit={handleSubmit(onSubmit)} >

        <div className="LogInForm__inputContainer">
          <Controller name="email"
            as={(<TextField
              inputRef={emailRef}
              label="Email Address"
              type="email"
              variant="outlined"
              className={LogInForm__input}
              id="email"
              error={errors.email}
              helperText={errors.email ? "Email required" : ""}
            />)}
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 1,
            }}
          />
        </div>
        <div className="LogInForm__inputContainer">
          <Controller name="password"
            as={(<TextField
              inputRef={passwordRef}
              label="Password"
              type="password"
              variant="outlined"
              className={LogInForm__input}
              error={errors.password}
              helperText={errors.password ? "Password required" : ""}
              id="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <VisibilityOutlinedIcon style={{color: visibilityIconColor}} />
                  </InputAdornment>
                )
              }}
            />)}
            control={control}
            defaultValue=""
            rules={{
              required: true,
              minLength: 1,
            }}
          />
        </div>

        <div className="LogInForm__inputContainer">
          <Button classes={{root: LogInForm__submit}} type="submit" variant="contained">LOG IN</Button>
        </div>

      </form>

      <LogInFooter />

    </Paper>
  </div>
}

export default LogInForm;