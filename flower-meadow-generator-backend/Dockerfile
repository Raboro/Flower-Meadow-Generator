FROM khipu/openjdk17-alpine

RUN apk add maven

WORKDIR /app

COPY src /app
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package

COPY ./target/flower-meadow-generator-0.0.1-SNAPSHOT.jar /app/flower-meadow-generator-0.0.1-SNAPSHOT.jar
COPY ./src/main/resources/application.properties /app/application.properties

CMD ["java", "-jar", "/app/flower-meadow-generator-0.0.1-SNAPSHOT.jar"]