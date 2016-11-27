Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
  });

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.registerHelper('getProfileImg', function (userId) {
  let imgUrl = UserImages.findOne({ userId }).image;
  return imgUrl;
});
