$(document).ready(function() {
  // Init sideNav
  $('.button-collapse').sideNav();

  // Init modal
  $('.modal').modal();

  // Close modal
  $('#modal1').modal('close');

  // Init Tooltips
  $('.tooltipped').tooltip();

  // Scroll Fire
  const options = [
    {
      selector: '.row-1',
      offset: 100,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-2',
      offset: 250,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-3',
      offset: 300,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-4',
      offset: 340,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-5',
      offset: 380,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-6',
      offset: 420,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-7',
      offset: 460,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    }
  ];

  Materialize.scrollFire(options);
});
