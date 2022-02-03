document.querySelector('button')
		.addEventListener('click',() =>{
			fetch('http://localhost:8000/evenements.php')
				.then((response) =>{
				console.log(response)

			})
			.catch()
		})


