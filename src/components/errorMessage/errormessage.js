import img from './error.gif'

const ErrorMessage = () => {
	return (
		<img style={{display:'blcok', width:'250px', height:'250px', margin: '0 auto'}} src={img} alt='Error'/>
	)
}

export default ErrorMessage;