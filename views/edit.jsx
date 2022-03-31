const React = require('react');
const Default = require('./layouts/default');

const Edit = ({ bread, index }) => {
    return (
        <Default>
            <h2>Edit a bread</h2>
            <form action={`/breads/${index}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={bread.name}
                />

                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={bread.image}
                />

                <label htmlFor="gluten">Has Gluten?</label>
                <input
                    type="checkbox"
                    name="gluten"
                    id="gluten"
                    defaultChecked={bread.hasGluten}
                />

                <br />

                <input type="submit" />
            </form>
        </Default>
    );
};

module.exports = Edit;
