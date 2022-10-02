import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/mega-menu.scss';

const Index = ({ items }) => {
    return (
        <div className="mega-menu">
            <div className="container-fluid">
                <div className="row">

                    {items && items.length > 0 ? items.map((item, i) =>
                        < div className="col-4 mb-4" key={i}>
                            <div className="d-flex">
                                <div>
                                    <img src={item.image} className="img-fluid" alt="..." />
                                </div>
                                <div className="pl-3">
                                    <h5>{item.name}</h5>
                                    {item.children && item.children.map((child, x) =>
                                        <Link
                                            key={x}
                                            to={`/shop/${child.id}`}
                                        >
                                            {child.name}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div >
    );
};

export default Index;