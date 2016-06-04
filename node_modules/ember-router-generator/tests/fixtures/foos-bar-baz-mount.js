Router.map(function() {
  this.mount('foos', function() {
    this.mount('bar', function() {
      this.mount('baz');
    });
  });
});
