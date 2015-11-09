/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var contactSeeds = [
  {first: "Sy", last: "Morikawa", address: "92-1148 Panana St", phone: "808-7419847", email: "sy@hawaii.edu"}

];

/**
 * Initialize the Contact collection if empty with seed data.
 */
if (Contact.find().count() === 0) {
  _.each(contactSeeds,  function(contact) {
    Contact.insert(contact);
  });
}
