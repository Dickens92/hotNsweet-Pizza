AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();


	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();

	ar price , crust_price, topping_price ;
	let total = 0;
	function Deliverpizza( name,size,crust,topping, total ){
	  this.name = name;
	  this.size = size;
	  this.crust = crust;
	  this.topping = topping;
	  this.total = total;
	}
	
	
	// proceed button
	$(document).ready(function(){
	  
	  $("button.proceed").click(function(event){
	   let pname = $(".name option:selected").val();
	   let psize = $("#size option:selected").val();
	   let pcrust = $("#crust option:selected").val();
	   let pizzatopping = [];
	   $.each($("input[name='toppings']:checked"), function(){            
		   topping.push($(this).val());
	   });
	   console.log(topping.join(", "));
	
	   switch(psize){
		case "0":
		  price =0;
		break;
		case "large":
		   price = 1800;
		   console.log(price);
		 break;
		 case "medium":
		   price = 1200;
		   console.log("The price is "+price);
		 break;
		 case "small":
		   price = 720;
		   console.log(price);
		 default:
		   console.log("error"); 
	   }
	   switch(pcrust){
		  case "0":
			crust_price = 0;
		  break;
		  case "Flat Bread":
			crust_price = 200;
		  break;
		  case "Cheese Crust":
			crust_price = 250;
		  break;
		  case "Staffed Crust":
			crust_price = 180;
		  break;
		  default:
			console.log("No price"); 
		}
		let topping_value = topping.length*100;
		console.log("toppins value" + topping_value);
	
		if((psize == "0") && (pcrust == "0")){
		  console.log("nothing selected");
		  $("button.proceed").show();
		  $("#information").show();
		  $("div.choise").hide();
		  alert("Kindly chose your preffered size and crust or contact us for Guidance"); 
		}
		else{
		  $("button.proceed").hide();
		  $("#information").hide();
		  $("div.choise").slideDown(1000);
		}
	
		total = price + crust_price + topping_value;
		console.log(total);
		let checkoutTotal =0;
		checkoutTotal = checkoutTotal + total;
	
		$("#pizzaname").html($(".name option:selected").val());
		$("#pizzasize").html( $("#size option:selected").val());
		$("#pizzacrust").html($("#crust option:selected").val());
		$("#pizzatoppings").html(toppings.join(", "));
		$("#totals").html(total);
		
	
		$("button.addPizza").click(function(){
		  let pname = $(".name option:selected").val();
		  let psize = $("#size option:selected").val();
		  let pcrust = $("#crust option:selected").val();
		  let topping = [];
		  $.each($("input[name='toppings']:checked"), function(){            
			  topping.push($(this).val());
		  });
		  console.log(toppings.join(", "));
		  switch(psize){
			case "0":
			  price =0;
			break;
			case "large":
			   price = 1800;
			   console.log(price);
			 break;
			 case "medium":
			   price = 1200;
			   console.log("The price is "+price);
			 break;
			 case "small":
			   price = 720;
			   console.log(price);
			 default:
			   console.log("error"); 
		   }
		   switch(pcrust){
			  case "0":
				crust_price = 0;
			  break;
			  case "Flat Bread":
				crust_price = 90;
			  break;
			  case "Cheese Crust":
				crust_price = 120;
			  break;
			  case "Staffed Crust":
				crust_price = 150;
			  break;
			  default:
				console.log("No price"); 
			}
			let topping_value = toppings.length*100;
			console.log("toppins value" + topping_value);
			total = price + crust_price + topping_value;
			console.log(total);
	
			checkoutTotal = checkoutTotal + total;
			console.log(checkoutTotal);
		  // constractor function
		  var newOrder = new Deliverpizza(pname, psize, pcrust,pizzatoppings,total);
	
		  $("#customerorders").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
		  console.log(newOrder);
		  
		  
	
		});
		// Checkout button
		$("button#Checkout").click(function(){ 
		  $("button#Checkout").hide();
		  $("button.addPizza").hide();
		  $("button.send").slideDown(1000);
		  $("#addedprice").slideDown(1000);
		  console.log("Please pay a total of Ksh. "+CheckoutTotal);
		  $("#pizzatotal").append("Your bill is sh. "+CheckoutTotal);
		});
	
		// home delivery button
		$("button.Send").click(function(){
		  $(".packedpizza").hide();
		  $(".select h2").hide();
		  $(".Send").slideDown(1000);
		  $("#addedprice").hide();
		  $("button.Send").hide();
		  $("#pizzatotal").hide();
		  let sendingcost = checkoutTotal+150;
		  console.log("The fullamount comes to Ksh. "+sendingcost+" on delivery");
		  $("#totalbill").append("The bill plus delivery fee is: "+ sendingcost);
		});
	
		// when one clicks place order button
		$("button#final-order").click(function(event){
		  event.preventDefault();
	
		  $("#pizzatotal").hide();
		  $(".delivery").hide();
		  $("button#last-order").hide();
		  let sendingcost= checkoutTotal+150;
		  console.log("Final Bill is: "+sendingcost);
		  let person = $("input#name").val();
		  let phone = $("input#phone").val();
		  let location = $("input#Pickup-location").val();
	
		  if ($("input#name").val() && $("input#phone").val() && $("input#Pickup-location").val()!=""){
	  
			$("#notification").append(person+", Your Order Details have been Received and after processing, it will be sent to "+location+ ". Carry Ksh. "+sendingcost);
			$("#totalbill").hide();
			$("#notification").slideDown(1200);
		  }
		  else {
			alert("Kindly provide details to aid in delivery of your order!");
			$(".send").show();
			$("button#last-order").show();
		  }
		});
	   event.preventDefault();
	  });
	});





})(jQuery);

