/* function customer(firstName, middleName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.getFullName = function ()
    {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
    
} */

var PragimTech = PragimTech || {};
PragimTech.TeamB = PragimTech.TeamB || {};

PragimTech.TeamB.customer = function (firstName, middleName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.getFullName = function ()
    {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
    return this;
    
}