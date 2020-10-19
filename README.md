# Habitissimo frontend test: Live Search Input

## Infrastructure installation

1.- Build the image
```
docker build -t webserver .
```

2.- Run the image
```
docker run -it --rm -d -p 8080:80 --name web webserver
```

## Check front test

```
http://localhost:8080
```
