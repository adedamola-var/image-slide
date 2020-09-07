function imageGallery(){
	var highlight = document.querySelector(".gallery-highlight");
	var previews = document.querySelectorAll(".room-preview img");

	previews.forEach(preview=>{
		preview.addEventListener("click",function(){

         var smallSrc = this.src;
         var bigSrc = smallSrc.replace('small','big');
         highlight.src = bigSrc;
         console.log(bigSrc);

      });
	});
}

imageGallery();