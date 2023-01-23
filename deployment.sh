cd mozhemo
git pull origin main
docker container stop mozhemo-frontend
docker container rm mozhemo-frontend
docker image build -t mozhemo/frontend .

docker run -d --name mozhemo-frontend -p 80:80 mozhemo/frontend