# Ion Hacakthon

## Problem Statement

People below the poverty line are provided with an official document, i.e. ration card by the Government to buy ration at subsidized rates under the National Food Security Act (NFSA) despite that, a lot of these people face many obstacles before they can get their ration. They have to go through a lot of mismanagement and corruption in the system.
- Often, ration shop supervisors use malpractices to gain profits for themselves.
- People have to wait in long queues for their turn to arrive and take their package.
- Because of an unregulated system, people get frustrated and indulge in fights among themselves.
- A lot of ration gets wasted because of these reasons.
- Also, many people create fake ration cards for themselves to avail themselves of this facility by the government.
- The innocent people who actually have a right to these food grains suffer and end up feeling helpless when they go through such kind of treatment.

## Our Solution - Sugam

<p align="center">
    <img src='./Sugam.png' width="300px" />
</p>

To eliminate the queue formed in front of the ration shops and to put an end to all the malpractices, we are proposing a slot booking application that will allow the consumers to reserve a specific time for the collection of ration. People can book a slot according to their convenience, they would just have to enter their ration card details and select a date and time to confirm their booking.

## Features

- Authentication using phone number.
- Register and get the details of ration card automatically fetched.
- Distributors can create slots as per the stock availability.
- Card holders can book the slots according to their convenience.
- Upon confirmation a receipt will be sent to the phone number.
- Distributor will do the manual verification through the receipt and mark done the holder.

## Tech Stack 

**Frontend:**
- React
- JSX
- Material-UI
- Bootstrap
- CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDb

**Authentication:**
- Firebase

## Getting Started

1. Fork the repository.
 
2. Clone the forked repository.
```bash
git clone https://github.com/<your_user_name>/Sugam.git
```

3. Navigate to the cloned repository.
```bash
cd hack4women
```

### Prerequisite

Download Node.js from [here](https://nodejs.org/en/download/).
<br>
Verify installation by checking the version.
```bash
node -v
npm -v
```

### Installation

#### Server

Navigate to the server folder
```bash
cd backend
```
Install the dependencies by running the command in the terminal
```bash
npm install
```

##### Environment Variables

To run this project, you will need to add the following environment variables. Create a ```config.env``` file in the root.

`MONGODB_URL`<br>
`PORT`<br>
`MONGO`<br>
`API_SECRET`<br>
`VONAGE_API_KEY`<br>

#### Client

Navigate to the server folder
```bash
cd frontend
```
Install the dependencies by running the command in the terminal
```bash
npm install
```

##### Environment Variables

To run this project, you will need to add the following environment variables. Create a ```config.env``` file in the root.

`REACT_APP_STATE_API_TOKEN`<br>
`REACT_APP_EMAIL_ID`<br>
`REACT_APP_API_KEY`<br>
`REACT_APP_AUTH_DOMAIN`<br>
`REACT_APP_PROJECT_ID`<br>
`REACT_APP_STORAGE_BUCKET`<br>
`REACT_APP_MESSAGING_SENDER_ID`<br>
`REACT_APP_APP_ID`<br>
`REACT_APP_MEASUREMENT_ID`<br>

## Run Locally

#### Server

Navigate to the server folder
```bash
cd backend
```
Start the server
```bash
npm start
```
After this server will start running at localhost:5000

#### Client

Navigate to the client folder
```bash
cd frontend
```
Start the project
```bash
npm start
```
After this the client start running at localhost:3000 and one can interact with the website.

## Future Scope

In the coming future, we can expect that the concept of a handy ration card will be completely digitalized and there will be no need to carry the cards each time while going to get the ration, just a receipt will be enough to get the ration from the store.

We will provide the facility to create the digital ration cards via the Government officials who will do the verification process.

## Team Members

- [Harsh Jain](https://github.com/harshcoder690)
- [Anshika Agrawal](https://github.com/AnshikaAgrawal5501)

## Support

Do support and give a star :star:
