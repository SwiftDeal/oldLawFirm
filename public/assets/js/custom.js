// Required fields in contact form
function checkData(form)
{
  var name = form.name.value;
  var email = form.email.value;
  var phone = form.phone.value;
  var disclaimer = form.disclaimer.checked;

  if(name === "" || name == "Full Name")
  {
    alert('The name field is required.');
    return false;
  }
  else if (email === "" || email == "Email")
  {
    alert('The email field is required.');
    return false;
  }
  else if (phone === "" || phone == "Phone")
  {
    alert('The phone number field is required.');
    return false;
  }
  else if (disclaimer == 0)
  {
    alert('Please agree to the disclaimer.');
    return false;
  }
  else 
  {
    return true;
  }
}

// Required fields in comment form
function checkComment(form)
{
  var name = form.name.value;
  var email = form.email.value;
  var checker = form.checker.value;

  if(name === "" || name == "Name *")
  {
    alert('The name field is required.');
    return false;
  }
  else if (email === "" || email == "Email *")
  {
    alert('The email field is required.');
    return false;
  }
  else if (checker != "4")
  {
    alert('Please check your math to prevent spam.');
    return false;
  }
  else
  {
    return true;
  }
}

// jQuery functions
$(document).ready(function()
{
  // Google Translate reveal
  $('a.translator-button').click(function()
  {
    if($('#translator').hasClass('open'))
    {
      $('#translator').removeClass('open');  
    }
    else
    {
      $('#translator').addClass('open');
    }
    return false;
  });

  // Video library
  $('.als-container').als(
  {
    visible_items: 3,
    scrolling_items: 3,
    orientation: "horizontal",
    circular: "yes",
    autoscroll: "no"
  });

  // Placeholder text on input
  $('[placeholder]').each(function()
  {
    var input = $(this);

    $(input).focus(function()
    {
      if(input.val() == input.attr('placeholder'))
      {
        input.val('').removeClass("placeholder");
      }
    });

    $(input).blur(function ()
    {
      if(input.val() === "" || input.val() == input.attr('placeholder'))
      {
        input.val(input.attr('placeholder')).addClass("placeholder");
      }
    });
  }).blur();

  // Back to top
  $('a.btn-top').click(function()
  {
    $('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });

  // FAQs
  $('.question').click(function()
  {
    $(this).next('.answer').slideToggle();
    $('a.major-cases').Toggle("active");
    $(this).Toggle("active");
  });

  //////////////
  // Colorbox //
  //////////////
  $('.youtube').colorbox(
  {
    iframe: true,
    innerWidth: 640,
    innerHeight: 390
  });

  $('.iframe').colorbox(
  {
    iframe: true,
    width: "80%",
    height: "80%"
  });

  $(".inline").colorbox(
  {
    inline: true,
    width: "300",
    height: "170"
  });

  ///////////////
  // Slideshow //
  ///////////////
  $('.home .top-background .cb-slideshow li').hide();
  var divs = $('.home .top-background .cb-slideshow li');
  var n = 0;

  function rotate()
  {
    divs.fadeOut(2000).delay(400);
    $(".home .top-background .cb-slideshow li:eq(" + n + ")").fadeIn(750);
    n += 1;
    n %= divs.length;
  }

  // Call your function every x milliseconds
  window.setInterval(function()
  {
    rotate();
  }, 7500);
  rotate();

  //////////////////
  // Sticky menus //
  //////////////////
  $('#mobile-only').slicknav(
  {
    label: 'Menu',
    prependTo: '#mobile-menu'
  });

  $("#social-wrap").waypoint('sticky', 
  {
    topSpacing: 100,
    wrapper: '<div class="sticky-wrapper social" />'
  });
  
  $('#mobile-menu').waypoint('sticky', 
  {
    stuckClass: 'stuck',
    wrapper: '<div class="sticky-wrapper" />'
  });

  $(window).on('scroll', function()
  {
    if($(this).scrollTop() >= 140)
    {
        $('.top-area-sticky').css('display','block');
        $('.top-area-sticky').animate({opacity : 1, top:0 }, 'slow');
    }
    else
    {
      $('.top-area-sticky').css('display','none');
    }
  });

  /////////////////////////////
  // Contact form side entry //
  /////////////////////////////
	$(".text").click(function()
  {
    if($(".contactPop").css("marginRight") === '-300px')
    {
      $(".contactPop").addClass('pop').stop().animate(
      {
       marginRight: "0px"
      }, 500, 'swing');
  	}
    else
    {
      $(".contactPop").removeClass('pop').stop().animate(
      {
		    marginRight: "-300px"
			}, 500, 'swing');
  	}
	}); 

  // Make CTA button open side entry form
  contactEntry();
  $(window).resize(function()
  {
      contactEntry();
  });

  function contactEntry()
  {
    $(".top-background .slogan a").click(function()
    {
      if($(window).width() < 959)
      {
        if($(".contactPop").css("marginRight") === '-300px')
        {
          $(".contactPop").addClass('pop').stop().animate(
          {
           marginRight: "0px"
          }, 500, 'swing');
        }
        else
        {
          $(".contactPop").removeClass('pop').stop().animate(
          {
            marginRight: "-300px"
          }, 500, 'swing');
        }

        return false;
      }s
    });
  }

	$(".close").click(function()
  {
    $(".contactPop").removeClass('pop').stop().animate(
    {
		  marginRight: "-300px"
		}, 500, 'swing');
	});

	$('.form-scroll').mCustomScrollbar({mouseWheelPixels: 150});
	
	
	
	// Footer slidebox
  var slidebox = $('#slidebox');
  //var alreadyslid = $.cookie('slidebox');
  var contactpage = $('body.contact');
  // didn't already pop up and was closed (cookie), and element exists, and not on contact page
  $(window).scroll(function(){
      var distanceTop = $('.btn-top').offset().top - $(window).height();
      if  ($(window).scrollTop() > distanceTop){
          slidebox.animate({'right':'0px'},300);
      }
      else{
          slidebox.stop(true).animate({'right':'-700px'},100);
      }
  });

  // close button
  $('#slidebox .close').on('click',function(){
      $(this).closest('#slidebox').remove();
  });
  
  
  //Phone Pulse
  window.setInterval(function()
	{
		$(".header .top-area .right h2").toggleClass("animated pulse");
		$(".header .top-area-sticky .right h2").toggleClass("animated pulse");
	}, 3000);
	
	
	
});
$(document).ready(function (){
  var domain = $("#domain").val();
  domain = domain+"/public/assets/images/photos/error.jpg";
  $("#error-image").css('background-image','url("'+domain+'")');
})
