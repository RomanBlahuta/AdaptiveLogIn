import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import LogInFooter from '../LogInFooter';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useForm, Controller } from 'react-hook-form';
import { useRef } from 'react';
import { IPadMiniViewPort, IPhone8Viewport } from '../../util/consts';

const useStyles = makeStyles(() => ({
    LogInForm__container: {
        textAlign: 'center',
        borderRadius: 10,
        zIndex: 5,
    },
    LogInForm__containerLg: {
        width: 566,
        height: 626,
        marginRight: 32,
    },
    LogInForm__containerMd: {
        width: 488,
        height: 626,
        marginRight: 32,
    },
    LogInForm__containerSm: {
        width: 548,
        height: 626,
        margin: 'auto',
    },
    LogInForm__containerXs: {
        width: 343,
        height: 488,
        margin: 'auto',
    },
    LogInForm__input: {
        width: 260,
        height: 59,
        marginBottom: 30,
        borderColor: '#B2B7BB',
        color: '#B2B7BB',
    },
    LogInForm__submit: {
        width: 212,
        height: 48,
        marginTop: 60,
        marginBottom: 16,
        background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
        color: '#FEFEFE',
        fontSize: 16,
    },
    LogInForm__caption: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 78,
        marginTop: 81,
    },
}));

const LogInForm = () => {
    const {
        LogInForm__container,
        LogInForm__submit,
        LogInForm__caption,
        LogInForm__input,
        LogInForm__containerLg,
        LogInForm__containerMd,
        LogInForm__containerSm,
        LogInForm__containerXs,
    } = useStyles();

    const lg = useMediaQuery(`(min-width: ${IPadMiniViewPort.horizontal.width + 1}px)`);
    const md = useMediaQuery(
        `(min-width: ${IPadMiniViewPort.vertical.width + 1}px) and (max-width: ${IPadMiniViewPort.horizontal.width}px)`
    );
    const sm = useMediaQuery(
        `(min-width: ${IPhone8Viewport.width + 1}px) and (max-width: ${IPadMiniViewPort.vertical.width}px)`
    );
    const xs = useMediaQuery(`(max-width: ${IPhone8Viewport.width}px)`);

    const emailRef = useRef();
    const passwordRef = useRef();

    const { control, errors, handleSubmit } = useForm();

    const onSubmit = () => {
        alert(`Submitted!\nEmail: ${emailRef.current.value}\nPassword: ${passwordRef.current.value}`);
    };

    return (
        <Paper
            className={`${LogInForm__container}${lg ? ' ' + LogInForm__containerLg : ''}${
                md ? ' ' + LogInForm__containerMd : ''
            }${sm ? ' ' + LogInForm__containerSm : ''}${xs ? ' ' + LogInForm__containerXs : ''}`}
        >
            <Typography variant="h5" className={LogInForm__caption}>
                LOGIN
            </Typography>

            <form className="LogInForm__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="LogInForm__inputContainer">
                    <Controller
                        name="email"
                        as={
                            <TextField
                                inputRef={emailRef}
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                className={LogInForm__input}
                                id="email"
                                error={Boolean(errors.email)}
                                helperText={errors.email ? 'Email required' : ''}
                            />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                            minLength: 1,
                        }}
                    />
                </div>
                <div className="LogInForm__inputContainer">
                    <Controller
                        name="password"
                        as={
                            <TextField
                                inputRef={passwordRef}
                                label="Password"
                                type="password"
                                variant="outlined"
                                className={LogInForm__input}
                                error={Boolean(errors.password)}
                                helperText={errors.password ? 'Password required' : ''}
                                id="password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <VisibilityOutlinedIcon
                                                style={{ color: errors.password ? '#f44336' : '#B2B7BB' }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                            minLength: 1,
                        }}
                    />
                </div>

                <div className="LogInForm__inputContainer">
                    <Button
                        classes={{ root: LogInForm__submit }}
                        style={Boolean(errors.email) || Boolean(errors.password) ? { background: '#B2B7BB' } : {}}
                        type="submit"
                        variant="contained"
                    >
                        LOG IN
                    </Button>
                </div>
            </form>

            <LogInFooter />
        </Paper>
    );
};

export default LogInForm;
