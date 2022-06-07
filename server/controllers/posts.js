// const { catchAsync } = require('../utils/utils');

// module.exports = {
//   findTourById: async (req, res, next) => {
//     const { id } = req.params;
//     const tour = await Tour.findById(id);
//     if (tour === null) {
//         return next({
//             status: 'failed',
//             message: 'not found'
//         })
//     }
//     req.tour = tour;
//     next();
//   },
//   getTourById: catchAsync(async (req, res) => {
//       res.json({
//           status: 'success',
//           data: req.tour
//       });
//   }),
//   getAllTours: catchAsync(async (req, res) => {
//     // console.log('get tour method');
//     let query = JSON.stringify(req.query);
//     query = query.replace(/(gt|gte|lt|lte)/, match => `$${match}`);

//     let tours = Tour.find(JSON.parse(query));

//     if (req.query.fields !== undefined) {
//         tours = tours.select(req.query.fields.replace(',', ' '));
//     }
//     if (req.query.page !== undefined) {
//         const { limit } = req.query;
//         tours.skip((+req.query.page - 1) * limit);
//         tours.limit(limit);
//     }
//     res.json({
//         status: 'success',
//         data: await tours
//     })
//   }),
//   createNewTour: catchAsync(async (req, res) => {
//     const tour = await Tour.create(req.body);
//     res.json({
//         status: 'success',
//         data: tour
//     });
//   }),
//   updateTour: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const data = await Tour.findByIdAndUpdate(id, req.body, { new: true });
//       res.json({
//         status: 'success',
//         data,
//       });
//     } catch (error) {
//       res.status(500).json({ status: 'failure', message: error.message });
//     }
//   },
//   deleteTour: async (req, res) => {
//     const { id } = req.params;
//     try {
//       await Tour.findByIdAndDelete(id);
//       res.status(404).json();
//       // res.json({
//       //   status: 'success',
//       //   data,
//       // });
//     } catch (error) {
//       res.status(500).json({ status: 'failure', message: error.message });
//     }
//   },
// };


// // getAllTours: async (req, res) => {
// //   let query = JSON.stringify(req.query);
// //   query = query.replace(/(gt|gte|lt|lte)/g, (match) => `$${match}`);
// //   // console.log(query);
// //   try {
// //     let data;
// //     if (req.query.page !== undefined && req.query.fields !== undefined) {
// //       data = await Tour.find(JSON.parse(query))
// //         .select(req.query.fields.replace(',', ' '))
// //         .limit(req.query.limit || 10)
// //         .skip(req.query.limit * (req.query.page - 1));
// //     } else if (req.query.fields !== undefined) {
// //       data = await Tour.find(JSON.parse(query)).select(
// //         req.query.fields.replace(',', ' ')
// //       );
// //     } else if (req.query.page !== undefined) {
// //       data = await Tour.find(JSON.parse(query))
// //         .limit(req.query.limit || 10)
// //         .skip(req.query.limit * (req.query.page - 1));
// //     } else {
// //       data = await Tour.find(JSON.parse(query));
// //     }

// //     res.json({ status: 'success', data });
// //   } catch (error) {
// //     res.status(500).json({ status: 'failure', message: error.message });
// //   }
// // },