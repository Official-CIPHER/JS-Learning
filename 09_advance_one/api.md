# API

## What is an API ?
<span style="color:#4ffbdf">APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols.</span> For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

## What does API stand for ?
<span style="color:#4ffbdf">API stands for Application Programming Interface.</span> In the context of APIs, the word <span style="color:#00c9a7"><span style="color:red">Application</span> refers to any software with a distinct function.</span> <span style="color:red">Interface</span>  <span style="color:#00c9a7">can be thought of as a contract of service between two applications.</span> This contract defines how the two communicate with each other using requests and responses. Their API documentation contains information on how developers are to structure those requests and responses.

## How do APIs work ?
API architecture is usually explained in terms of client and server. <mark style="background-color:#4ffbdf">The application sending the request is called the client, and the application sending the response is called the server.</mark> So in the weather example, the bureau’s weather database is the server, and the mobile app is the client. 

There are four different ways that APIs can work depending on when and why they were created.

## SOAP APIs
These APIs use Simple Object Access Protocol. Client and server exchange messages using XML. This is a less flexible API that was more popular in the past.

## RPC APIs
These APIs are called Remote Procedure Calls. The client completes a function (or procedure) on the server, and the server sends the output back to the client.

## Websocket APIs
Websocket API is another modern web API development that uses JSON objects to pass data. A WebSocket API supports two-way communication between client apps and the server. The server can send callback messages to connected clients, making it more efficient than REST API.

## REST APIs
These are the most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client. 

# What are the different types of APIs ?
APIs are classified both according to their architecture and scope of use. We have already explored the main types of API architectures so let’s take a look at the scope of use.

## <mark style="background-color:#4ffbdf">Private APIs</mark>
These are internal to an enterprise and only used for connecting systems and data within the business.

## <mark style="background-color:#4ffbdf">Public APIs</mark>
These are open to the public and may be used by anyone. There may or not be some authorization and cost associated with these types of APIs.

## <mark style="background-color:#4ffbdf">Partner APIs</mark>
These are only accessible by authorized external developers to aid business-to-business partnerships.

## <mark style="background-color:#4ffbdf">Composite APIs</mark>
These combine two or more different APIs to address complex system requirements or behaviors. 

# What is an API endpoint and why is it important ?
API endpoints are the final touchpoints in the API communication system. These include server URLs, services, and other specific digital locations from where information is sent and received between systems. API endpoints are critical to enterprises for two main reasons: 

## 1. Security
API endpoints make the system vulnerable(weak and easy to attack) to attack. API monitoring is crucial for preventing misuse.

## 2. Performance
API endpoints, especially high traffic ones, can cause bottlenecks and affect system performance.

# XMLHttpRequest (XHR) 
<mark style="background-color:#4ffbdf">XMLHttpRequest (XHR) Objects are used to interact with servers.</mark>

You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

<mark style="background-color:#4ffbdf">Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.</mark>

## XMLHttpRequest.readyState 
Property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

| Value | State | Description |
| ------| ----- | ----------- |
| 0 | UNSENT | Client has been created. open() not called yet. |
| 1 | OPENED | open() has been called |
| 2 | HEADERS_RECEIVED | send() has been called, and headers and status are available. |
| 3 | LOADING | Downloading; responseText holds partial data. |
| 4 | DONE | The operation is complete. |