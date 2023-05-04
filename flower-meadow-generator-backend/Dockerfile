FROM khipu/openjdk17-alpine

RUN apk add maven

WORKDIR /app

COPY pom.xml .
COPY src/ ./src/
RUN mvn clean package -Dmaven.test.skip

CMD ["java", "-jar", "target/flower-meadow-generator-0.0.1-SNAPSHOT.jar"]