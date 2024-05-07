
//*---------------------------------------------------
// Programming Question - Barchart Generator.
//*---------------------------------------------------

// Write a function which takes an array as an input and create a barchart depending upon the array number values.


const barChartGenerator = (arr) => {

    let result = "";

    for (const val of arr) {

        for (let i = 1; i <= val; i++) {

            result += "="

            if (i == val) {
                result += "\n"
            }
        }

    }

    return result

}

const arr = [5, 3, 9, 2]
console.log(barChartGenerator(arr));

