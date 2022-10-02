import React from 'react';
import '../../styles/components/campaign-components/style.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left, ic_keyboard_arrow_right } from 'react-icons-kit/md';

const Index = ({ campaigns }) => {
    const customeSlider = React.useRef()
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    }

    const next = () => {
        customeSlider.current.slickNext()
    }

    const prev = () => {
        customeSlider.current.slickPrev()
    }

    // Replace white space with (_)
    const replaceWhiteSpace = (data) => {
        let productName = data
        productName = productName.replace(/ /g, "-")
        return productName
    }

    return (
        <div className="campaigns-slider">
            <div className="container">
                <div className="row">
                    {campaigns.length > 0 ?
                        <div className="col-12 campaign-column">

                            <Slider ref={customeSlider} {...settings}>
                                {campaigns && campaigns.map((campaign, i) =>
                                    <div className="card campaign-card" key={i}>
                                        <Link to={`/campaign/${campaign.id}/${replaceWhiteSpace(campaign.name)}`}>
                                            <div className="card-body">
                                                <img src={campaign.image} className="img-fluid" alt="..." />
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </Slider>

                            {/* Left direction */}
                            <div className="left-direction" onClick={prev}>
                                <Icon icon={ic_keyboard_arrow_left} size={25} style={{ color: '#fff' }} />
                            </div>

                            {/* Right direction */}
                            <div className="right-direction" onClick={next}>
                                <Icon icon={ic_keyboard_arrow_right} size={25} style={{ color: '#fff' }} />
                            </div>

                        </div>
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Index;