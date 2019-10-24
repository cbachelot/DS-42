#!/bin/bash
$ curl -X POST -H "Authorization: key=AAAAyBzVjVU:APA91bFq9HzEuZcnkgJE_1xrqfVgH8bOVq6mYL8XkBGZyJamHG1B6zf6t6J7AMD-b5ObeQ1zqaeYpbMZhPl9SUp0yTJB3menw65QWvTzXCaZOjSzbcOuSqta40vCwXxIhzRhjtRb8ulU" -H "Content-Type: application/json" -d '{
  "to": "${5’s token}",
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message",
    "icon": "./img/icons/android-chrome-192x192.png"
  }
}' https://fcm.googleapis.com/fcm/send
