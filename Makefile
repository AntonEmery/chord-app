npm:
	npm install
	cd src/client/; npm install

node_dev:
	echo 'Starting Node dev server in Docker Container'
	docker build -t node_dev .
	docker run -t -p 8080:8080 node_dev

client:
	echo 'Starting client'
	cd src/client/; npm start



	


