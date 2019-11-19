FROM alpine:3.9

LABEL com.github.actions.name="kintone-ui-component auto"
LABEL com.github.actions.description="Run automation for kintone-ui-component"
LABEL com.github.actions.icon="aperture"
LABEL com.github.actions.color="green"

RUN apk add --update nodejs npm
RUN apk add chromium
COPY . /action
RUN chmod +x entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
