const React = require('react');

const Default = require('./layouts/default');

const Index = ({ breads }) => {
    return (
        <Default>
            <h2>Index Page.</h2>
            <ul>
                {breads.map((bread, i) => (
                    <a href={`/breads/${i}`}>
                        <li key={i}>{bread.name}</li>
                    </a>
                ))}
            </ul>
        </Default>
    );
};

module.exports = Index;
