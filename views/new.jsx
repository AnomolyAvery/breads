const React = require('react');
const Default = require('./layouts/default');

const New = (props) => {
    return (
        <Default>
            <h2>Add a new bread.</h2>
            <div className="backButton">
                <a href="/breads">
                    <button>Go back to the index</button>
                </a>
            </div>
            <form action="/breads" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" />

                <label htmlFor="gluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="gluten"
                    id="gluten"
                    defaultChecked
                />

                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker">
                    {props.bakers.map((baker) => (
                        <option value={baker.id} key={baker.id}>
                            {baker.name}
                        </option>
                    ))}
                </select>

                <br />

                <input type="submit" />
            </form>
        </Default>
    );
};

module.exports = New;
