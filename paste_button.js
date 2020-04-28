CKEDITOR.on('instanceReady', function(event) {
  event.editor.on('beforeCommandExec', function(event) {
      if (event.data.name == 'paste') {
        navigator.clipboard.readText()
          .then(text => {
              CKEDITOR.instances.issue_notes.insertText(text);
          })
          .catch(err => {
              console.log('Something went wrong', err);
          })
        event.cancel()
      }
  })
});