const React = require('react');
const Def = require('./layouts/default');

const Show = ({ bread, index }) => {
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
                <a href={`/breads/${index}/edit`}>
                    <button>Edit</button>
                </a>
                <form action={`/breads/${index}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>
                <li>
                    <a href="/breads/">Go home</a>
                </li>
            </main>
        </Def>
    );
};

module.exports = Show;
