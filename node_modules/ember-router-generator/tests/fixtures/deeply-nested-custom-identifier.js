Router.map(function() {
  this.route('blog', function() {
    this.route('ember', function() {
      this.mount('engines');
    });
  });
});
