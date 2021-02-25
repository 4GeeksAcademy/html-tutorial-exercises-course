FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 -g

RUN npm i learnpack@0.0.96 -g && learnpack plugins:install learnpack-html@0.0.17
