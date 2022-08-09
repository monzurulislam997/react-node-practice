import React from 'react';

const Practice = () => {

    const formSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }

        fetch('http://localhost:3300/user', {
            method: "POST",
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify(user)

        }).then(res => res.json())
            .then(data => {

            })


    }





    return (
        <div>
            <form onSubmit={formSubmit} >
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Practice;