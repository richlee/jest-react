const greeter = {
   getFullName: function (firstname, lastname) {
    return firstname + ' ' + lastname
   },
   
   greet: function (firstname, lastname) {
      return "Hello! " + this.getFullName(firstname,lastname)
   }
   }
 module.exports = greeter