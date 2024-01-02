# HTTP

## What is a HTTP 200 status code?

- [x] OK
- [ ] Created
- [ ] Accepted
- [ ] No Content

## What is a HTTP 201 status code?

- [ ] OK
- [x] Created
- [ ] Accepted
- [ ] No Content

## What status code is returned when a resource is not found?

- [ ] 200
- [ ] 201
- [x] 404
- [ ] 500

## What request is used to validate a resource?

- [ ] GET
- [ ] POST
- [ ] PUT
- [x] HEAD

## What is a RESTful API?

- [ ] An API that uses HTTP methods.
- [ ] An API that uses HTTP methods and follows the REST architectural style.
- [ ] An API that uses HTTP methods and follows the REST architectural style and uses JSON as the data format.
- [x] An API that uses HTTP methods and follows the REST architectural style and uses JSON as the data format and uses hypermedia links.

## What is the difference between a PUT and a POST request?

- [ ] PUT is used to create a resource. POST is used to update a resource.
- [ ] PUT is used to update a resource. POST is used to create a resource.
- [x] PUT is used to update a resource. POST is used to create a resource or update a resource.
- [ ] No difference.

## Which of the following header will instruct the browser to not cache the response?

- [ ] Cache-Control: no-cache
- [ ] Cache-Control: no-store
- [ ] Cache-Control: must-revalidate
- [x] All of the above

## What is the difference between a 301 and a 302 redirect?

- [ ] They are the same.
- [ ] 301 is a temporary redirect. 302 is a permanent redirect.
- [x] 301 is a permanent redirect. 302 is a temporary redirect.
- [ ] None of the above.

## What request is sent by a browser when a user clicks on a link?

- [x] GET
- [ ] POST
- [ ] PUT
- [ ] GET or POST

## What request is sent by a browser *by default* when a user submits a form?

- [x] GET
- [ ] POST
- [ ] PUT
- [ ] GET or POST

## `HEAD` and `GET` requests are identical except that the `HEAD` request has no response body.

- [x] True
- [ ] False
- [ ] None of the above

## When should you use a `HEAD` request?

- [ ] When you want to create a resource.
- [ ] When you want to update a resource.
- [x] When you want to get information about a resource.
- [ ] When you want to delete a resource.

## What is the purpose of the `Accept` header?

- [x] To tell the server what type of response the client is expecting.
- [ ] To tell the server what type of request the client is sending.
- [ ] To tell the server the size of the request body.
- [ ] To tell the server the size of the response body.

## What is the purpose of the `Content-Type` header?

- [ ] To tell the server what type of response the client is expecting.
- [x] To tell the server the nature of the request body.
- [x] To tell the client the nature of the response body.

## What is the importance of the gzip compression?

- [ ] To reduce the size of the request body.
- [x] To reduce the size of the response body.
- [ ] To reduce the size of the request body and the response body.
- [ ] None of the above.

## What is the purpose of the `If-Modified-Since` request header?

- [x] The server should only send the resource if the resource has been modified since the specified date.
- [ ] The resource should only be modified if the resource has been modified since the specified date.
- [ ] The server should only send the resource date
- [ ] The server should update the resource date and send the resource.

## What is the purpose of the `ETag` header?

- [ ] The request header that uniquely identifies the version of the resource.
- [ ] The response header that names the resource.
- [ ] The date the resource was last modified.
- [x] The response header that uniquely identifies the version of the resource.
