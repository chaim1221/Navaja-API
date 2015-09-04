/** schemas.js **/

schemas = {
    employer: [
        address: { 
            id: null,
            profileid: null,
            businessid: null,
            address1: null,
            address2: null,
            city: null,
            state: null,
            phoneprimary: null,
            phonesecondary: null,
            active: null
        },
        business: { 
            id: null,
            profileid: null,
            name: null,
            federaltaxid: null,
            active: null
        },
        profile: { 
            id: null,
            returncustomer: null,
            receiveupdates: null,
            name: null,
            email: null,
            password: null,
            active: null
        },
        review: {
            id: null,
            profileid: null,
            rating: null,
            culture: null,
            title: null,
            message: null,
            active: null
        }
    ],
    worker: [
        address: {
            id: null,
            profileid: null,
            businessid: null,
            address1: null,
            address2: null,
            city: null,
            state: null,
            active: null
        },
        business: {
            id: null,
            profileid: null,
            name: null,
            federaltaxid: null,
            active: null
        },
        profile: {
            id: null,
            returncustomer: null,
            receiveupdates: null,
            name: null,
            email: null,
            password: null,
            phoneprimary: null,
            phonesecondary: null,
            active: null
        },
        // SKILLS ARE ADDED THROUGH AN INTERNAL TOOL
        skill: {
            id: null,
            name: null,
            active: null
        },
        // SPONSORSHIPS BY EMPLOYERS (SPONSOR JOSE FOR ENGLISH, ETC.)
        sponsorship: {
            id: null,
            profileid: null,
            employerprofileid: null,
            workerskillid: null,
            mastery: null,
            title: null,
            message: null,
            active: null
        }
    ],
    work: [
        // AN ASSIGNMENT IS AN ACCEPTED OFFER
        assignment: {
            id: null,
            orderid: null,
            workerprofileid: null,
            distancefromworker: null,
            transportationmethodid: null,
            acceptedwage: null,
            active: null
        },
        // THE WORKER MAKES AN OFFER
        offer: {
            id: null,
            orderid: null,
            workerprofileid: null,
            meetssponsorshiprequirements: null,
            timepromised: null,
            counteroffer: null,
            active: null
        },
        // THE EMPLOYER MAKES AN ORDER
        order: {
            id: null,
            englishlevelrequired: null, // todo: englishmasteryrequired
            workerskillid: null,
            masteryrequired: null,
            timeneeded: null,
            proposedwage: null,
            active: null
        }
    ]
}
