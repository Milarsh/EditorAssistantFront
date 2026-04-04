import { useState } from 'react'

import { Button } from '@/shared/ui/button'
import { FormRoot } from '@/shared/ui/form/ui/form-root'
import { Typography } from '@/shared/ui/typography'

type ProfileFormProps = {
  initValues: {
    email?: string
    login?: string
  }
}

export const ProfileEditForm = ({ initValues }: ProfileFormProps) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <FormRoot
      initialValues={initValues}
      onSubmit={() => {
        setIsEditing(false)
      }}
      render={() => (
        <div className="border-t border-gray-200 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <Typography variant="h3">Личная информация</Typography>

            <Button
              onClick={() => {
                setIsEditing(!isEditing)
              }}
              size="xs"
            >
              {isEditing ? 'Сохранить' : 'Редактировать'}
            </Button>
          </div>

          {/* <div className="space-y-4"> */}
          {/*  <div> */}
          {/*    <Typography variant="body">Email</Typography> */}
          {/*    <TextField */}
          {/*      type="email" */}
          {/*      name="email" */}
          {/*      value={values.email} */}
          {/*      onChange={handleChange} */}
          {/*      readOnly={!isEditing} */}
          {/*      className="w-full" */}
          {/*    /> */}
          {/*  </div> */}

          {/*  <div> */}
          {/*    <Typography variant="body">Логин</Typography> */}
          {/*    <TextField */}
          {/*      name="login" */}
          {/*      value={values.login} */}
          {/*      onChange={handleChange} */}
          {/*      readOnly={!isEditing} */}
          {/*      className="w-full" */}
          {/*    /> */}
          {/*  </div> */}
          {/* </div> */}
        </div>
      )}
    />
  )
}
