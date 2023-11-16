function UserProfile({ users }) {
    return (
        <div className="user-profile-list">
            {users.map((user) => (
                <div className="user-profile" key={user.id}>
                    <img className="profile-picture" src={user.profilePicture} alt={`${user.name}'s profile`} />
                    <h2 className="user-name">{user.name}</h2>
                    <p className="user-bio">{user.bio}</p>
                </div>
            ))}
        </div>
    );
};
export default UserProfile;