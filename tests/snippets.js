//case-block @key title, @id MZ-1, @desc title with small thing, @author Sandeep Acharya
.title("01")
//end-case-block

//case-block @key title, @id MZ-2, @desc a different title, @author Sandeep Acharya
.title("02")
//end-case-block

//extra-block @key dataTable, @author Sandeep Acharya
let rootData = new DataTable(jsonData, schema);
rootData = rootData.groupBy(['Origin'], {
   Acceleration: mean
});
//end-extra-block
