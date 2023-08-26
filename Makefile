run: 
    docker run -d -p 3000:3000 -v monop:/app/data --rm --name web-studio gubinruslan1986/web-studio
run-dev: 
    docker run -d -p 3000:3000 -v "D:\WebProjects\Frontend\web-studio:/app" -v /app/node_modules:/app/node_modules --rm --name web-studio gubinruslan1986/web-studio
stop: 
		docker stop monopolyfront		

    docker run -d -p 3000:3000 -v web-studio:/usr/app --rm --name studio-next next