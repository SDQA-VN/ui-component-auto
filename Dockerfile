FROM alpine:3.10

LABEL com.github.actions.name="kintone-ui-component auto"
LABEL com.github.actions.description="Run automation for kintone-ui-component"
LABEL com.github.actions.icon="aperture"
LABEL com.github.actions.color="green"

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install
ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]