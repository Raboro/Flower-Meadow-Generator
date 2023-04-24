FROM khipu/openjdk17-alpine

WORKDIR /app

COPY ./target/flower-meadow-generator-0.0.1-SNAPSHOT.jar /app/flower-meadow-generator-0.0.1-SNAPSHOT.jar
COPY ./src/main/resources/application.properties /app/application.properties

CMD ["java", "-jar", "/app/flower-meadow-generator-0.0.1-SNAPSHOT.jar"]