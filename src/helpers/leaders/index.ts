// export const parseLeaderData = (categories: any) => {
//   debugger
//   for (let i = 0; i < categories.length; i++) {
//     let tmp: any[] = [];
//     categories[i][0].map((d: any, i: number) => {
//       if (i < 5) {
//         tmp = [...tmp, d];
//       }
//       return tmp;
//     });

//     categories[i][1](tmp);
//   }
// };
export const parseLeaderData = (categories: any) => {
  for (let i = 0; i < categories.length; i++) {
    let tmp: any[] = [];
    categories[i][0].map((d: any, i: number) => {
      if (i < 5) {
        tmp = [...tmp, d];
      }
      return tmp;
    });

    categories[i][1](tmp);
  }
};