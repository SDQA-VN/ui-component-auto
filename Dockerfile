FROM alpine:3.9
WORKDIR /source/ui-component-auto

LABEL com.github.actions.name="kintone-ui-component auto"
LABEL com.github.actions.description="Run automation for kintone-ui-component"
LABEL com.github.actions.icon="aperture"
LABEL com.github.actions.color="green"

COPY package.json /source/ui-component-auto

RUN apk add --update nodejs npm
RUN apk add chromium
RUN apk add --no-cache git
RUN cd /source/ui-component-auto && npm i
COPY . .
RUN cat package.json
RUN chmod +x /source/ui-component-auto/entrypoint.sh

ENTRYPOINT [ "/source/ui-component-auto/entrypoint.sh" ]
