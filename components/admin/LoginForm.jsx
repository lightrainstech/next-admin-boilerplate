import { Button, KIND, SIZE } from 'baseui/button'
import { Controller, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'

import InputFields from '../fields/InputFields'
import SubmitButton from '../fields/SubmitButton'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

const LoginForm = () => {
  const router = useRouter()
  const [isLoading, setIsloading] = React.useState(false)
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm()

  const onSubmit = values => {
    router.push('/admin/dashboard')
  }

  return (
    <div className="flex flex-row items-center justify-center mt-40">
      <div className="md:w-full max-w-sm px-4 py-6  bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700  text-sm font-bold mb-2">
              Email Id
            </label>
            <InputFields
              name="email"
              control={control}
              otherProps={{
                placeholder: 'Email Id',
                type: 'email',
                error: 'Please check the details you entered',
                overrides: {
                  InputContainer: {
                    style: ({ $theme }) => ({
                      backgroundColor: 'white'
                    })
                  }
                }
              }}
              rules={{
                required: {
                  value: true,
                  message: 'Email is required'
                }
              }}
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>

            <InputFields
              name="password"
              control={control}
              otherProps={{
                placeholder: '*********',
                type: 'password',
                overrides: {
                  InputContainer: {
                    style: ({ $theme }) => ({
                      backgroundColor: 'white'
                    })
                  }
                }
              }}
              rules={{
                required: {
                  value: true,
                  message: 'Password is required'
                }
              }}
            />
          </div>

          <div className="mt-6">
            <Button
              kind={KIND.primary}
              size={SIZE.large}
              isLoading={isLoading}
              overrides={{
                BaseButton: {
                  style: () => ({
                    backgroundColor: '#fdba74'
                  })
                }
              }}>
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
