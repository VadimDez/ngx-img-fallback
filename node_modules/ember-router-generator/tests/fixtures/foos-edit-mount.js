Router.map(function() {
  this.route('foos', function() {
    this.mount('edit', { path: ':foo_id/edit' });
  });
});
