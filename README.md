# Backend Stage 2 Task

Basic arithmetic computation


## Environments
- Node version - v16.13.0


## Technologies used 
- NodeJS
- ExpressJS
- Typescript
- ESLint


## Getting Started

**Clone the repo**

```
$ git clone https://github.com/zeph-x/simple-arithmetics
```

**Install dependencies**

```
$ yarn
```

**Start application**

```
$ yarn start
```

---


**Endpoint** `/localhost:3000/calculate` - method (POST)

- Computes simple arithmetic

**Payload**

```json
{
    "operation_type": "addition",
    "x": 10,
    "y": 20
}
```


**Response format**

```json
{
    "slackUsername": "Jossy",
    "result": 12,
    "operation_type": "addition",
}

```



- `operation_type` can accept a set of instructions for operation to be carried out.

**Payload**

```json
{
    "operation_type": "Can you please multiply 13 by 25",
    "x": 0,
    "y": 0
}
```


**Response format**

```json
{
    "slackUsername": "Jossy",
    "result": 325,
    "operation_type": "multiplication",
}

```



