var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dyanawu',
  uploadPreset: 'z7reycra'}, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      document.getElementById("cloudimageid").value = result.info.public_id;
    }
  });

document.getElementById("upload_widget").addEventListener("click", function(e){
  e.preventDefault();
  myWidget.open();
}, false);
