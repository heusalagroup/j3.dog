## API Endpoints

### GET `/api/v1/grid/:grid/:z/:y/:x`

Retrieve the value of a single cell at the specified coordinates.

### POST `/api/v1/grid/:grid/:z/:y/:x`

Update the value of a single cell at the specified coordinates.

### DELETE `/api/v1/grid/:grid/:z/:y/:x`

Delete the value of a single cell at the specified coordinates.

### GET `/api/v1/grid/:grid/:z/:y`

Retrieve all cells in the specified row.

### POST `/api/v1/grid/:grid/:z/:y`

Update all cells in the specified row.

### DELETE `/api/v1/grid/:grid/:z/:y`

Delete all cells in the specified row.

### GET `/api/v1/grid/:grid/:z`

Retrieve all cells in the specified layer.

### POST `/api/v1/grid/:grid/:z`

Update all cells in the specified layer.

### DELETE `/api/v1/grid/:grid/:z`

Delete all cells in the specified layer.

### GET `/api/v1/grid`

Retrieve all grids in the database.

### POST `/api/v1/grid`

Create a new grid.

### DELETE `/api/v1/grid`

Delete all grids in the entire database.

### GET `/api/v1/grid/:grid/events`

Listen for events on the specified grid. This endpoint uses HTTP long polling,
so the connection will remain open until an event is triggered or a timeout is
reached. When an event is triggered, the server will send a response with the
details of the event, and the connection will close. The client can then make
another request to listen for further events.

This endpoint accepts the following query parameters:

- `timeout`: The maximum duration, in seconds, to keep the connection open
  before timing out. The default is 30 seconds.
- `lastEventId`: The ID of the last event received by the client. The server
  will only send events with a higher ID. If this parameter is not provided, the
  server will send all events.
