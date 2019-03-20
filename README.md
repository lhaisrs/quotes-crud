# Quotes CRUD

It's an Angular application using **angular-ngrx-data** 
I'm analysing why and how to use [**angular-ngrx-data**](https://github.com/johnpapa/angular-ngrx-data) in a scalable Angular application

# Why use angular ngrx data?

* It's complete way to reduce all files of effects, stores, actions to use a *redux* archicheture in your project.
* Works really fine with REST APIs, you just need to create a custom *DataService* and *EntityMetadata*

# Why don't use angular ngrx data?

* Doesn't make sense use with Authentication, you'll need to create your AuthService by yourself with pure Angular or use it with [**ngrx**](https://ngrx.io/)
* Doesn't make sense use with *Firebase* because you'll need to change the Effects and the EntityMetadata helps a lot using REST API. It's already configured to a REST API. If you want to use with Firebase, you'll need to change a lot and probably lost the pluggin essence. 