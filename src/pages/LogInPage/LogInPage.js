import './LogInPage.scss';
import WaveDesktop from "../../assets/Desktop/waveDesktop.svg"
import AppsDesktop from "../../assets/Desktop/appsDesktop.svg"
import LogInForm from "../../components/LogInForm";

function LogInPage() {
  return (
    <div className="LogInPage">
      <LogInForm />

      <img src={WaveDesktop} className="LogInPage__bgImage LogInPage__wave" />
      <img src={AppsDesktop} className="LogInPage__bgImage LogInPage__apps" />
    </div>
  );
}

export default LogInPage;
