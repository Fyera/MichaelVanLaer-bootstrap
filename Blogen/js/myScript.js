console.log('Dit werkt');

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// CKEditor
CKEDITOR.replace('editor1');