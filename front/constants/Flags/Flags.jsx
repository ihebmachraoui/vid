"use client";
import { useState, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import './style.css';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';

const countries = [
    { label: 'English', lang: 'en', flag: 'gb' },
    { label: 'Arabic', lang: 'ar', flag: 'ps' },
    { label: 'French', lang: 'fr', flag: 'fr' },
];

const CountryDropdown = () => {
    const { t } = useTranslation('global');

    // Function to get the initial selected index based on cookie
    const getInitialSelectedIndex = () => {
        const langFromCookie = Cookies.get('lang');
        return countries.findIndex(country => country.lang === langFromCookie) !== -1
            ? countries.findIndex(country => country.lang === langFromCookie)
            : 0; // Default to the first country if not found
    };

    // State hooks
    const [menuToggle, setMenuToggle] = useState(false);
    const [selected, setSelected] = useState(getInitialSelectedIndex());
    const [isHovering, setIsHovering] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        Cookies.set('lang', lang, { expires: 7 }); // Expires in 7 days

        if (typeof window !== 'undefined') {
            window.location.reload(); // Reload the page
        }
    };

    const handleToggleMenu = () => setMenuToggle(prev => !prev);

    const handleSelect = (index) => {
        const selectedCountry = countries[index];
        changeLanguage(selectedCountry.lang);
        setSelected(index);
        setMenuToggle(false); // Close the menu after selection
    };

    return (
        <div 
            className="relative"
            onMouseEnter={() => {
                setMenuToggle(true);
                setIsHovering(true);
            }}
            onMouseLeave={() => {
                if (!isHovering) setMenuToggle(false);
            }}
        >
            <button
                className="bg-transparent text-gray-500 rounded pr-3 pl-5 focus:outline-none"
                onClick={handleToggleMenu} // Toggle on click
            >
                <span className={`fi fi-${countries[selected].flag}`}></span> <i className="mdi mdi-chevron-down"></i>
            </button>
            {menuToggle && (
                <div className="dropdown-wrapper"
                    onMouseEnter={() => setIsHovering(true)} // Keep menu open on hover
                    onMouseLeave={() => setIsHovering(false)} // Set flag when leaving menu
                >
                    <div className="dropdown-menu">
                        <ul className="list-reset">
                            {countries.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="px-4 py-2 flex hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSelect(index);
                                        }}
                                    >
                                        <span className={`inline-block mr-2 fi fi-${item.flag}`}></span>
                                        <span className="inline-block">{item.label}</span>
                                        {index === selected && (
                                            <span className="ml-auto"><i className="mdi mdi-check"></i></span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryDropdown;
