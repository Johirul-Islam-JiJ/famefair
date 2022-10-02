import React from 'react';
import '../../styles/category-component.scss';
import { Link } from 'react-router-dom';

const CategoryComponent = ({ categories }) => {
    return (
        <div className="category-component">
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2 p-sm-0">

                        {categories.length > 0 && categories.slice(0, 6).map((category, i) =>
                            <Link to={`/shop/${category.id}`} key={i}>
                                <div className="card border-0 rounded-0">
                                    <img src={category.image} className="img-fluid" alt="..." />
                                </div>
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryComponent;