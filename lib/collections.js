//Profile Images Collection
ProfileImages = new FS.Collection('ProfileImages', {
  stores: [new FS.Store.GridFS('ProfileImages')]
});

//User Images Collection
UserImages = new Mongo.Collection('UserImages');
