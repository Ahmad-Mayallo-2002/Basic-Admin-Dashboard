import "./Billing.scss";
import masterCard from "../../assets/img/logos/mastercard.png";
import visa from "../../assets/img/logos/visa.png";
import { InvoicesData, BillingInformation, newestData, yesterdayData } from "../../assets/data/BillingData";
export const Billing = () => {
    return (
        <section className="billing second-col">
            <main>
                <section className="payment">
                    <div className="master-card">
                        <i className="fa-solid fa-wifi"></i>
                        <h3>4562 1122 4594 7852</h3>
                        <article>
                            <div>
                                <small>Card Holder</small>
                                <h6>Jack Peterson</h6>
                            </div>
                            <div>
                                <small>Expires</small>
                                <h6>11/22</h6>
                            </div>
                            <img src={masterCard} alt="" />
                        </article>
                    </div>
                    <div className="salary package">
                        <i className="fa-solid fa-house"></i>
                        <h6>Salary</h6>
                        <small>Belong Interactive</small>
                        <hr />
                        <h3>+$2000</h3>
                    </div>
                    <div className="paypal package">
                        <i className="fa-solid fa-shield-halved"></i>
                        <h6>Paypal</h6>
                        <small>Freelance Payment</small>
                        <hr />
                        <h3>$455.00</h3>
                    </div>
                    <div className="method">
                        <div className="head">
                            <h3 className="mb-0">Payment Method</h3>
                            <button className="text-uppercase">+ add new card</button>
                        </div>
                        <div className="body">
                            <article className="d-flex align-items-center">
                                <img src={masterCard} alt="" />
                                <span>**** **** **** 7852</span>
                                <i className="fa-solid fa-pen"></i>
                            </article>
                            <article className="d-flex align-items-center">
                                <img src={visa} alt="" />
                                <span>**** **** **** 7852</span>
                                <i className="fa-solid fa-pen"></i>
                            </article>
                        </div>
                    </div>
                    <div className="invoices">
                        <div className="head">
                            <h4 className="mb-0">Invoices</h4>
                            <button className="text-uppercase">view all</button>
                        </div>
                        <ul>
                            {
                                InvoicesData.map(
                                    (element, key) => {
                                        const {data, id, price} = element;
                                        return (
                                            <li key={key}>
                                                <div className="text">
                                                    <h6>{data}</h6>
                                                    <small>{id}</small>
                                                </div>
                                                <div className="price">
                                                    <span>{price}</span>
                                                    <span>
                                                        <i className="fa-solid fa-file-pdf me-2"></i>
                                                        PDF
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                </section>
                <section className="billing-info">
                    <article className="info">
                        <div className="head">
                            <h5>Billing Information</h5>
                        </div>
                        <ul>
                            {
                                BillingInformation.map(
                                    (element, key) => {
                                        const {name, companyName, emailAddress, vatNumber} = element;
                                        return (
                                            <li key={key}>
                                                <div className="head">
                                                    <h6>{name}</h6>
                                                    <div className="edit-delete">
                                                        <div className="delete">
                                                            <i className="fa-solid fa-trash me-2"></i>
                                                            DELETE
                                                        </div>
                                                        <div className="edit">
                                                            <i className="fa-solid fa-pen me-2"></i>
                                                            EDIT
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <span>Company Name: </span>
                                                        <span>{companyName}</span>
                                                    </li>
                                                    <li>
                                                        <span>Email Address: </span>
                                                        <span>{emailAddress}</span>
                                                    </li>
                                                    <li>
                                                        <span>VAT Number: </span>
                                                        <span>{vatNumber}</span>
                                                    </li>
                                                </ul>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </article>
                    <article className="transaction">
                        <div className="head">
                            <h5>Your Transaction's</h5>
                            <small><i className="fa-regular fa-calendar me-2"></i> 23 - 30 March 2020</small>
                        </div>
                        <p className="text-secondary text-uppercase fw-bold my-3">newest</p>
                        <ul>
                            {
                                newestData.map(
                                    (element, key) => {
                                        const {arrow, head, text, price} = element;
                                        return (
                                            <li key={key}>
                                                <div className="left">
                                                    <i className={arrow}></i>
                                                    <div className="text">
                                                        <h6>{head}</h6>
                                                        <small>{text}</small>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    {price}
                                                </div>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                        <p className="text-secondary text-uppercase fw-bold my-3">yesterday</p>
                        <ul>
                            {
                                yesterdayData.map(
                                    (element, key) => {
                                        const {arrow, head, text, price} = element;
                                        return (
                                            <li key={key}>
                                                <div className="left">
                                                    <i className={arrow}></i>
                                                    <div className="text">
                                                        <h6>{head}</h6>
                                                        <small>{text}</small>
                                                    </div>
                                                </div>
                                                <div className="right">{price}</div>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </article>
                </section>
            </main>
        </section>
    )
}