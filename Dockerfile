FROM python:3.7.3 AS build

WORKDIR /usr/src/app
COPY . ./

RUN pip install -r requirements.txt
RUN python manage.py collectstatic --noinput
