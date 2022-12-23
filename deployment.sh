cd mozhemo
git pull origin main
docker container stop mozhemo/frontend
docker container rm mozhemo/frontend
docker image build -t mozhemo/frontend .
docker container run -itd --name mozhemo/frontend mozhemo/frontend