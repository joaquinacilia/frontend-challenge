FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./js/library/jquery/jquery-3.5.1.min.js /usr/share/nginx/html/js/library/jquery/jquery-3.5.1.min.js
COPY ./js/livesearch/livesearch.api.js /usr/share/nginx/html/js/livesearch/livesearch.api.js
COPY ./js/livesearch/livesearch.event.js /usr/share/nginx/html/js/livesearch/livesearch.event.js
COPY ./js/livesearch/livesearch.function.js /usr/share/nginx/html/js/livesearch/livesearch.function.js
COPY ./css/livesearch/livesearch.css /usr/share/nginx/html/css/livesearch/livesearch.css
COPY ./img/favicon.ico /usr/share/nginx/html/img/favicon.ico