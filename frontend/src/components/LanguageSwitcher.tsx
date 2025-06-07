import React, { useState, useRef, useEffect } from 'react';

const LanguageSwitcher: React.FC = () => {
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

    return (
        <div className="relative inline-block text-left" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 py-2 rounded-lg hover:bg-blue-800 transition-all duration-200 focus:outline-none"
                type="button"
            >
                <img src="/images/pl.svg" alt="Polski" className="w-6 h-6" />
                <span className="text-sm font-medium">PL</span>
                <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            {open && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 absolute right-0 mt-2">
                    <ul className="py-2 text-sm">
                        <li>
                            <a href="?lang=en" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors duration-200">
                                <img src="/images/en.svg" alt="English" className="w-6 h-6" />
                                <span className="text-gray-700">English</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;