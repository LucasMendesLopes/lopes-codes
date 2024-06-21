import { ChangeEvent } from 'react'
import { Control, Controller } from 'react-hook-form'

type IInput = {
  name: string
  placeholder: string
  control: Control<any>
  errorMessage?: string
}

export function Input({ name, control, placeholder, errorMessage }: IInput) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: (text: string) => void,
  ) => {
    const text = e.target.value

    onChange(text)
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={value || ''}
            placeholder={placeholder}
            className="text-gray-900 text-md block w-full rounded-lg p-3 outline-none"
            onChange={(e) => handleChange(e, onChange)}
          />
          {errorMessage && <span className="text-red-600">{errorMessage}</span>}
        </div>
      )}
    />
  )
}
