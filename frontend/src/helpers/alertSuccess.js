import Swal from 'sweetalert2'


export const alertSuccess = async msg => {
  return Swal.fire(
    '',
    msg || 'Operação concluída com sucesso',
    'success'
  )
}