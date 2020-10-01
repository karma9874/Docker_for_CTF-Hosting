docker build -t safe_house .
docker-compose up --build -d
docker cp ./agentxer.sql safe_house_sql:/
docker exec safe_house_sql /bin/sh -c 'mysql -u root -pscam@123 agentxer </agentxer.sql'