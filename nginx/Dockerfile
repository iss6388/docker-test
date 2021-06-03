# default.conf
upstream api2 {
    server api2:3000;
}

upstream api {
    server api:5000;
}

server {
    listen 80;

    location /api {
        proxy_set_header X-Forwarded-For $remote_addr;

        # following line makes sure it works otherwise it will be /
        rewrite ^/api/?(.*)$ /$1 break;

        # proxy_pass http://api:5000
        proxy_pass http://api;
    }

    location /api2 {
        proxy_set_header X-Forwarded-For $remote_addr;

        rewrite ^/api2/?(.*)$ /$1 break;

        proxy_pass http://api2;
    }
}


