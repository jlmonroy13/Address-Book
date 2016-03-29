$(function() {
  var source = $('#first-template').html();
  var template = Handlebars.compile(source);

  var context = {
    title: "All about Handlebars",
    body: "<p>This is a post about ...</p>"
  }

  var el_html = template(context);

  $('#render_here').html(el_html);
});