const generateGenericQuery = (field, values, type) => {
  const query = {}
  if (['string', 'number'].includes(type)) {
    query[field] = {
      $in: [...values],
    }
  } else if (type === 'boolean') {
    query[field] = {
      $eq: values,
    }
  } else if (type === 'other') {
    query[field] = {
      $eq: values === 'free' ? false : true,
    }
  }

  return query
}

const generateQueryToSearch = filters => {
  const query = []

  /*
  {
    genre: ['man','woman','both'],
    muscles: ['upper_body', 'lower_body', 'functional', 'abs', 'stretching'],
    difficulty: [1,2,3],
    needsAccessories: true||false||null,
    plan: 'free'||'premium',
  }
  */

  const { genre, muscles, difficulty, needsAccessories, plan } = filters

  const genreQuery = genre ? generateGenericQuery('genre', genre, 'string') : []
  const musclesQuery = muscles ? generateGenericQuery('muscles', muscles, 'string') : []
  const difficultyQuery = difficulty ? generateGenericQuery('difficulty', difficulty, 'number') : []
  const needAccessoriesQuery =
    typeof needsAccessories === 'boolean' ? generateGenericQuery('needsAccessories', needsAccessories, 'boolean') : []
  const planQuery = plan ? generateGenericQuery('isPremium', plan, 'other') : []

  return query
    .concat(genreQuery)
    .concat(musclesQuery)
    .concat(difficultyQuery)
    .concat(needAccessoriesQuery)
    .concat(planQuery)
}

const generateQueryToSort = sortParam => {
  const [field, order] = sortParam.split('-')
  return {
    [field]: order === 'asc' ? -1 : 1,
  }
}

module.exports = { generateQueryToSearch, generateQueryToSort }
