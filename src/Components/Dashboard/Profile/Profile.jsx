import React from 'react'

const Profile = () => {
  return (
    <>
    <Sidebar />
    <section id="content">
      <main>
      <div className="user-profile">
      <div className="profile-image">
        <img src={user.image} alt="User Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.name}</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
      </main>
    </section>
  </>
  )
}

export default Profile