
type FormButtonProps = {
  isSubmitting: boolean;
  children: React.ReactNode
}
export default function FormButton({isSubmitting, children}: FormButtonProps) {
  return (
    <button
          type="submit"
          disabled={isSubmitting}
          className="btn liquid"
        >
          {children}
        </button>
  )
}
