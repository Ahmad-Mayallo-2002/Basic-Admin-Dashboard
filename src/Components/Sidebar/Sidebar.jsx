import { Dashboard, Receipt, Table } from "../../assets/SVG";
import logo from "../../assets/img/logo-ct.png";
import { ListGroup } from "react-bootstrap";
import "./Sidebar.scss"
import { NavLink } from "react-router-dom";
import { useRef } from "react";
export const Sidebar = () => {
    const ref = useRef();
    const handleClick = () => {
        if (ref.current.className === "sidebar-return"  || ref.current.className === "") {
            ref.current.className = "sidebar-move";
        }
    }
    return (
        <aside ref={ref}>
            <i className="fa-solid fa-xmark" onClick={handleClick}></i>
            <h2><img src={logo} alt="" /> Material Dashboard 2</h2>
            <ListGroup>
                <ListGroup.Item>
                    <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>
                        <Dashboard />
                        Dashboard
                    </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/tables" className={({isActive}) => isActive ? "active-link" : ""}>
                        <Table />
                        Tabels
                    </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/billing" className={({isActive}) => isActive ? "active-link" : ""}>
                        <Receipt />
                        Billing
                    </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/sales" className={({isActive}) => isActive ? "active-link" : ""}>
                        <i className="fa-solid fa-s"></i>
                        Analytics
                    </NavLink>
                </ListGroup.Item>
            </ListGroup>
        </aside>
    )
}