cd mozhemo
git pull origin main
docker container stop mozhemo-frontend
docker container rm mozhemo-frontend
docker image build -t mozhemo/frontend --build-arg robots=$ROBOTS_META .

docker run -d --name mozhemo-frontend -p 80:80 mozhemo/frontend