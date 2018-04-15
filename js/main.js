$(document).ready(function () {
  // Display toast instructions onload of index.html for 3.25 seconds, and on click of Portfolio logo. Place this code at top of js so it runs first to avoid a slight delay in execution.
  Materialize.toast('Please Scroll Down', 3250, 'rounded', function () {
    var container = $('#toast-container');
    window.location.href = '#';
  });

  // Init sideNav
  $('.button-collapse').sideNav({
    menuWidth: 200, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });

  // Init modal
  $('.modal').modal();

  // Close modal
  $('#modal1').modal('close');

  // Init Tooltips
  $('.tooltipped').tooltip();

  // Scroll Fire params
  const options = [
    {
      selector: '.row-1',
      offset: 100,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-2',
      offset: 250,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-3',
      offset: 300,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-4',
      offset: 340,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-5',
      offset: 380,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-6',
      offset: 420,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.row-7',
      offset: 460,
      callback: function (el) {
        Materialize.fadeInImage($(el));
      }
    }
  ];

  Materialize.scrollFire(options);
});
