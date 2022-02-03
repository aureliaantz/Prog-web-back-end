document.querySelector('#contact_form form button')
		.addEventListener('click',function(event){
			event.preventDefault()

			let hasError = false
			const regexInput = /^[\S]{1,50}$/
			const inputVerif = function(){
				if(this.value.match(regexInput) == null){
					this.classList.add('error')
					this.previousElementSibling.classList.add('error')
					hasError = true
				}
				else{
					this.classList.remove('error')
					this.previousElementSibling.classList.remove('error')
					hasError = false
				}
			}

			let firstNameInput = document.getElementById('firstName')
			if(firstNameInput.value.match(regexInput) == null){
				firstNameInput.classList.add('error')
				firstNameInput.previousElementSibling.classList.add('error')
				hasError = true
			}
			firstNameInput.addEventListener('input',inputVerif)

			let lastNameInput = document.getElementById('lastName')
			if(lastNameInput.value.match(regexInput) == null){
				lastNameInput.classList.add('error')
				lastNameInput.previousElementSibling.classList.add('error')
				hasError = true
			}
			lastNameInput.addEventListener('input',inputVerif)

			let mailInput = document.getElementById('mail')
			if(mailInput.value.match(/^[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}$/) == null){
				mailInput.classList.add('error')
				mailInput.previousElementSibling.classList.add('error')
				hasError = true
			}
			mailInput.addEventListener('input',function(){
				if(mailInput.value.match(/^[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}$/) == null){
					mailInput.classList.add('error')
					mailInput.previousElementSibling.classList.add('error')
					hasError = true
				}
				else{
					mailInput.classList.remove('error')
					mailInput.previousElementSibling.classList.remove('error')
					hasError = false
				}
			})

			let urlInput = document.getElementById('url')
			if(urlInput.value !== '' && 
			urlInput.value.match(/^(?:http|https|ftp):\/\/[\S]{,92}$/) == null){
				urlInput.classList.add('error')
				urlInput.previousElementSibling.classList.add('error')
				hasError = true
			}
			urlInput.addEventListener('input',function(){
				if(urlInput.value == '' && 
				urlInput.value.match(/^(?:http|https|ftp):\/\/[\S]{1,92}$/) == null){
					urlInput.classList.add('error')
					urlInput.previousElementSibling.classList.add('error')
					hasError = true
				}
				else{
					urlInput.classList.remove('error')
					urlInput.previousElementSibling.classList.remove('error')
					hasError = false
				}
			})

			let messageTextarea = document.getElementById('message')
			if(messageTextarea.value == ''){
				messageTextarea.classList.add('error')
				messageTextarea.previousElementSibling.classList.add('error')
				hasError = true
			}
			messageTextarea.addEventListener('input',function(){
				if(messageTextarea.value == ''){
					messageTextarea.classList.add('error')
					messageTextarea.previousElementSibling.classList.add('error')
					hasError = true
				}
				else{
					this.classList.remove('error')
					this.previousElementSibling.classList.remove('error')
					hasError = false
				}
			})

			if(!hasError){
				document.querySelector('#contact_form form').submit()
			}
		})