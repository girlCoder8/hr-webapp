import React from 'react';

const Profile = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>Your Profile</h1>
            <p>Here you can manage your personal details and saved jobs.</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" style={{ margin: '0.5rem' }} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" style={{ margin: '0.5rem' }} />
                </label>
                <br />
                <label>
                    Resume:
                    <input type="file" name="resume" style={{ margin: '0.5rem' }} />
                </label>
                <br />
                <button type="submit" style={{ margin: '0.5rem' }}>Save</button>
            </form>
        </div>
    );
};

export default Profile;
