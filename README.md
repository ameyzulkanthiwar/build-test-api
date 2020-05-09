# Building Restful API using Node, Express and Mongo DB

Note: Project is running at `5000` port

Command for starting the project

```
npm start
```

HTTP Methods<br>

## Get

```
http://localhost:5000/userInfo
```

#

## Post

```
http://localhost:5000/userInfo
```

##### Body

```
{
	"name": "test-2",
	"gender": "G",
	"companyName": "iVoyant LLC"
}
```

#

## Get by name

```
http://localhost:5000/userInfo/`name`
```

#

## Patch (update)

-   Pass parameter for selecting the data set to change
-   And pass body to update selected data

```
http://localhost:5000/userInfo/`name`

```

Body

```
{
	"name": updated_value,
	"gender": updated_value,
	"companyName": updated_value
}
```

#

## Delete by name

```
http://localhost:5000/userInfo/`name`

```
