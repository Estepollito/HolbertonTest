document.addEventListener("DOMContentLoaded", function(event) {

var thumbnailElement = document.getElementById("smart_thumbnail");

thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "small container text-center") {
		thumbnailElement.className = "container text-center"
	}
	else {
		thumbnailElement.className = "small container text-center"
	}
});

thumbnailElement.addEventListener("mouseover", function() {
	thumbnailElement.style.cursor = "pointer";
});


});


//////////// For the little images ////////////

document.addEventListener("DOMContentLoaded", function(event) {

	var carouselElement = document.getElementById("smart_carousel");

	carouselElement.addEventListener("mouseover", function(a) {
		a = a || window.event;
		var target = a.target || a.srcElement;
		var srcSelected = target.src;
		if (srcSelected !== undefined) {
			target.style.cursor = "pointer";
		}
	});

	carouselElement.addEventListener('click', function(e) {
	    e = e || window.event;
	    var target = e.target || e.srcElement;
	    var srcSelected = target.src;
	    var idSelected = target.id;
	    if (srcSelected !== undefined && (target.style.opacity == 1 || target.style.opacity === "")) {
	    	addImage(srcSelected, idSelected, target);
	    }
	    else {
			target.style.opacity = 1;
	    }
	}, false);


	function addImage(url, id, target) {

		for (var i = 1; i <= 9; i++) {
			var x = document.getElementById('image' + i);
				if (x != null) {
					// console.log("if");
					document.getElementById('image' + i).setAttribute("src", url);
					document.getElementById('image' + i).setAttribute("id", id);
					target.style.opacity = 0.2;
					return
				}
				else if (i == 9){
					// console.log("else if");
					alert("It's full!, You need to remove one of the ones that you already selected!");
					target.style.opacity = 1;
				}
				else {
					// console.log("else");
				}
		}
	}

//////////// For the collage ////////////

	var collageElement = document.getElementById("smartCollage");

	var dragged;
	var srcDragged;
	var idDragged;

	  document.addEventListener("dragstart", function(event) {
	      // store a ref. on the dragged elem
	      dragged = event.target;
	      idDragged = event.target.id;
	      srcDragged = event.target.src;
	      console.log(idDragged)
	      // console.log(srcDragged)
	      // make it half transparent
	      event.target.style.opacity = .5;
	  }, false);

	  document.addEventListener("dragend", function(event) {
	      // reset the transparency
	      event.target.style.opacity = "";
	  }, false);

	  /* events fired on the drop targets */
	  document.addEventListener("dragover", function(event) {
	      // prevent default to allow drop
	      event.preventDefault();
	  }, false);

	  document.addEventListener("dragenter", function(event) {
	      // highlight potential drop target when the draggable element enters it
	      if ( event.target.className == "column opacity1" ) {
	          event.target.style.outline = "1px dashed #000";
	      }

	  }, false);

	  document.addEventListener("dragleave", function(event) {
	      // reset background of potential drop target when the draggable element leaves it
	      if ( event.target.className == "column opacity1" ) {
	          event.target.style.outline = "";
	      }

	  }, false);

	  document.addEventListener("drop", function(event) {
	      // prevent default action (open as link for some elements)
	      event.preventDefault();
	      var newId = dragged.alt;
	      var srcDropped = event.target.src;
	      // move dragged elem to the selected drop target
	      if (event.target.className == "column opacity1" && dragged.className == "column opacity1" && srcDropped != "http://static1.squarespace.com/static/57bf96ed725e25faad61bbe1/t/57cd54d8ff7c508975dab5b3/1473074393091/favicon.png?format=1500w") {
	          console.log("if")
	          event.target.style.outline = "";	          
	          dragged.setAttribute("src", srcDropped);
	          event.target.setAttribute("src", srcDragged);
	      }
	      else if (dragged.className == "column opacity1" && srcDropped == "http://static1.squarespace.com/static/57bf96ed725e25faad61bbe1/t/57cd54d8ff7c508975dab5b3/1473074393091/favicon.png?format=1500w") {
	          console.log("else if")
	          event.target.style.outline = "";
	          dragged.setAttribute("src", "http://static1.squarespace.com/static/57bf96ed725e25faad61bbe1/t/57cd54d8ff7c508975dab5b3/1473074393091/favicon.png?format=1500w");
	          dragged.setAttribute("id", newId)
	          event.target.setAttribute("src", srcDragged);
	          event.target.setAttribute("id", idDragged);
	      }
	      else if (event.target.className !== "column opacity1") {
	          console.log("else if2")
	          event.target.style.outline = "";
	          dragged.setAttribute("src", "http://static1.squarespace.com/static/57bf96ed725e25faad61bbe1/t/57cd54d8ff7c508975dab5b3/1473074393091/favicon.png?format=1500w");
	          dragged.setAttribute("id", newId)
	          event.target.setAttribute("src", srcDragged);
	          document.getElementById(idDragged).style.opacity = "1";
	          event.target.setAttribute("id", idDragged);
	          
	      }
	      else {
	      	  console.log("else")
	      	  event.target.style.outline = "";
	      }
	    
	  }, false);
	
});


//////////// For the buttons ////////////

document.addEventListener("DOMContentLoaded", function(event) {

	var happy = document.getElementById("happy");
	var reset = document.getElementById("reset");
	var image = document.getElementById("smartCollage");
	
	happy.addEventListener("click", function() {
		html2canvas(image, { logging: true, letterRendering: 1, allowTaint: true, useCORS: true }).then(function(canvas) {
			image.appendChild(canvas);
			console.log(image);
			reset.addEventListener("click", function() {			
				image.removeChild(canvas);
				console.log(image);
			})	
		})
	})

	// reset.addEventListener("click", function() {
	// 	html2canvas(image, { logging: true, letterRendering: 1, allowTaint: true, useCORS: true }).then(function(canvas) {
	// 		image.removeChild(canvas);
	// 		});
	// })
	// Clean up
			// document.body.removeChild(canvas);

});

