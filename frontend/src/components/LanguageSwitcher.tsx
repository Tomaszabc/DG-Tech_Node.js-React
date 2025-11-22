import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
        setOpen(false);
    };

    const currentLang = (i18n.language || 'pl').slice(0,2);

    return (
        <div className="relative inline-block text-left" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 py-2 rounded-lg hover:bg-blue-800 transition-all duration-200 focus:outline-none"
                type="button"
            >
                <img src={currentLang === 'en' ? '/images/en.svg' : '/images/pl.svg'} alt={currentLang === 'en' ? 'EN' : 'PL'} className="w-6 h-6" />
                <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            {open && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 absolute right-0 mt-2">
                    <ul className="py-2 text-sm">
                        <li>
                            <button
                                onClick={() => changeLang('pl')}
                                className="w-full text-left flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <img src="/images/pl.svg" alt="Polski" className="w-6 h-6" />
                                <span className="text-gray-700">Polski</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => changeLang('en')}
                                className="w-full text-left flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <img src="/images/en.svg" alt="English" className="w-6 h-6" />
                                <span className="text-gray-700">English</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;