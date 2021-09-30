---
title: "Why you should version you APIs?"
excerpt: ""
coverImage: ""
date: "September 29, 2021"
author:
  name: Ege Cavusoglu
---

###

Do you remember ever seeing an API url like `my-api/api/v2`? Maybe the version of an API server might not make sense at all, since it is something we can change whenever we want. Let me tell you about my experience of how we leveraged API verisoning in production level software applications.

When building a class project or a personal project perhaps your main goal is to demo a minimum viable product. You can take down the site, or wipe a database to test according to your needs. You can deprecate endpoints, change the responses and so on. However one does not simply do that in a production environment. There are many cases to consider before changing:

- Is your development team aware of these changes?
- Is client side code responding to these changes accordingly?
- How do we ensure all client side code is invoking this updated version of our API?

### The Problem

When you ship a software product to production, we must think of it like a live broadcast. You can't just stop the broadcast and start over or change the channel you are broadcasting on, your viewers will be confused and they will say that it's broken. Same applies here. Let me try to explain how API versioning helps with addressing the questions above.

First let me talk about the team communication aspect of this approach. In a dev team of multiple people all must work in a harmony. This is extremely important for API development since this is the most critical part of your application. If your client and server cannot communicate correctly, your code is worthless since you won't be able to correctly save application data to persist. When frontend and backend teams are working together they agree on schemas to transfer data upon various requests. Keeping track of every small change you have made and communicating this across the team is stressfull and error prone.

A quick example would be client side asking API to send the information about a hotel. Let's assume our frontend would like to display the name, address and the pricing of the hotel and this is the agreed schema.

```ts
{
    name: String,
    pricingPerNight: Number,
    address: String
}
```

Later, the backend team would like to run robust filtering on the hotels so decides to change the schema as such.

```ts
{
    name: String,
    pricingPerNight: Number,
    location: {
        country: String,
        address: String
    }
}
```

Do you see the problem here? We were accessing adress field with `data.adress` before, but now its `data.location.adress`. If the frontend does not adjust to the new schema of the API response problems might arise in the client side.

Secondly, it not always possible to make sure that every user of your app is using the latest version of your app. This becomes particularly difficult when your client side is mobile app that needs to be recompiled for each new version and provisioned by Apple and Google before launched to the users. It becomes challenging for the API to respond in accordance to the client side version.

### The Solution

Thankfully API versioning solves both of these problems gracefully. Going off of the example before, let's say we make the schema changes but expose them in the version `1.0.1` of our API. This means we have exposed the initial API at `my-api.com/api/v1.0.0` and the changes to schema applied to `my-api.com/api/v1.0.1`. Now the new versions of the applications that consume this API will need to change their server url from `my-api.com/api/v1.0.0` to `my-api.com/api/v1.0.1`.

- When the rest of the team starts using the new version of the API in their implementation they will detect errors and refer back to the new documentation that is provided for API version 1.0.1 and will adjust code accordingly!

- Users with the old version of the client side application will continue to have a seamless experience they always had. New users that install the latest version will be experiencing the new version.

Before explaning my preferred approach in the implementation, I would like to denote one more power you get with this: Deprecation! When you have versioned routes, you can easily deprecate versions that you don't want your API to be used. If my API `v1.0.0` used an implementation or business logic that is no longer supported, I can easily block access to it.

### Implementation Concept

A simple approach that I use is to route requests to corresponding versions using middlewares. Let me show you a simple file structure to support versioning.

```
api/
│ router
│
└───v1.0.0/
│
└───v1.0.1/
```

There is a simple logic that states if request sent ends with `api/v1.0.0`, use the logic under `v1.0.0` folder and etc. This will likely mean that you are going to be sharing the same code between different versions for the parts where your API did NOT change, and this will increase your bundle size. So make sure to take that into consideration if your API has a massive codebase. Remember that you can always delete old versions folders and deprecate old versions.

### Conclusion

Before sailing out for next your production level project, make sure to set up a mechanism for API versioning for better flexibility for your dev team and more reliable applications!
