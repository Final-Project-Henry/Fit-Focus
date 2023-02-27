import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'

export interface State {
  user_status: string
  users: Array<any> | null
  load_exer: string
  change_info: string
  admin_status: string
  delete_exer: string
  delete_user: string
  change_exer: string
  question_status: string
  questions: Array<any>
}
export interface data {
  name: string
  difficulty: string
  muscles: string
  genre: string
  premium: boolean
  video: string
  description: string
}

const initialState: State = {
  user_status: 'default',
  users: [],
  change_info: 'default',
  load_exer: 'default',
  admin_status: 'default',
  delete_exer: 'default',
  delete_user: 'default',
  change_exer: 'default',
  question_status: 'default',
  questions: [],
}

export interface comments {
  email: string
  name: string
}

export const get_users = createAsyncThunk('admin/get_users', async (_, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.get('http://localhost:3001/admin/allusers', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
})

export const get_questions = createAsyncThunk('admin/get_questions', async (_, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.get('http://localhost:3001/admin/questions', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
})
export const add_admin = createAsyncThunk('admin/add_admin', async (_id: string, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.post(
    'http://localhost:3001/superAdmin/admin',
    { _id: _id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
})
export const change_profile = createAsyncThunk(
  'admin/change_profile',
  async (data: { _id: string; data: any }, thunkAPI) => {
    let userJSON = window.localStorage.getItem('Login_userFit_Focus')
    let token
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON)
        token = userlogin.token
      }
    }
    const response = await axios.put(
      'http://localhost:3001/admin/changeUserInfo',
      { _id: data._id, data: data.data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data
  },
)
export const change_info = createAsyncThunk('admin/change_info', async (data: { _id: string; data: any }, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.put(
    'http://localhost:3001/admin/changeInfo',
    { _id: data._id, data: data.data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
})

export const change_exercise = createAsyncThunk(
  'admin/change_exercise',
  async (data: { _id: string; data: any }, thunkAPI) => {
    let userJSON = window.localStorage.getItem('Login_userFit_Focus')
    let token
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON)
        token = userlogin.token
      }
    }
    const response = await axios.put(
      'http://localhost:3001/admin/change_exercise',
      { _id: data._id, data: data.data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data
  },
)

export const delete_user = createAsyncThunk('admin/delete_user', async (id: string, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.delete('http://localhost:3001/admin/deleteUser', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { id: id },
  })
  return response.data
})

export const add_exercise = createAsyncThunk('admin/add_exercise', async (data: data, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.post(
    'http://localhost:3001/admin/addExercise',
    { datos: data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
})

export const add_response = createAsyncThunk(
  'admin/add_response',
  async (data: { email: string; response: string }, thunkAPI) => {
    let userJSON = window.localStorage.getItem('Login_userFit_Focus')
    let token
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON)
        token = userlogin.token
      }
    }
    const response = await axios.put(
      'http://localhost:3001/admin/response_ask',
      { email: data.email, response: data.response },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data
  },
)

export const delete_exer = createAsyncThunk('admin/delete_exer', async (id: string, thunkAPI) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.delete('http://localhost:3001/admin/deleteExercise', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { id: id },
  })
  return response.data
})

export const delete_comment = createAsyncThunk('admin/delete_comment', async (data: comments) => {
  let userJSON = window.localStorage.getItem('Login_userFit_Focus')
  let token
  if (userJSON) {
    if (userJSON.length > 3) {
      let userlogin = JSON.parse(userJSON)
      token = userlogin.token
    }
  }
  const response = await axios.delete('http://localhost:3001/admin/deleteUserComment', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  })
  return response.data
})

export const AdminSlice = createSlice({
  name: 'admin',
  initialState,

  reducers: {
    reset_delete_user(state) {
      state.delete_user = 'default'
    },
    reset_delete_exer(state) {
      state.delete_exer = 'default'
    },
    reset_admin_status(state) {
      state.admin_status = 'default'
    },
    reset_change_info(state) {
      state.change_info = 'default'
    },
    reset_change_exer(state) {
      state.change_exer = 'default'
    },
    reset_status_res(state) {
      state.question_status = 'default'
    },
  },

  extraReducers: builder => {
    builder
      .addCase(get_users.fulfilled, (state, action) => {
        state.user_status = 'loaded'
        state.users = action.payload
      })
      .addCase(get_users.rejected, (state, action) => {
        state.user_status = 'rejected'
      })
      .addCase(add_admin.fulfilled, (state, action) => {
        state.user_status = 'loaded'
        state.admin_status = 'change'
      })
      .addCase(add_admin.rejected, (state, action) => {
        state.user_status = 'rejected'
      })
      .addCase(add_exercise.fulfilled, (state, action) => {
        state.load_exer = 'loaded'
      })
      .addCase(add_exercise.rejected, (state, action) => {
        state.load_exer = 'rejected'
      })
      .addCase(delete_exer.fulfilled, (state, action) => {
        state.delete_exer = 'deleted'
      })
      .addCase(delete_exer.rejected, (state, action) => {
        state.delete_exer = 'rejected'
      })
      .addCase(delete_user.fulfilled, (state, action) => {
        state.delete_user = 'deleted'
      })
      .addCase(delete_user.rejected, (state, action) => {
        state.delete_user = 'rejected'
      })
      .addCase(change_profile.fulfilled, (state, action) => {
        state.change_info = 'change'
      })
      .addCase(change_profile.rejected, (state, action) => {
        state.change_info = 'rejected'
      })
      .addCase(change_info.fulfilled, (state, action) => {
        state.change_info = 'change'
      })
      .addCase(change_info.rejected, (state, action) => {
        state.change_info = 'rejected'
      })
      .addCase(change_exercise.fulfilled, (state, action) => {
        state.change_exer = 'change'
      })
      .addCase(change_exercise.rejected, (state, action) => {
        state.change_exer = 'rejected'
      })
      .addCase(get_questions.fulfilled, (state, action) => {
        state.question_status = 'load'
        state.questions = action.payload
      })
      .addCase(get_questions.rejected, (state, action) => {
        state.question_status = 'rejected'
      })
      .addCase(add_response.fulfilled, (state, action) => {
        state.question_status = action.payload
      })
      .addCase(add_response.rejected, (state, action) => {
        state.question_status = 'rejected'
      })
  },
})

export const {} = AdminSlice.actions
export const {
  reset_delete_user,
  reset_delete_exer,
  reset_admin_status,
  reset_change_info,
  reset_change_exer,
  reset_status_res,
} = AdminSlice.actions
export const admin = (state: RootState) => state.admin

export default AdminSlice.reducer
