import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ items }) => {
    const navigate = useNavigate();

    return (
        <nav className="text-sm text-gray-600 mb-6">
            <ol className="flex flex-wrap items-center space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.link ? (
                            <button
                                onClick={() => navigate(item.link)}
                                className="text-green-700 hover:underline font-medium  uppercase text-xs"
                            >
                                {item.label}
                            </button>
                        ) : (
                            <span className="text-gray-500 font-semibold  uppercase text-xs">{item.label}</span>
                        )}
                        {index < items.length - 1 && (
                            <span className="mx-1 text-gray-400  uppercase text-xs">{">"}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
