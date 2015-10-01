
var Profile = function EmployerProfile(data) {
    data = data || {
        id: 0,
        returnCustomer: false,
        receiveUpdates: false,
        name: "",
        email: "",
        password: "",
        active: false
    };

    this.id = data.id || null;
    this.returnCustomer = data.returnCustomer || null;
    this.receiveUpdates = data.receiveUpdates || null;
    this.name = data.name || null;
    this.email = data.email || null;
    this.password = data.password || null;
    this.active = data.active || null;
}

module.exports = Profile;

