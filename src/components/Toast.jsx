const Toast = ({message, type}) => {
    //Note: prop type has two posibles values : 'toast--success' and 'toast--error'

    return ( 
        <div className={`toast ${type}`}>
            {message}
        </div>
    );
}
 
export default Toast;