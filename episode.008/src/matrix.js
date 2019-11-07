export default function strToMatrix(str) {
    let matrix = {
        rows:  '',
        columns: '',
    }
    let list_row = [];
    let list_column = [];
    const array_split = str.split('\n');
    for (let row of array_split) {
        const arr_row = row.split(' ').map(Number);
        list_row.push(arr_row);
    }

    matrix.rows = list_row; 
    for (let row in list_row) {
        let arr_column = [];
        for (let i = 0; i != list_row.length; i++) {
            arr_column.push(list_row[i][row]);
        }
        list_column.push(arr_column);
    }
    matrix.columns = list_column;
    console.log(matrix)
    return matrix;
}
