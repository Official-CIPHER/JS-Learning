# Fetch() Method

The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.

A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

## Syntax

```javascript
fetch(resource)
fetch(resource, options)
```

## Parameters

<mark style='background-color:rgba(181, 179, 179, 0.22);color:white;border-radius:5px;padding:4px 6px'>resource</mark>

This defines the resource that you wish to fetch. This can either be:

• A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.

• A Request object

<mark style='background-color:rgba(181, 179, 179, 0.22);color:white;border-radius:5px;padding:4px 6px'>optional</mark> <span style="border:0.5px solid gray;border-radius:15px;padding:4px 6px">optional</span>

A RequestInit object containing any custom settings that you want to apply to the request.

## Return value
A Promise that resolves to a Response object

## Exceptions

<mark style='background-color:rgba(181, 179, 179, 0.22);color:white;border-radius:5px;padding:4px 6px'>AbortError</mark> <mark style='background-color:rgba(181, 179, 179, 0.22);color:blue;border-radius:5px;padding:4px 6px'>DOMException</mark>

The request was aborted due to a call to the AbortController abort() method.

The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.

<mark style='background-color:rgba(181, 179, 179, 0.22);color:white;border-radius:5px;padding:4px 6px'>NotAllowedError</mark> <mark style='background-color:rgba(181, 179, 179, 0.22);color:blue;border-radius:5px;padding:4px 6px'>DOMException</mark>

Thrown if use of the Topics API is specifically disallowed by a browsing-topics . Permissions Policy, and a fetch() request was made with browsingTopics: true.

<mark style='background-color:rgba(181, 179, 179, 0.22);color:white;border-radius:5px;padding:4px 6px'>TypeError</mark>

Can occur for the following reasons:

1. If fetch throws a network error.
2. Blocked by a permissions policy
3. Invalid header name.
4. Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode.
 
 
         ex -fetch('blob://example.com/', { mode: 'cors' });


5. URL includes credentials.


        ex - fetch('https://user:password@example.com/');


6. Invalid referrer URL.


         ex - fetch('https://example.com/', { referrer: './abc\u0000df' });