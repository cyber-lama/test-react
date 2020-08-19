import {connect} from 'react-redux'
import IndexContainer from "../js/components/index/Index";
import {getRegion, setActionData} from "../js/store/index/actions";

const mapDispatchToProps = {
    setActionData,
    getRegion,
}

export default connect(state=>state, mapDispatchToProps)(IndexContainer);
