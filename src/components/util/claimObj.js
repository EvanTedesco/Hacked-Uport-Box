export default {
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