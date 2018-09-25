import React from 'react'; // eslint-disable-line no-unused-vars
import Root from '../components/root/Root'; // eslint-disable-line no-unused-vars

export default function RootContainer() {
    return (
        <div>
            <header className="header">
                <strong className="header__pricerunner">PriceRunner</strong>
            </header>
            <div className="container">
                <div className="content">
                    <Root />
                </div>
            </div>
        </div>
    );
}
