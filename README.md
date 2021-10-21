# Boom Tech

Setup
```
$ npm i
```

Run
```
$ npm run dev
```
# Use following apis for

Create form

Use method POST

```
http://localhost:8080/api/form
```

Get all forms

Use method GET

```
http://localhost:8080/api/form
```

Get form by ID

Use method GET

```
http://localhost:8080/api/form/:id
```

Update form

Use method PUT

```
http://localhost:8080/api/form/:id
```

Delete form

Use method DELETE

```
http://localhost:8080/api/form/:id
```


# Data should contain form name and questions

Here you can see example of input data

```
{
    "name":"form",
    "questions" : [
        {
            "text_value": "text value",
            "field_type": "single_line_text"
        },
        {
            "text_value": "some value",
            "field_type": "multi_line"
        },
        {
            "text_value": "testName",
            "field_type": "name"
        },
        {
            "text_value": "testAddress 12/3",
            "field_type": "address"
        }
    ]
}

