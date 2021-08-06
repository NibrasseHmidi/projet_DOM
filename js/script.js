/*1ere section slider */
{
	class SliderClip {
		constructor(el) {
			this.el = el;
			this.Slides = Array.from(this.el.querySelectorAll('li'));
			this.Header = Array.from(this.el.querySelectorAll('header a'));
			this.totalSlides = this.Slides.length;
			this.current = 0;
			this.autoPlay = true; //true or false
			this.timeTrans = 4000; //transition time in milliseconds
			this.IndexElements = [];

			for(let i=0;i<this.totalSlides;i++) {
				this.IndexElements.push(i);
			}

			this.setCurret();
			this.initEvents();
		}
		setCurret() {
			this.Slides[this.current].classList.add('current');
			this.Header[this.current].classList.add('current_dot');
		}
		initEvents() {
			const self = this;

			this.Header.forEach((dot) => {
				dot.addEventListener('click', (ele) => {
					ele.preventDefault();
					this.changeSlide(this.Header.indexOf(dot));
				})
			})

			this.el.addEventListener('mouseenter', () => self.autoPlay = false);
			this.el.addEventListener('mouseleave', () => self.autoPlay = true);

			setInterval(function() {
				if (self.autoPlay) {
					self.current = self.current < self.Slides.length-1 ? self.current + 1 : 0;
					self.changeSlide(self.current);
				}
			}, this.timeTrans);

		}
		changeSlide(index) {

			this.Header.forEach((allDot) => allDot.classList.remove('current_dot'));

			this.Slides.forEach((allSlides) => allSlides.classList.remove('prev', 'current'));

			const getAllPrev = value => value < index;

			const prevElements = this.IndexElements.filter(getAllPrev);

			prevElements.forEach((indexPrevEle) => this.Slides[indexPrevEle].classList.add('prev'));

			this.Slides[index].classList.add('current');
			this.Header[index].classList.add('current_dot');
		}
	}

	const slider = new SliderClip(document.querySelector('.slider'));


}


	


/* 2eme section carousel  */



        var imgList = document.getElementById('imgList');
        var scrollRight = document.getElementById('scroll-right');
        var scrollLeft = document.getElementById('scroll-left');

        // When a user clicks on the right arrow, the ul will scroll 750px to the right
        scrollRight.addEventListener('click', (event) => {
            imgList.scrollBy(750, 0);
        });

        // When a user clicks on the left arrow, the ul will scroll 750px to the left
        scrollLeft.addEventListener('click', (event) => {
            imgList.scrollBy(-750, 0);
        });





/*3eme section form */


    const forme = document.getElementById('forme');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const textarea = document.getElementById('textarea');


    // Add event
    forme.addEventListener('submit', (event) => {
      event.preventDefault();
      validate();
    });

    // validiation  email
    const isEmail = (email) => {
      let atSymbol = email.indexOf('@');
      if (atSymbol < 1) return false;
      let dot = email.lastIndexOf('.');
      if (dot <= atSymbol + 3) return false;
      if (dot === email.length - 1) return false;
      return true
    }

    const setErrorMessage = (input, errorMessage) => {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = errorMessage;
    }

    const setSuccessMessage = (input) => {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control success';
    }

  
    // validation function
    const validate = () => {
      const usernameVal = username.value.trim();
      const emailVal = email.value.trim();
      const phoneNumberVal = phoneNumber.value.trim();
      const textareaVal = textarea.value.trim();
     

      // validation username
      if (usernameVal === '') {
        setErrorMessage(username, 'username cannot be blank');
      } else if (usernameVal.length <= 2) {
        setErrorMessage(username, 'username min 3 char');
      } else {
        setSuccessMessage(username);
      }

      // validation email
      if (emailVal === '') {
        setErrorMessage(email, 'email cannot be blank');
      } else if (!isEmail(emailVal)) {
        setErrorMessage(email, 'not a valid email');
      } else {
        setSuccessMessage(email);
      }

      // validation phone number
      if (phoneNumberVal === '') {
        setErrorMessage(phoneNumber, 'phone number cannot be blank');
      } else if (phoneNumberVal.length !== 8) {
        setErrorMessage(phoneNumber, 'not a valid phone number');
      } else {
        setSuccessMessage(phoneNumber);
      }

      // validation textarea
      if (textareaVal === '') {
        setErrorMessage(textarea, 'textarea cannot be blank');
      } else if (textareaVal.length <= 5) {
        setErrorMessage(textarea, 'textarea min 6 char');
      } else {
        setSuccessMessage(textarea);
      }
    };










/*4eme section filter */

      filterSelection("all") // Execute the function and show all columns
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("item");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementsByClassName("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("Btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
