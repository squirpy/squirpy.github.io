$(document).ready(function() {

  		function initialization(){
	 			$('#myContainer').fullpage({
	                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
	                resize: false,
	                animateAnchor:false,
					scrollOverflow: true,
					scrollbar: true,
					autoScrolling:true,
					responsive: 900,
					scrollingSpeed: 700,
					fitSection: false,
					loopTop: false,
					loopBottom: false,
					paddingTop:5,	
					menu: '#menu',
					navigation:false,
					continuousVertical:false,
					loopHorizontal:false,
					controlArrows:false,
					easing: 'easeInOutCubic',
					keyboardScrolling:true,
	                css3: true,
					onLeave: function(index, nextIndex, direction){
						console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
					},
	       			afterLoad: function(anchorLink, index){
						console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
	       			},
					afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

							var activeItem;

					        
					             activeItem = $('#menu').find('li').last()    
					        

					        activeItem
					            .addClass('active')
					            .siblings().removeClass('active');
    

						console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
					},
	        		onSlideLeave: function(anchorLink, index, slideIndex, direction){
						console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
	        		},
	        		afterRender: function(){



	        			$("#owl-car").owlCarousel({

	        			// TRANSITIONS: fade, backSlide, goDown, scaleUp 

				            navigation : false,
				            slideSpeed : 300,
				            paginationSpeed : 400,
				            singleItem:true,
				    		transitionStyle:"goDown"
				          });

	        			$("#owl-car2").owlCarousel({

				            navigation : false,
				            slideSpeed : 300,
				            paginationSpeed : 400,
				            singleItem:true,
				    		transitionStyle:"goDown"
				          });

	        			$("#owl-car3").owlCarousel({

				            navigation : false,
				            slideSpeed : 300,
				            paginationSpeed : 400,
				            singleItem:true,
				    		transitionStyle:"goDown"
				          });
						console.log("afterRender");
	        		},
	        		afterResize: function(){
						console.log("afterResize");
	        		}
	            });
	 		}

	 		//fullPage.js initialization
            initialization();


			$('#moveSectionUp').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionUp();
			});

			$('#moveSectionDown').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionDown();
			});

			$('#moveTo').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveTo(2, 3);
			});

			$('#silentMoveTo').click(function(e){
				e.preventDefault();
				$.fn.fullpage.silentMoveTo(2);
			});

			$('#silentMoveToSlide').click(function(e){
				e.preventDefault();
				$.fn.fullpage.silentMoveTo(2, 3);
			});

			$('#moveSlideRight').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideRight();
			});

			$('#moveSlideLeft').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideLeft();
			});

			$('#setAutoScrollingFalse').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAutoScrolling(false);
			});

			$('#setAutoScrollingTrue').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAutoScrolling(true);
			});

			$('#setAllowScrollingFalse').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAllowScrolling(false);
			});

			$('#setAllowScrollingTrue').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setAllowScrolling(true);
			});

			$('#setKeyboardScrollingFalse').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setKeyboardScrolling(false);
			});

			$('#setKeyboardScrollingTrue').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setKeyboardScrolling(true);
			});

			$('#setScrollingSpeed1500').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setScrollingSpeed(2500);
			});

			$('#setScrollingSpeed700').click(function(e){
				e.preventDefault();
				$.fn.fullpage.setScrollingSpeed(700);
			});

			$('#destroy').click(function(e){
				e.preventDefault();
				$.fn.fullpage.destroy('all');
			});

			$('#undestroy').click(function(e){
				e.preventDefault();

				//fullPage.js initialization
				initialization();
			});

			$('#reBuild').click(function(e){
				e.preventDefault();
				$.fn.fullpage.reBuild();
			});

			$('#setLockAnchorsTrue').click(function(e){
				e.preventDefault;
				$.fn.fullpage.setLockAnchors(true);
			});

			$('#setLockAnchorsFalse').click(function(e){
				e.preventDefault;
				$.fn.fullpage.setLockAnchors(false);
			});

          

        });