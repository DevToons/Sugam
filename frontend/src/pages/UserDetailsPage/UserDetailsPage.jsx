import React from "react";
import './UserDetailsPage.css';

const UserDetailsPage = () => {

    const data = {
        name: 'Anshika Agrawal',
        rationNo: '12buhy89032994',
        city: 'Rishikesh',
        state: 'Uttarakhand',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        distributorName: 'Abcdefgh Ijklmn',
        distributorNo: '319y121bhy1234refru'
    };

    return (
        <>
            <h1>Ration Card Details</h1>

            <div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={data.image} alt={data.name} />
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </>
    );
}

export default UserDetailsPage;
