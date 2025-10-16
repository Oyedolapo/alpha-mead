import React from "react";

const Country = ({ data }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{data.title}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content}} />
            {data.secondContent && (
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.secondContent }}/>
            )}
        </div>
    )
};

export default Country;
