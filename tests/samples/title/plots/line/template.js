const env = picasso.Picasso();
const DataTable = picasso.DataTable;
const html = picasso.operators.html;
const mountPoint = document.getElementById('chart');

d3.json('/data/cars.json', (data) => {
    const jsonData = data;
    const schema = [{
        name: 'Name',
        type: 'dimension'
    },
    {
        name: 'Maker',
        type: 'dimension'
    },
    {
        name: 'Miles_per_Gallon',
        type: 'measure'
    },

    {
        name: 'Displacement',
        type: 'measure'
    },
    {
        name: 'Horsepower',
        type: 'measure'
    },
    {
        name: 'Weight_in_lbs',
        type: 'measure',
    },
    {
        name: 'Acceleration',
        type: 'measure'
    },
    {
        name: 'Origin',
        type: 'dimension'
    },
    {
        name: 'Cylinders',
        type: 'dimension'
    },
    {
        name: 'Year',
        type: 'dimension'
    },

    ];

    //{dataTable}

    const canvas = env.canvas();
    const rows = ['Acceleration'];
    const columns = ['Origin'];
    canvas.//{mount}
                    .width(600)
                    .data(rootData)
                    //{title}
                    .height(500)
                    .columns(columns)
                    //{color}
});

setTimeout(() => {
    canvas.rows([])
})
