import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "./Dashboard.scss";
import { salesData, chartsData, projectsData, ordersData } from "../../assets/data/DashboardData";
import Chart from "react-apexcharts";
import React from "react";

export const Dashboard = () => {
    const options = {
        chart: {
            toolbar: { show: false },
            foreColor: "#fff",
            height: "250px",
        },
        
        markers: {
            size: 3,
            colors: "#fff",
            strokeColors: '#fff'
        },
        colors: ['#fff'],
        plotOptions: {
            bar: {
                distributed: true,
                columnWidth: '15%',
                borderRadius: '5',
                borderRadiusApplication: 'end',
            }
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: true } },
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        xaxis: {
            show: true,
            axisBorder: { show: false }
        },
    };
    return (
        <section className="dashboard second-col position-relative">
            <main>
                <div className="sales">
                    <Row>
                        {
                            salesData.map(
                                (element, key) => {
                                    const {icon, title, number, percentage, theDate} = element;
                                    return (
                                        <Col key={key} className="col-lg-3 col-sm-12 col-md-6 col-12">
                                            <article className="shadow">
                                                <div className="head">
                                                    <div className={`image-${key+1}`}><img src={icon} alt="" /></div>
                                                    <div className="text text-end">
                                                        <small>{title}</small>
                                                        <h4>{number}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <p className="mb-0">
                                                    <span className="fw-bold">{percentage}</span>
                                                    {theDate}
                                                </p>
                                            </article>
                                        </Col>
                                    )
                                }
                            )
                        }
                    </Row>
                </div>
                <div className="charts">
                    <Row className="row-gap-3">
                        {
                            chartsData.map(
                                (element, key) => {
                                    const {text, title, date, type, series, yaxis, graphCategories} = element;
                                    return (
                                        <Col key={key} className="col-lg-4 col-md-6 col-12">
                                            <article className="shadow">
                                                <div className={`graph-${key+1}`}>
                                                    <Chart type={type} width="100%" height="200" series={series} options={{...options, yaxis}} />
                                                </div>
                                                <div className="description">
                                                    <h5>{title}</h5>
                                                    <p>{text}</p>
                                                    <hr />
                                                    <p className="mb-0"><i className="fa-regular fa-clock me-1"></i> {date}</p>
                                                </div>
                                            </article>
                                        </Col>
                                    )
                                }
                            )
                        }
                    </Row>
                </div>
                <div className="projects">
                    <Row>
                        <Col className="col-lg-8 col-md-6 col-12 col-sm-12">
                            <article className="shadow p-3 h-100">
                                <div className="head">
                                    <div className="text d-flex align-items-center justify-content-between">
                                        <h4>Projects</h4>
                                        <p className="mb-0">
                                            <i className="fa-solid fa-check"></i>
                                            <b>30 done</b> this month
                                        </p>
                                    </div>
                                </div>
                                <div className="body">
                                    <table>
                                        <thead>
                                            <tr className="text-uppercase">
                                                <td>Icons</td>
                                                <td>Companies</td>
                                                <td>members</td>
                                                <td>budget</td>
                                                <td>completion</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                projectsData.map(
                                                    (element, key) => {
                                                        const {companyName, companyImage, budget, completion, backgroundColor, members} = element;
                                                        return (
                                                            <tr key={key}>
                                                                <td><img src={companyImage} width={36} height={36} alt="" /></td>
                                                                <td>{companyName}</td>
                                                                <td className="members">
                                                                    {
                                                                        members.map(
                                                                            (image, key) => <img width={30} height={30} className="rounded-circle position-relative" src={image} key={key} alt="" style={{left: ` ${-15 * key}px`}} />
                                                                        )
                                                                    }
                                                                </td>
                                                                <td>{budget}</td>
                                                                <td>
                                                                    <span>{completion}</span>
                                                                    <span className="progress" style={{height: "5px"}}>
                                                                        <span className="track d-block" style={{width: `${completion}`, backgroundColor: `${backgroundColor}`}}></span>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </article>
                        </Col>
                        <Col className="col-lg-4 col-md-6 col-12 col-sm-12">
                            <article className="shadow p-3">
                                <h5 className="mb-0">Orders overview</h5>
                                <p className="mt-3">
                                    <i className="fa-solid fa-arrow-up"></i>
                                    <b className="mx-2">24%</b>
                                    this month
                                </p>
                                <ListGroup>
                                    {
                                        ordersData.map(
                                            (element, key) => {
                                                const {icon, head, text} = element;
                                                return (
                                                    <ListGroup.Item key={key} className="d-flex">
                                                        <i className={`${icon} me-3 icons-${key+1}`}></i>
                                                        <div className="text">
                                                            <h6>{head}</h6>
                                                            <p className="mb-0">{text}</p>
                                                        </div>
                                                    </ListGroup.Item>
                                                )
                                            }
                                        )
                                    }
                                </ListGroup>
                            </article>
                        </Col>
                    </Row>
                </div>
            </main>
        </section>
    )
}