import 'bootstrap/dist/css/bootstrap.min.css';
function Spinner(){
    return <>
        <div class="d-flex justify-content-center dapp">
        <div class="spinner-border" role="status" style={{width: "5rem", height: "5rem"}}>
            <span class="visually-hidden">Loading...</span>
        </div>
        </div>
    </>
}
export default Spinner; 