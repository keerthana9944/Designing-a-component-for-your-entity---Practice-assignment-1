import React from "react";

const userCard = () => {
    const profilePhoto = "https://randomuser.me/api/portraits/men/1.jpg";
    const name = "John Doe";
    const email = "johndoe@gmail.com";
    const phone = "+(91) 1023456789";
    const address = "H-No.123, Colony, City, State, Country";

    return (
        <div className="bg-white shadow-md rounded-md p-5 w-64 text-center border border-gray-300 ">
            <img src = {profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-3 border border-gray-300"/>

            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>

        </div>
    );
};

export default userCard;