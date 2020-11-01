const counters = document.querySelectorAll('.counter');
		const speed = 200;

		counters.forEach(counter => {
			const updCount = () =>{
				const target = counter.getAttribute('data-target');
				const count = +counter.innerText;

				const score = target / speed;

				if(count < target) {
					counter.innerText = count + score;
					setTimeout(updCount, 1);
				} else {
					counter.innerText = target;
				}
			};
			updCount();
		});

//  $('.brand-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   autoplay:true,
//   responsive:{
//     0:{
//       items:1
//     },
//     600:{
//       items:3
//     },
//     1000:{
//       items:5
//     }
//   }
// }) 

