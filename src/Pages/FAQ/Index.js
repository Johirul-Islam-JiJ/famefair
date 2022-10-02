import React, { useState } from 'react';
import '../../styles/faq.scss';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';
import { Icon } from 'react-icons-kit';
import { plus, minus } from 'react-icons-kit/feather';

import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    const [payment1, setPayment1] = useState(false)
    const [payment2, setPayment2] = useState(false)
    const [payment3, setPayment3] = useState(false)
    const [payment4, setPayment4] = useState(false)
    const [payment5, setPayment5] = useState(false)

    const [delivery1, setDelivery1] = useState(false)
    const [delivery2, setDelivery2] = useState(false)
    const [delivery3, setDelivery3] = useState(false)
    const [delivery4, setDelivery4] = useState(false)
    const [delivery5, setDelivery5] = useState(false)

    const [order1, setOrder1] = useState(false)
    const [order2, setOrder2] = useState(false)
    const [order3, setOrder3] = useState(false)
    const [order4, setOrder4] = useState(false)
    const [order5, setOrder5] = useState(false)

    const [refund1, setRefund1] = useState(false)
    const [refund2, setRefund2] = useState(false)
    const [refund3, setRefund3] = useState(false)
    const [refund4, setRefund4] = useState(false)
    const [refund5, setRefund5] = useState(false)

    const [product_scock1, setProduct_scock1] = useState(false)
    const [product_scock2, setProduct_scock2] = useState(false)
    const [product_scock3, setProduct_scock3] = useState(false)
    const [product_scock4, setProduct_scock4] = useState(false)
    const [product_scock5, setProduct_scock5] = useState(false)

    const [account1, setAccount1] = useState(false)
    const [account2, setAccount2] = useState(false)
    const [account3, setAccount3] = useState(false)
    const [account4, setAccount4] = useState(false)
    const [account5, setAccount5] = useState(false)

    return (
        <div className="faq">
            <NavbarComponent />

            {/* Header */}
            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>frequently asked questions</h1>
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="body py-4 py-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Tab.Container id="left-tabs-example" defaultActiveKey="payment">
                                <Row className="px-3 px-sm-0">
                                    <Col md={4} lg={3} className="bg-white p-4">
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="payment">payment</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="delivery">delivery</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="order">order</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="refunds">refunds</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="product_stock">product & stock</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="account">account</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md={8} lg={9} className="px-0 px-md-4 mt-3 mt-md-0">
                                        <Tab.Content className="bg-white p-3">
                                            {/* Payment */}
                                            <Tab.Pane eventKey="payment">

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setPayment1(!payment1)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={payment1}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {payment1 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={payment1}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setPayment2(!payment2)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={payment2}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {payment2 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={payment2}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setPayment3(!payment3)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={payment3}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {payment3 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={payment3}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setPayment4(!payment4)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={payment4}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {payment4 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={payment4}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setPayment5(!payment5)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={payment5}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {payment5 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={payment5}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="delivery">
                                                {/* Delivery */}
                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setDelivery1(!delivery1)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={delivery1}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {delivery1 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={delivery1}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setDelivery2(!delivery2)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={delivery2}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {delivery2 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={delivery2}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setDelivery3(!delivery3)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={delivery3}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {delivery3 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={delivery3}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setDelivery4(!delivery4)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={delivery4}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {delivery4 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={delivery4}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setDelivery5(!delivery5)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={delivery5}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {delivery5 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={delivery5}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="order">
                                                {/* Order */}
                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setOrder1(!order1)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={order1}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {order1 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={order1}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setOrder2(!order2)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={order2}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {order2 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={order2}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setOrder3(!order3)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={order3}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {order3 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={order3}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setOrder4(!order4)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={order4}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {order4 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={order4}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setOrder5(!order5)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={order5}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {order5 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={order5}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="refunds">
                                                {/* Refunds */}
                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setRefund1(!refund1)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={refund1}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {refund1 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={refund1}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setRefund2(!refund2)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={refund2}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {refund2 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={refund2}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setRefund3(!refund3)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={refund3}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {refund3 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={refund3}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setRefund4(!refund4)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={refund4}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {refund4 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={refund4}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setRefund5(!refund5)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={refund5}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {refund5 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={refund5}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="product_stock">
                                                {/* Product & Stock */}
                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setProduct_scock1(!product_scock1)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={product_scock1}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {product_scock1 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={product_scock1}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setProduct_scock2(!product_scock2)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={product_scock2}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {product_scock2 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={product_scock2}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setProduct_scock3(!product_scock3)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={product_scock3}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {product_scock3 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={product_scock3}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setProduct_scock4(!product_scock4)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={product_scock4}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {product_scock4 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={product_scock4}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setProduct_scock5(!product_scock5)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={product_scock5}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {product_scock5 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={product_scock5}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="account">
                                                {/* Account */}
                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setAccount1(!account1)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={account1}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {account1 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={account1}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setAccount2(!account2)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={account2}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {account2 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={account2}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setAccount3(!account3)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={account3}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {account3 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={account3}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setAccount4(!account4)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={account4}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {account4 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={account4}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>

                                                <div className="card">
                                                    <div
                                                        className="card-header"
                                                        onClick={() => setAccount5(!account5)}
                                                        aria-controls="collapse-1"
                                                        aria-expanded={account5}
                                                    >
                                                        <div className="d-flex">
                                                            <div>
                                                                <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes</p>
                                                            </div>
                                                            <div className="ml-auto">
                                                                {account5 ? <Icon icon={minus} size={20} /> : <Icon icon={plus} size={20} />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Collapse in={account5}>
                                                        <div className="card-body" id="collapse-1">
                                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                                        </div>
                                                    </Collapse>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>

                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
};

export default Index;