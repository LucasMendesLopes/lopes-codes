import { ChangeEvent, InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'

type IInput = {
  name: string
  control: Control<any>
  errorMessage: string | undefined
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ name, control, errorMessage, ...props }: IInput) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (text: string) => void,
  ) => {
    const text = e.target.value

    onChange(text)
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="text-gray-900 text-md block w-full rounded-lg p-3 outline-none"
            onChange={(e) => handleChange(e, onChange)}
            {...props}
          />
          {errorMessage && <span className="text-red-600">{errorMessage}</span>}
        </div>
      )}
    />
  )
}
