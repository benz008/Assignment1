var matrixA = [[8,3],[2,4],[3,6]];
var matrixB = [[1,2,3],[4,6,8]];
var matrixC = [[20,34,48],[18,28,38],[27,42,57]];
var mlist = [matrixA,matrixB,matrixC];
var name = ['matrixA','matrixB','matrixC'];



function display(m)
{
    for(let i = 0 ; i < m.length ; i++)
    {
        console.log(m[i].join(" ") + "\n");
    }
}

function Show()
{
    for (let i = 0 ; i < mlist.length ; i++)
    {
        console.log(name[i])
        display(mlist[i])
    }
}



function mutiplymatrix(ma , mb)
{
    let aNumRows = ma.length;
    let aNumCols = ma[0].length; 
    let bNumRows = mb.length;
    let bNumCols = mb[0].length;

    sum = [aNumRows]; 
    for (let i = 0; i < aNumRows; i++)
    {
        sum[i] = [bNumCols];
        for (let j = 0; j < bNumCols; j++) 
        {
            sum[i][j] = 0;
            for (let k = 0; k < aNumCols; k++)
            {
                sum[i][j] += ma[i][k] * mb[k][j];
            }
        }
    }
    console.log('****sum****');
    return sum;
}

Show();
console.log(mutiplymatrix(matrixA,matrixB));



