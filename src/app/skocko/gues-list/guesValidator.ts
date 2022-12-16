import { style } from "@angular/animations";

function validateGuees(finalResultAray: any, customerResult: any) {

  const matcArr: any = [];
  const tempRest = [...finalResultAray];
  const secRest = [...customerResult];

  tempRest.forEach((item, index) => {



    if (item === customerResult[index]) {
      delete tempRest[index];
      delete secRest[index];
      matcArr.push(2)


    };
  });




  secRest.forEach((_, index) => {
    const hasMatch = tempRest.findIndex
      (fitem => fitem === _);
    if (hasMatch >= 0) {
      delete tempRest[hasMatch];
      delete secRest[index];
      matcArr.push(1);
    }
  })
  // console.log(secRest)
  for (let item of secRest) {
    if (item)
      matcArr.push(0);
  }



  return matcArr;
};


export default validateGuees;