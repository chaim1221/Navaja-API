
var Profile = function EmployerProfile(data) {
    this.returnCustomer = data.returnCustomer;
    this.receiveUpdates = data.receiveUpdates;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.active = data.active;
    
    return data;
}

module.exports = Profile;

