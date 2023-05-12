import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className="redes">
            <a href="https://www.facebook.com/nicolas.floresceli">
                <img src="/img/facebook.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/Nikolas_celi">
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href="https://www.instagram.com/nicolasf_celi/">
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <a href="https://www.linkedin.com/in/nicolas-flores-celi/">
            <strong>Desarrollado por Nicolas Flores</strong>
        </a>
    </footer>
}

export default Footer;