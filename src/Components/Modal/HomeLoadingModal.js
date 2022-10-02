import React from 'react';
import '../../styles/modal.scss';
import LoadingGif from '../../assets/static/loading.gif';

const HomeLoadingModal = () => {
    return (
        <div className="home-loading-modal">
            <div className="flex-center flex-column">
                <div className="card border-0 rounded-0 p-0">
                    <img src={LoadingGif} className="img-fluid" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default HomeLoadingModal;