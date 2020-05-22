//create a customer constructor function 
/* function customer(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function ()
    {
        return this.firstName + " " + this.lastName;
    }

} */

/******************************************** */
//// Use PragimTech namespaces if it already exists, otherwise create it.
var PragimTech = PragimTech || {};
PragimTech.TeamA = PragimTech.TeamA || {};

PragimTech.TeamA.customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
    return this;
}