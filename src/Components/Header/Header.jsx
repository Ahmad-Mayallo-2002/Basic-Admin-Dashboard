import { Container } from "react-bootstrap";
import "./Header.scss";
import { Bell, List, Setting, Star, User } from "../../assets/SVG";
export const Header = () =>{
    return (
        <header>
            <Container fluid className="d-flex align-items-center">
                <div className="text">
                    <h1 className="fs-4 mb-0 fw-bold">Material Dashboard</h1>
                </div>
                <div className="setting">
                    <label>
                        <input type="text" />
                        <span>Type Here...</span>
                    </label>
                    <button className="text-uppercase builder">online builder</button>
                    <div className="rating d-flex align-items-center">
                        <button>
                            <Star />
                            Stars
                        </button>
                        <p className="mb-0 bg-white text-secondary">10,653</p>
                    </div>
                    <div className="buttons">
                        <button className="bars">
                            <List />
                        </button>
                        <button className="icon-rotate">
                            <Setting />
                        </button>
                        <button>
                            <Bell />
                        </button>
                        <button className="fw-bolder sign">
                            <User />
                            Sign in
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}