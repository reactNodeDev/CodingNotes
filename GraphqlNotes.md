# ---- Introduction
- Graphql is meta created `querying language` which allows us to `ask for data from our backend`
- unlike rest APIs where there are multiple endpoints for requests, `Graphql has just one endpoint for requests`
- we send the req with exact data that we want back
- for ex : we just want `id` and `title` of the objects back from the backend

```jsx
// req obj
{
    id,
    title
}
``` 

- response we would get an array of objects which just have id and title in them
```jsx
// res
[
    {
        id,
        title
    },
    {
        id,
        title
    },
    {
        id,
        title
    },
]
```

- in Graphql, its upto us what kind of data we want from Graphql backend, in what shape and how
- Graphql is actually a `replacement for redux`. thats cause Graphql has its own way of tracking the data