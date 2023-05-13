FROM node:18.14.2-bullseye-slim
ENV NODE_ENV development


RUN mkdir -p /usr/project/app
COPY ./server/ /usr/project/app

# set the user access (771)
  # 7 : god mode for owned file/directory
  # 7 : god mode for every user inside the groups
  # 1 : read only for other user

RUN chown node:node -R /usr/project/app
RUN chmod 771 -R /usr/project/app
RUN chown node:root -R /usr/local/
RUN chmod 771 -R /usr/local/

RUN chmod 777 /usr/project/app/commands.sh


WORKDIR /usr/project/app
USER node

RUN npm i --save-dev pm2 -g
RUN npm i

EXPOSE 3300 3301 3302 3303 3304 3305


CMD ./commands.sh

# ["exec", "./commands.sh"]