import './LogInFooter.scss';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    LogInFooter__text: {
        fontSize: 16,
        color: '#B2B7BB',
        marginBottom: 16,
    },
}));

const LogInFooter = () => {
    const { LogInFooter__text } = useStyles();
    return (
        <div className="LogInFooter">
            <Typography variant="h6" className={LogInFooter__text}>
                Forgot your password?
            </Typography>
            <Typography variant="h6" className={LogInFooter__text}>
                Don't have an account yet?{' '}
                <a className="LogInFooter__link" href="/">
                    Register
                </a>
            </Typography>
        </div>
    );
};

export default LogInFooter;
