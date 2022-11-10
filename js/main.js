window.addEventListener('load', () => {
	var elem = document.querySelector('section');
	const iso = new Isotope(elem, {
		// options
		itemSelector: 'article',
	});

	const filterBtn = document.querySelectorAll('.btns>li');
	for (let el of filterBtn) {
		//filterBtn의 아이템 갯수 만큼 반복
		el.addEventListener('click', (e) => {
			e.preventDefault();

			//클릭을 할때마다 각 아이템(버튼)에 반복, on 클래스 없애줌
			for (let el of filterBtn) {
				el.classList.remove('on');
			}

			//클릭한 버튼에 클래스 추가
			e.currentTarget.classList.add('on');

			// 클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져온다.
			const filtering = e.currentTarget.querySelector('a').getAttribute('href');
			console.log(filtering);

			iso.arrange({ filter: filtering }); //버튼을 누르면 필터링 작동(플러그인)
		});
	}

	// 각 article을 클릭하면 팝업창이 뜨게
	const items = document.querySelectorAll('article'); //각 article들을 변수에(배열)
	const pop = document.querySelector('#popup');

	for (const aa of items) {
		aa.addEventListener('click', (e) => {
			// 화면 너비
			const winWidth = document.body.clientWidth;
			console.log(winWidth)

			if(winWidth > 767){
				//클릭한 article 이미지의 src의 값,  h2, p를 변수에 저장
				const img = e.currentTarget.querySelector('img').getAttribute('src');
				const title = e.currentTarget.querySelector('h2').innerText;
				const desc = e.currentTarget.querySelector('p').innerText;

				// pop에 위의 변수를 적용
				pop.querySelector('img').setAttribute('src', img);
				pop.querySelector('h2').innerText = title;
				pop.querySelector('p').innerText = desc;

				pop.classList.add('on');
			}
		});
	}

	// popup창을 클릭하면 pop이 사라짐
	pop.addEventListener('click',()=>{
		pop.classList.remove('on');
	})

});
