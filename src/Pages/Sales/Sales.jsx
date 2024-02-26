import { SalesCountryData, SalesInformation, TopSellingData } from "../../assets/data/SalesData";
import Chart from "react-apexcharts";
import "./Sales.scss";
export const Sales = () => {
    const pieOptions = {
        colors: ['#17c1e8', '#e91e63', '#3a416f', '#a8b8d8'],
        labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
        dataLabels: {
            enabled: false,
        }
    };
    const lineOptions = {
        chart: {
            toolbar: {
                show: false
            },
            foreColor: "#777"
        },
        markers: {
            size: 5
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            yaxis: { lines: { show: true } },
            xaxis: { lines: { show: true } },
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
        },
        colors: ['#e91e63', '#3a416f'],
        xaxis: {
            axisBorder: {
                show: false
            },
            categories: ['Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
    };
    const lineSeries = [
        {name: "Facebook Ads", data: [50, 100, 200, 190, 400, 350, 500, 450, 700]},
        {name: "Google Ads", data: [10, 30, 40, 120, 150, 220, 280, 250, 280]}
    ];
    const barOptions = {
        chart: {
            toolbar: { show: false },
            foreColor: "#aaa"
        },
        colors: '#3a416f',
        plotOptions: {
            bar: {
                horizontal: "false",
                borderRadius: 2,
                borderRadiusApplication: "last"
            }
        },
        dataLabels: { enabled: false },
        grid: {
            show: true,
            strokeDashArray: 5,
            xaxis: { lines: { show: true } },
            yaxis: { lines: { show: true } },
        },
        xaxis: { 
            categories: ['16-20', '21-25', '26-30', '31-36', '36-42' ,'42-50', '50+'],
            axisBorder: { show: false }
        },
    };
    const barSeries = [
        {
            name: "Sales",
            data: [15, 20, 12, 60, 20, 15, 25]
        }
    ];
    return (
        <section className="sales second-col">
            <main>
                <section className="information">
                    {
                        SalesInformation.map(
                            (element, key) => {
                                const {head, number, text} = element;
                                return (
                                    <article key={key} className="shadow">
                                        <div className="head">
                                            <span className="fw-bold">{head}</span>
                                            <span>6 May - 7 May</span>
                                        </div>
                                        <h6>{number}</h6>
                                        <p>{text}</p>
                                    </article>
                                )
                            }
                        )
                    }
                </section>
                <section className="charts">
                    <article className="shadow">
                        <div className="head">
                            <h3>Channels</h3>
                        </div>
                        <Chart type="pie" series={[15,20,12,60]} width="100%" height="400px" options={pieOptions} />
                    </article>
                    <article className="shadow">
                        <div className="head">
                            <h3>Revenue</h3>
                        </div>
                        <Chart type="line" series={lineSeries} width="100%" height="400px" options={lineOptions} />
                    </article>
                </section>
                <section className="country">
                    <article className="shadow">
                        <div className="head">
                            <h3>Sales by Age</h3>
                        </div>
                        <Chart type="bar" height="300px" width="100%" series={barSeries} options={barOptions} />
                    </article>
                    <article className="shadow">
                        <div className="head">
                            <h3>Sales by Countries</h3>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Country</td>
                                    <td>Sales</td>
                                    <td>Bounce</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    SalesCountryData.map(
                                        (element, key) => {
                                            const {flag, name, sales, bounce} = element;
                                            return (
                                                <tr key={key}>
                                                    <td>
                                                        <img src={flag} alt="" />
                                                        <span>{name}</span>
                                                    </td>
                                                    <td>{sales}</td>
                                                    <td>{bounce}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </article>
                </section>
                <section className="selling-products">
                    <article className="shadow">
                        <div className="head">
                            <h3>Top Selling Products</h3>
                            <table>
                                <thead>
                                    <tr className="text-uppercase">
                                        <td>products</td>
                                        <td>value</td>
                                        <td>ads spent</td>
                                        <td>refunds</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    TopSellingData.map(
                                        (element, key) => {
                                            const {image, name, ordersNumber, value, adsspent, refunds, arrow} = element;
                                            return (
                                                <tr key={key}>
                                                    <td>
                                                        <img src={image} alt="" />
                                                        <div className="text">
                                                            <h6>{name}</h6>
                                                            <small>
                                                                <span>{ordersNumber}</span> orders
                                                            </small>
                                                        </div>
                                                    </td>
                                                    <td>{value}</td>
                                                    <td>{adsspent}</td>
                                                    <td>{refunds} <i className={`${arrow}`}></i></td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                            </table>
                        </div>
                    </article>
                </section>
            </main>
        </section>
    )
}