import "./LogInForm.scss"
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core";
import LogInFooter from "../LogInFooter";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(() =>({
  LogInForm__container: {
    zIndex: 3,
    textAlign: "center",
    padding: "60px 150px",
  },
  LogInForm__input: {
    width: "100%",
    height: 30,
    marginTop: 50,
    borderColor: "#B2B7BB",
    color: "#B2B7BB"
  },
  LogInForm__submit: {
    width: 212,
    height: 48,
    marginTop: 120,
    marginBottom: 16,
    background: "linear-gradient(90deg, #FF9146 0%, #FF351B 100%)",
    color: "#FEFEFE",
    fontSize: 16
  },
  LogInForm__caption: {
    fontSize: 30,
    fontWeight: "bold"
  },
  LogInForm__visibility: {
    color: "#B2B7BB"
  }
}));


const LogInForm = () => {

  const {LogInForm__container, LogInForm__submit, LogInForm__caption, LogInForm__input, LogInForm__visibility} = useStyles();

  const handleSubmit = () => {

  }

  const handleInput = () => {

  }


  return <div className="LogInForm">
    <Paper className={LogInForm__container}>

      <Typography variant="h5" className={LogInForm__caption}>LOGIN</Typography>

      <form className="LogInForm__form" onSubmit={(event) => {
        event.preventDefault();
        alert("Click!");
      }} >

        <div className="LogInForm__inputContainer">
          <TextField
            onClick={handleInput}
            label="Email Address"
            type="email"
            variant="outlined"
            className={LogInForm__input}
          />
        </div>
        <div className="LogInForm__inputContainer">
          <TextField
            onClick={handleInput}
            label="Password"
            type="password"
            variant="outlined"
            className={LogInForm__input}
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <VisibilityOutlinedIcon className={LogInForm__visibility} />
                </InputAdornment>
              )
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