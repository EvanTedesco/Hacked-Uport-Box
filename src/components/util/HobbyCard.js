import React from 'react'
import { sendVerification } from '../../uport/requests/sendVerification'
import { requestDisclosure } from '../../uport/requests/requestDisclosure'

import claimObj from './claimObj'


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
                <input type="text" id="firstName" name="firstName" placeholder="Your name.." onChange={e => this.updateFirstName({ e })} />

                <label>Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Your last name.." onChange={e => this.updateLastName(e)} />

                <label>Age</label>
                <input type="number" id="age" name="age" placeholder="How old are you?" onChange={e => this.updateAge(e)} />


                <label>Weight</label>
                <input type="number" id="weight" name="weight" placeholder="How much do you weigh?" onChange={e => this.updateWeight(e)} />


                <h3>hobby:</h3>
                <input type="text" id="hobby" name="hobby" onChange={e => this.updateHobby(e)} />
                <button onClick={() => sendVerification({ claim: { hobby: this.state.hobby, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, weight: this.state.weight } })}>Single Claim object</button>
                <button onClick={() => this.onSubmit()}>Seperate claims objects</button>

            </div>
            <button onClick={() => requestDisclosure({ verified: [], requested: [], claims: claimObj })}>claimsObj attestations</button>
            <button onClick={() => requestDisclosure({ verified: ['firstName', 'lastName', 'hobby', 'age', 'weight'], requested: [] })}>verified attestations</button>
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

        Object.keys(this.state).forEach(key => {
            const claim = claimFromKey(key);
            const thing = { ...claim, verified: ['firstName', 'lastName'], requested: ['hobby', 'age', 'weight'] }
            sendVerification(thing)
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




