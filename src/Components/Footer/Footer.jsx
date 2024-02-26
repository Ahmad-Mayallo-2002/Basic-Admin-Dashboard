import { Container } from "react-bootstrap";
import { GitHub } from "../../assets/SVG";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <p className="mb-0">
                    &copy; 2024, made by Ahmad Mayallo for a better web.
                </p>
                <a href="https://github.com/Ahmad-Mayallo-2002">
                    <GitHub />
                    GitHub
                </a>
            </Container>
        </footer>
    )
}