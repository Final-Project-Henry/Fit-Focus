'use strict'

const Exercise = require('../../config/mongoose/models/exercisesModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const { generateQueryToSearch, generateQueryToSort } = require('../../utils/generateQueryToSearch')

/**
 * @param {Array} exercises
 * @returns all new exercises
 */
const createMany = async exercises => {
  try {
    const saveData = await Exercise.insertMany(exercises)
    return saveData
  } catch (error) {
    console.log('error', error.message)
  }
}

/**
 * @param {}
 * @returns all exercises
 */
const getAllExercisesInDB = async () => {
  try {
    return Exercise.find({}, 'name -_id')
  } catch (error) {
    console.log('error', error.message)
  }
}

/**
 * @param {}
 * @returns all week exercises
 */
const findWeekExercises = async () => {
  return Exercise.find({ isWeekSelected: true }, '_id name difficulty genre gifUrl muscles')
}

/**
 * @param {}
 * @returns 7 top ranking exercises
 */
const findTopExercises = async () => {
  return Exercise.aggregate([
    {
      $lookup: {
        from: 'commentexercises',
        localField: '_id',
        foreignField: 'exercise',
        as: 'comments',
      },
    },
    {
      $addFields: {
        totalRating: {
          $sum: '$comments.rating',
        },
      },
    },
    {
      $sort: {
        totalRating: -1,
      },
    },
    {
      $limit: 7,
    },
    {
      $project: {
        _id: 1,
        name: 1,
        difficulty: 1,
        genre: 1,
        gifUrl: 1,
        totalRating: 1,
      },
    },
  ])
}

/**
 * @param {}
 * @returns all exercises
 */
const findExerciseById = async id => {
  return Exercise.aggregate([
    {
      $match: {
        _id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: 'commentexercises',
        localField: '_id',
        foreignField: 'exercise',
        as: 'comments',
      },
    },
    {
      $addFields: {
        totalRating: {
          $sum: '$comments.rating',
        },
      },
    },
  ])
}

/**
 * @param {skip, limit, sort, filters}
 * @returns all filters exercises paginated
 */
const findExercises = async (skip, limit, sort, filters) => {
  const filterQuery = generateQueryToSearch(filters)
  const sortQuery = generateQueryToSort(sort)
  return Exercise.aggregate([
    {
      $match: {
        $and: [
          {
            status: 'active',
          },
        ].concat(filterQuery),
      },
    },
    {
      $lookup: {
        from: 'commentexercises',
        localField: '_id',
        foreignField: 'exercise',
        as: 'comments',
      },
    },
    {
      $addFields: {
        totalRating: {
          $sum: '$comments.rating',
        },
      },
    },
    {
      $sort: sortQuery,
    },
    {
      $facet: {
        exercises: [{ $skip: Number(limit * skip) }, { $limit: Number(limit) }],
        metadata: [
          {
            $group: {
              _id: null,
              total: { $sum: 1 },
            },
          },
        ],
      },
    },
    {
      $project: {
        exercises: {
          _id: 1,
          name: 1,
          difficulty: 1,
          genre: 1,
          gifUrl: 1,
          totalRating: 1,
        },
        total: { $arrayElemAt: ['$metadata.total', 0] },
      },
    },
  ])
}

module.exports = {
  createMany,
  findExerciseById,
  findExercises,
  findTopExercises,
  findWeekExercises,
  getAllExercisesInDB,
}
