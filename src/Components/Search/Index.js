import React, { useState } from 'react';
import "../../styles/search.scss";
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import { apiURL } from '../../utils/apiURL';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ic_search, ic_call_made } from 'react-icons-kit/md';

const Index = () => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [suggestBox, setSuggestBox] = useState(false);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [results, setResults] = useState([]);

    // onChange Search
    const onChnageSearch = async (event) => {
        try {
            if (event.target.value) {
                setSuggestBox(true)
                setIsSearchLoading(true)
                const response = await axios.get(`${apiURL}website/search/${event.target.value}`)
                setResults(response.data)
                setSuggestBox(true)
                setIsSearchLoading(false)
            } else {
                setSuggestBox(false)
                setIsSearchLoading(false)
            }
        } catch (error) {
            if (error) {
                console.log(error.response)
            }
        }
    }

    const handleClick = data => {
        setSuggestBox(false)
        history.push(`/search-results?query=${data}`)
    }

    // Submit Search
    const onSubmit = data => {
        setSuggestBox(false)
        history.push(`/search-results?query=${data.filterdata}`)
    }

    return (
        <div>
            <div className="search-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        name="filterdata"
                        onChange={onChnageSearch}
                        className={errors.filterdata ? "form-control shadow-none error" : "form-control shadow-none"}
                        placeholder="Enter Your Keyword"
                        ref={register({
                            required: true
                        })}
                    />
                    <Icon icon={ic_search} size={25} className="search-icon" />
                </form>

                {/* Suggest Box */}
                {suggestBox ?
                    <div className="suggest-box shadow">
                        {isSearchLoading ?
                            <div className="search-loading">
                                <div className="container">
                                    <div className="loading-item-1"></div>
                                    <div className="loading-item-2"></div>
                                    <div className="loading-item-3"></div>
                                    <div className="loading-item-4"></div>
                                    <div className="loading-item-5"></div>
                                </div>
                            </div>
                            : null}

                        {results && results.length > 0 ? (results.map((result) =>
                            <div className="result" key={result.id} onClick={() => handleClick(result.name)}>
                                <div className="d-flex">
                                    <div><p className="mb-0 pl-0">{result.name}</p></div>
                                    <div className="ml-auto">
                                        <Icon icon={ic_call_made} size={18} />
                                    </div>
                                </div>
                            </div>
                        )) :
                            <div className="p-3">
                                <p className="mb-0 text-unique">No result found.</p>
                            </div>
                        }
                    </div>
                    : null}

            </div>
        </div>
    );
};

export default Index;