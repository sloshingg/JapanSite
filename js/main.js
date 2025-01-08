!(function () {
	var header = document.querySelector(".header");

	window.onscroll = function () {
		if (window.pageYOffset > 50) {
			header.classList.add("header_active");
		} else {
			header.classList.remove("header_active");
		}
	};
})();

(function () {
	var burger = document.querySelector(".burger"),
		nav = document.querySelector(".header__nav"),
		navClose = document.querySelector(".header__nav-close"),
		links = document.querySelectorAll(".header__link");

	burger.addEventListener("click", function () {
		nav.classList.add("header__nav_active");
	});

	navClose.addEventListener("click", function () {
		nav.classList.remove("header__nav_active");
	});

	if (window.innerWidth <= 767) {
		for (var i = 0; i < links.length; i++) {
			links[i].addEventListener("click", function () {
				nav.classList.remove("header__nav_active");
			});
		}
	}
})();

document.querySelectorAll(".js-scroll").forEach(function (scrollLink) {
	scrollLink.addEventListener("click", function () {
		var href = this.getAttribute("href"),
			duration = 1000,
			headerHeight = document.querySelector(".header").clientHeight,
			scrollTarget =
				document.querySelector(href).getBoundingClientRect().top - headerHeight,
			startPosition = window.pageYOffset,
			startTime = null;

		requestAnimationFrame(function step(currentTime) {
			if (startTime === null) {
				startTime = currentTime;
			}
			var elapsed = currentTime - startTime;

			var easeInOut = function (time, start, change) {
				time /= duration / 2;
				if (time < 1) {
					return (change / 2) * time * time + start;
				}
				time--;
				return (-change / 2) * (time * (time - 2) - 1) + start;
			};

			var position = easeInOut(elapsed, startPosition, scrollTarget);

			window.scrollTo(0, position);

			if (elapsed < duration) {
				requestAnimationFrame(step);
			}
		});
	});
});
