onscroll = () => {
	const titulo = document.getElementById('titulo');

	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		titulo.style.fontSize = '2em'
	} else {
		titulo.style.fontSize = '3em'
	}
}
