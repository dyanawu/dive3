APP_NAME=dive3
DB_NAME=dive3_db

deploy:
	cd sql && make clean
	heroku pg:reset -a $(APP_NAME) --confirm $(APP_NAME)
	heroku pg:push $(DB_NAME) DATABASE_URL -a $(APP_NAME)
	git push -fv heroku master

.PHONY: deploy
