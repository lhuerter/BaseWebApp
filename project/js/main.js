function addMessage(Tournummer){
  const db = getDatabase();
  const postListRef = ref(db, 'posts');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    Tournummer: Tournummer 
  })
  .then(() => {
    // Data saved successfully!
    window.location.reload();
  })
  .catch((error) => {
    // The write failed...
  });
}

function submitFunction(){

  var Tournummer = $("#Tournummer").val();
  addMessage(Tournummer);
}