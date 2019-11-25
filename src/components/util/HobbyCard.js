import React from 'react'
import { sendVerification } from '../../uport/requests/sendVerification'
import { requestDisclosure } from '../../uport/requests/requestDisclosure'

const claimObj = {
    iss: 'did:ethr:0x8b6da97bb8682bb926154188a3867987b74f6daf',
    type: 'shareReq',
    claims: {
        verifiable: {
            firstName: {
                essential: true,
                iss: [
                    {
                        did: 'did:web:uport.claims',
                        url: 'https://uport.claims/firstName'
                    },
                    {
                        did: 'did:ethr:0x8b6da97bb8682bb926154188a3867987b74f6daf',

                    }
                ],
                reason: 'We need to know your first name'
            },
            lastName: {
                essential: true,
                iss: [
                    {
                        did: 'did:web:uport.claims',
                        url: 'https://uport.claims/lastName'
                    },
                    {
                        did: 'did:ethr:0x8b6da97bb8682bb926154188a3867987b74f6daf',
                        url: 'localhost:3000/dashboard'
                    }
                ],
                reason: 'We need to know your last name'
            },
            age: {
                essential: true,
                iss: [
                    {
                        did: 'did:web:uport.claims',
                        url: 'https://uport.claims/age'
                    },
                    {
                        did: 'did:ethr:0x8b6da97bb8682bb926154188a3867987b74f6daf',
                        url: 'localhost:3000/dashboard'
                    }
                ],
                reason: 'We want to know your age'
            },
            weight: {
                essential: true,
                iss: [
                    {
                        did: 'did:web:uport.claims',
                        url: 'https://uport.claims/weight'
                    },
                    {
                        did: 'did:ethr:0x8b6da97bb8682bb926154188a3867987b74f6daf',
                        url: 'localhost:3000/dashboard'
                    }
                ],
                reason: 'We want to know your weight'
            },
            hobby: {
                essential: true,
                iss: [
                    {
                        did: 'did:web:uport.claims',
                        url: 'https://uport.claims/hobby'
                    },
                    {
                        did: 'did:ethr:0x8b6da97bb8682bb926154188a3867987b74f6daf',
                        url: 'localhost:3000/dashboard'
                    }
                ],
                reason: 'We want to know your hobby'
            },


        }
    }
}


class HobbyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hobby: '',
            firstName: '',
            lastName: '',
            age: '',
            weight: '',
        }
    }

    render() {
        return (<div>
            <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={e => this.updateFirstName(e)} />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={e => this.updateLastName(e)} />

                <label>Age</label>
                <input type="number" id="age" name="age" placeholder="How old are you?" onChange={e => this.updateAge(e)} />


                <label>Weight</label>
                <input type="number" id="weight" name="weight" placeholder="How much do you weigh?" onChange={e => this.updateWeight(e)} />


                <h3>hobby:</h3>
                <input type="text" name="hobby" onChange={e => this.updateHobby(e)} />
                <button onClick={() => sendVerification({ claim: { hobby: this.state.hobby, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, weight: this.state.weight } })}>Orig Submit</button>
                <button onClick={() => this.onSubmit()}>New Submit</button>

            </div>
            <button onClick={() => requestDisclosure({ verified: [], requested: [], claims: claimObj })}>claimsObj attestations</button>
            <button onClick={() => requestDisclosure({ verified: ['firstName', 'lastName', 'hobby', 'age', 'weight'], requested: [] })}>verified attestations</button>
            <button onClick={() => requestDisclosure({ verified: ['firstName'], requested: [] })}>verified attestation</button>
            <button onClick={() => requestDisclosure({ verified: [], requested: ['hobby', 'age', 'weight', 'firstName', 'lastName'] })}>requested attestations3</button>
        </div>
        )
    }

    onSubmit = () => {
        const claimFromKey = (key) => {
            const c = { claim: {} }
            const k = key + ":"
            const value = this.state[key]
            c.claim[k] = value;
            return c
        }

        Object.keys(this.state).map(key => {
            const claim = claimFromKey(key);
            console.log("claim", JSON.stringify(claim))
            const thing = { ...claim, verified: ['firstName', 'lastName'], requested: ['hobby', 'age', 'weight'] }
            sendVerification(thing)
            return
        })

    }



    updateHobby(event) {
        this.setState({
            hobby: event.target.value
        })
    }

    updateFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    updateAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    updateWeight(event) {
        this.setState({
            weight: event.target.value
        })
    }
}

export default HobbyCard




