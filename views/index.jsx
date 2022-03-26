const React = require('react');

const Default = require('./layouts/default');

const Index = ({ breads }) => {
    return (
        <Default>
            <h2>Index Page.</h2>
            <div className="newButton">
                <a href="/breads/new">
                    <button>Add a new bread</button>
                </a>
            </div>
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
