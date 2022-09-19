import { NextResponse } from 'next/server'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import API from '../axios'
import allActions from '../redux/actions'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const onSubmit = async ({ email, password }) => {
    const response = await API.post('/users/login', { email, password })
    if (response.status === 200)
      dispatch(
        allActions.userActions.login({
          user: response.data.user,
          token: response.data.token,
        }),
        NextResponse.redirect('/logged'),
      )
    else NextResponse.redirect('/login')
  }

  return (
    <div className="row">
      <form
        align="center"
        className="col-4 mx-auto pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group row mt-2 ">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            {errors.email && <span>This field is required</span>}
            <input
              type="email"
              className="form-control"
              {...register('email', {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            {errors.password && <span>This field is required</span>}
            <input
              type={'password'}
              className="form-control"
              {...register('password', {
                required: true,
                type: 'password',
              })}
            />
          </div>
        </div>
        <div className="form-group row mt-2">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
