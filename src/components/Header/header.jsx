import mexLogo from "../../assets/mexLogo.png";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src={mexLogo} alt="Logo" className="header-logo" />
                <h1>ICM&A</h1>
            </div>

        </header>
    );
}