const React = require('react');
const Def = require('./layouts/default');

const Show = ({ bread }) => {
    return (
        <Def>
            <main>
                <h2>Show page.</h2>
                <h3>{bread.name}</h3>
                <p>
                    {bread.hasGluten ? (
                        <span>does</span>
                    ) : (
                        <span>does NOT</span>
                    )}{' '}
                    have gluten.
                </p>
                <img src={bread.image} alt={bread.name} />
                <li>
                    <a href="/breads/">Go home</a>
                </li>
            </main>
        </Def>
    );
};

module.exports = Show;
