/** schemas.js **/

schemas = {
    employer: [
        address: { 
            id: null,
            profileId: null,
            businessId: null,
            address1: null,
            address2: null,
            city: null,
            state: null,
            phonePrimary: null,
            phoneSecondary: null,
            active: null
        },
        business: { 
            id: null,
            profileId: null,
            name: null,
            federalTaxId: null,
            active: null
        },
        profile: { 
            id: null,
            returnCustomer: null,
            receiveUpdates: null,
            name: null,
            email: null,
            password: null,
            active: null
        },
        review: {
            id: null,
            profileId: null,
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
            profileId: null,
            businessId: null,
            address1: null,
            address2: null,
            city: null,
            state: null,
            active: null
        },
        business: {
            id: null,
            profileId: null,
            name: null,
            federalTaxId: null,
            active: null
        },
        profile: {
            id: null,
            returnCustomer: null,
            receiveUpdates: null,
            name: null,
            email: null,
            password: null,
            phonePrimary: null,
            phoneSecondary: null,
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
            profileId: null,
            employerProfileId: null,
            workerSkillId: null,
            mastery: null,
            title: null,
            message: null,
            active: null
        }
    ],
    work: [
        assignment: {
            id: null,
            offerId: null,
            acceptedWage: null,
            active: null
        },
        offer: {
            id: null,
            orderId: null,
            workerProfileId: null,
            meetsSponsorshipRequirements: null,
            location: null,
            transportationMethodId: null,
            timePromised: null,
            counterOffer: null,
            active: null
        },
        order: {
            id: null,
            employerProfileId: null,
            englishMasteryRequired: null,
            workerSkillId: null,
            masteryRequired: null,
            timeNeeded: null,
            proposedWage: null,
            active: null
        }
    ]
}

module.exports = schemas;
