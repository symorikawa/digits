/**
 * After successful addition of a new Contact document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddContactForm: {
    /**
     * After successful form submission, go to the ListContacts page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListContact');
    }
  }
});