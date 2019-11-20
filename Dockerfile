FROM alpine:3.9
WORKDIR /source/ui-component-auto

LABEL com.github.actions.name="kintone-ui-component auto"
LABEL com.github.actions.description="Run automation for kintone-ui-component"
LABEL com.github.actions.icon="aperture"
LABEL com.github.actions.color="green"

COPY package.json /source/ui-component-auto

RUN cd /source/ui-component-auto && npm i --only=production

RUN apk add --update nodejs npm
RUN apk add chromium
RUN chmod +x entrypoint.sh
COPY . .

ENTRYPOINT [ "/entrypoint.sh" ]
