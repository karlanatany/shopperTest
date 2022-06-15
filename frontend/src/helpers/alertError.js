import Swal from 'sweetalert2'

export const alertError = (err, msg) => {
  console.error(err)
  Swal.fire(
    'Ops!',
    msg || 'Aconteceu um erro, desculpe o transtorno',
    'error'
  )
}