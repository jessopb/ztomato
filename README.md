# Pomodoro Timer

# Dev
## Start DB
### MYSQL Docker
```
docker run --name mysql -d \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=password\
-e MYSQL_USER=user \
-e MYSQL_PASSWORD=password \
--restart unless-stopped \
mysql:8
```

## ENV SETUP
 - copy .env-dist to .env
 - create any oauth logins
     - add their providers to pages/api/auth/[...nextauth].js
     - add their secrets and keys to .env 
 - fill in DATABASE_URL string

`yarn` and `yarn dev`

# Deploy ...
Start your db
