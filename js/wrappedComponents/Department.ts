import {connect} from 'react-redux';
import {setActionData} from "../store/index/actions";
import Department from "../components/department/Department";

const mapDispatchToProps = {
    setActionData,
};
export default connect(state=>state, mapDispatchToProps)(Department);
