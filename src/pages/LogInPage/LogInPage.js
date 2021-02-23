import './LogInPage.scss';
import LogInForm from '../../components/LogInForm';
import Background from '../../components/Background';

function LogInPage() {
    return (
        <div className="LogInPage">
            <div className="LogInPage__formContainer">
                <LogInForm />
            </div>

            <Background />
        </div>
    );
}

export default LogInPage;
