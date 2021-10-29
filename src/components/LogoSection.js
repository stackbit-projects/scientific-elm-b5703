import React, { useEffect, useState } from 'react';

const LogoSection = (props) => {
    const { annotationPrefix, title, limit, api_url } = props;
    const [dogs, setDogs] = useState([]);

    console.log(limit, api_url);
    useEffect(() => {

        if (!api_url) {
            return;
        }

        if (!limit) {
            limit = 5;
        }


        const url = `${api_url}?limit=${limit}`;
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    headers: { "x-api-key": "bb81c8fc-ffd0-40df-ad8d-d90d2a550d5b" }
                });
                const json = await response.json();
                setDogs(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 lg:py-20 mt-10 mb-10 text-center"
            data-sb-field-path={annotationPrefix}>
            <h1
                className="text-3xl tracking-tight sm:text-4xl mb-2"
                data-sb-field-path=".title">
                {title}
            </h1>
            {dogs.map((dog) => (
                <React.Fragment>
                    <p key={dog.id}>{dog.name}</p>
                    <img key={dog.image.id} src={dog.image.url} />
                </React.Fragment>
            ))};
        </div>
    );
};

export default LogoSection;