const React = require('react');

const Default = require('./layouts/default');

const Index = ({ breads, bakers }) => {
    return (
        <Default>
            <h2>Index Page.</h2>

            <h3>Bakers</h3>
            <ul>
                {bakers.map((baker) => (
                    <li key={baker._id}>
                        <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                    </li>
                ))}
            </ul>

            <h3>Breads</h3>
            <div className="newButton">
                <a href="/breads/new">
                    <button>Add a new bread</button>
                </a>
            </div>
            <ul>
                {breads.map((bread) => (
                    <a href={`/breads/${bread._id}`}>
                        <li key={bread._id}>{bread.name}</li>
                    </a>
                ))}
            </ul>
        </Default>
    );
};

module.exports = Index;
