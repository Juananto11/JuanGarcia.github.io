onscroll = () => {
	const titulo = document.getElementById('titulo');

	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		titulo.style.fontSize = '2em'
	} else {
		titulo.style.fontSize = '3em'
	}
}
