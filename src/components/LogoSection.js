import { useEffect, useState } from 'react';

const LogoSection = (props) => {
    const { annotationPrefix, logos, title } = props;
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const url = "https://api.thedogapi.com/v1/images/search?limit=5";

        let myHeaders = new Headers();
        myHeaders.append('x-api-key', 'bb81c8fc-ffd0-40df-ad8d-d90d2a550d5b');



        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    Headers: headers: {"Content-type": "application/json;charset=UTF-8"}
                });
                const json = await response.json();
                console.log(json);
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
            <div
                className="flex justify-center items-center"
                data-sb-field-path=".logos">
                {logos.map((logo, index) => (
                    <div className="p-6" key={index} data-sb-field-path={`.${index}`}>
                        <img
                            className="mb-2"
                            height="60px"
                            width="60px"
                            src={logo.image}
                            data-sb-field-path=".image#@src"
                        />
                        <h2 className="text-sm text-gray-400" data-sb-field-path=".name">
                            {logo.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSection;