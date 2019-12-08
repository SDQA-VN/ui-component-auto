FROM ubuntu:18.04
WORKDIR /source/ui-component-auto

LABEL com.github.actions.name="kintone-ui-component auto"
LABEL com.github.actions.description="Run automation for kintone-ui-component"
LABEL com.github.actions.icon="aperture"
LABEL com.github.actions.color="green"

COPY package.json /source/ui-component-auto

RUN sudo apt update
RUN sudo apt install default-jdk
RUN sudo apt install nodejs
RUN sudo apt install npm
RUN sudo apt-get install google-chrome-stable
RUN sudo apt install git
RUN cd /source/ui-component-auto && npm i
COPY . .
RUN cat package.json
RUN chmod +x /source/ui-component-auto/entrypoint.sh

ENTRYPOINT [ "/source/ui-component-auto/entrypoint.sh" ]
