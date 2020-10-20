FROM nginx:latest
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./js/library/jquery/jquery-3.5.1.min.js /usr/share/nginx/html/js/library/jquery/jquery-3.5.1.min.js
COPY ./js/livesearch/livesearch.api.js /usr/share/nginx/html/js/livesearch/livesearch.api.js
COPY ./js/livesearch/livesearch.event.js /usr/share/nginx/html/js/livesearch/livesearch.event.js
COPY ./js/livesearch/livesearch.function.js /usr/share/nginx/html/js/livesearch/livesearch.function.js
COPY ./css/livesearch/livesearch.css /usr/share/nginx/html/css/livesearch/livesearch.css
COPY ./img/favicon.ico /usr/share/nginx/html/img/favicon.ico
COPY ./img/search.png /usr/share/nginx/html/img/search.png
COPY ./img/searchfocus.png /usr/share/nginx/html/img/searchfocus.png
COPY ./img/loader.png /usr/share/nginx/html/img/loader.png
COPY ./font/montserrat-regular-webfont.woff /usr/share/nginx/html/font/montserrat-regular-webfont.woff
COPY ./font/montserrat-regular-webfont.woff2 /usr/share/nginx/html/font/montserrat-regular-webfont.woff2
COPY ./font/montserrat-semibold-webfont.woff /usr/share/nginx/html/font/montserrat-semibold-webfont.woff
COPY ./font/montserrat-semibold-webfont.woff2 /usr/share/nginx/html/font/montserrat-semibold-webfont.woff2