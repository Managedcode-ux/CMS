import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import AddRecord from './AddRecord';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    sortable: true,
    width: 200
  },

  {
    field: 'name',
    headerName: 'Name',
    sortable: false,
    width: 160,
    editable: false,
    valueGetter: (params) =>
      `${params.row.FirstName || " "} ${params.row.LastName || " "}`
  },
  {
    field: 'Address',
    headerName: 'Address',
    width: 200,
    editable: false,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
    editable: false,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 150,
    editable: false,
  },
  {
    field: 'PinCode',
    headerName: 'Pin Code',
    width: 100,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: false,
  },
  {
    field: 'Phone_Number',
    headerName: 'Phone Number',
    width: 150,
    editable: false,
  },
]

const rows = [
  {
    "id": "88bc5647-0d85-4056-897b-fa43bbb8525e",
    "FirstName": "Dudley",
    "LastName": "Galvan",
    "email": "dgalvan0@tumblr.com",
    "Address": "379 Doe Crossing Point",
    "city": "NewYork",
    "state": "Washington",
    "PinCode": "558621",
    "Phone_Number": "840-795-6619"
  },
  {
    "id": "f4a58fda-381a-47b5-94b7-22b2f85b8103",
    "FirstName": "Clint",
    "LastName": "Minear",
    "email": "cminear1@furl.net",
    "Address": "748 Doe Crossing Park",
    "city": "Vakhrushi",
    "state": "nil",
    "PinCode": "613110",
    "Phone_Number": "434-994-3584"
  },
  {
    "id": "d7b364bd-322e-4684-a2a0-8feed2de4b8e",
    "FirstName": "Christoper",
    "LastName": "Clementet",
    "email": "cclementet2@furl.net",
    "Address": "07793 Bay Center",
    "city": "Qinggang",
    "state": "nil",
    "PinCode": "987321",
    "Phone_Number": "247-140-6490"
  },
  {
    "id": "e0629d75-c104-4911-89ef-898869ff9770",
    "FirstName": "Lockwood",
    "LastName": "Calabry",
    "email": "lcalabry3@mediafire.com",
    "Address": "38066 Pine View Trail",
    "city": "ErÃ©tria",
    "state": "nil",
    "PinCode": "568794",
    "Phone_Number": "273-241-1283"
  }
]

function customToolBar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <AddRecord />
    </GridToolbarContainer>
  )
}

const DataList = () => {
  return (
    <div>
      <div style={{ height: 1000, width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>

            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={25}
              rowsPerPageOptions={[20]}
              checkboxSelection
              components={{ Toolbar: customToolBar }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataList