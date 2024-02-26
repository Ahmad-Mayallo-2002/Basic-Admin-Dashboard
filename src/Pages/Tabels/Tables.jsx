import { Container } from "react-bootstrap";
import "./Tables.scss";
import { AuthorsTableData, ProjectsTableData } from "../../assets/data/TablesData";
export const Tables = () => {
    return (
        <section className="tables second-col">
            <main>
                <article>
                    <table>
                        <caption className="shadow">Authors Table</caption>
                        <thead className="text-uppercase">
                            <tr>
                                <td>author</td>
                                <td>function</td>
                                <td>status</td>
                                <td>employed</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AuthorsTableData.map(
                                    (element, key) => {
                                        const {image, name, email, functionOne, functionTwo, status, employed, color} = element;
                                        return (
                                            <tr key={key}>
                                                <td className="d-flex align-items-center">
                                                    <img src={image} alt="" width={32} height={32} />
                                                    <div className="text">
                                                        <h6 className="mb-0">{name}</h6>
                                                        <small>{email}</small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{functionOne}</p>
                                                    <small>{functionTwo}</small>
                                                </td>
                                                <td>
                                                    <p className="text-white rounded p-2" style={{backgroundColor: `${color}`, width: "fit-content"}}>{status}</p>
                                                </td>
                                                <td><p>{employed}</p></td>
                                                <td><button>Edit</button></td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </article>
                <article>
                    <table>
                        <caption className="shadow">Projects Table</caption>
                        <thead className="text-uppercase">
                            <tr>
                                <td>projects</td>
                                <td>budget</td>
                                <td>status</td>
                                <td>completion</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ProjectsTableData.map(
                                    (element, key) => {
                                        const {icon, name, budget, status, completion, color} = element;
                                        return (
                                            <tr key={key}>
                                                <td className="d-flex align-items-center">
                                                    <img src={icon} width={32} height={32} />
                                                    <h6 className="mb-0">{name}</h6>
                                                </td>
                                                <td>
                                                    <p>{budget}</p>
                                                </td>
                                                <td>
                                                    <p>{status}</p>
                                                </td>
                                                <td className="">
                                                    <span className="text-secondary">{completion}</span>
                                                    <span className="progress">
                                                        <span className="track" style={{width: `${completion}`, backgroundColor: `${color}`}}></span>
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </article>
            </main>
        </section>
    )
}