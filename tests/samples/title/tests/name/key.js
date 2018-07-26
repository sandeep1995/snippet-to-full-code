//case-block @key title, @id MZ-1, @desc title with small thing
.title("01");
//end-case-block

//case-block @key title, @id MZ-2, @desc a different title
.title("02");
//end-case-block

//extra-block @key dataTable
let rootData = new DataTable(jsonData, schema);
rootData = rootData.groupBy(['Origin'], {
    Acceleration: 'mean'
});
//end-extra-block


//extra-block @key dataTable
let rootData = new DataTable(jsonData, schema);
rootData = rootData.groupBy(['Origin'], {
    Acceleration: 'mean'
});
//end-extra-block
