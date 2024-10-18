#Use an official Python runtime as a parent image
FROM python:3.10

#Set the environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

#Set the working directory
WORKDIR /app

#Install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

#Expose the port Django will run on
EXPOSE 8000

#Copy the project into the container
COPY . /app/

#Define the command to run the Django developmenet server
CMD ["python", "manage.py", "runserver"]