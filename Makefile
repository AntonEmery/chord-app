npm:
	npm install
	cd src/client/; npm install

node_dev:
	echo 'Starting Node dev server in Docker Container'
	docker build -t node_dev .
	docker run -it -v ${PWD}:/chord-app  --env-file variables.env -p 8080:8080 node_dev

node_prod:
	echo 'Starting Node prod server in Docker Container'
	docker build -t node_prod .
	docker run --env-file variables.env -p 8080:8080 -e "run_mode_env=start" node_prod

client:
	echo 'Starting client'
	cd src/client/; npm start






