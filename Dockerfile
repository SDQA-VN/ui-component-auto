FROM alpine:3.9
WORKDIR /source/ui-component-auto

LABEL com.github.actions.name="kintone-ui-component auto"
LABEL com.github.actions.description="Run automation for kintone-ui-component"
LABEL com.github.actions.icon="aperture"
LABEL com.github.actions.color="green"

COPY package.json /source/ui-component-auto

RUN wget http://download.java.net/java/jdk9-alpine/archive/181/binaries/jdk-9-ea+181_linux-x64-musl_bin.tar.gz
RUN tar -xzvf *.tar.gz
RUN chmod +x jdk-9
RUN mv jdk-9 /usr/local/share
ENV JAVA_HOME=/usr/local/share/jdk-9
ENV PATH="$JAVA_HOME/bin:${PATH}"
RUN rm -rf *.tar.gz
RUN apk add --update nodejs npm
RUN apk add chromium
RUN apk add --no-cache git
RUN cd /source/ui-component-auto && npm i
COPY . .
RUN cat package.json
RUN chmod +x /source/ui-component-auto/entrypoint.sh

ENTRYPOINT [ "/source/ui-component-auto/entrypoint.sh" ]
