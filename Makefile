npm:
	npm install
	cd src/client/; npm install

node:
	echo 'Starting Node in Docker Container'
	docker-compose up

client:
	echo 'Starting client'
	cd src/client/; npm start



	


