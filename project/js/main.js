function addMessage(Tournummer){  
  //const postListRef = ref(db, 'posts');
  //const newPostRef = push(postListRef);
  set(ref(db, 'anfragen/' + Tournummer), {
    Tournummer: Tournummer 
  });
  /*.then(() => {
    // Data saved successfully!
    window.location.reload();
  })
  .catch((error) => {
    // The write failed...
  });*/
}

function submitFunction(){

  var Tournummer = $("#Tournummer").val();
  console.log(Tournummer);
  addMessage(Tournummer);
}