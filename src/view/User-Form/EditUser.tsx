import { useEditUserForm } from "../../forms/User-Form/helpers/UseEditUserForm";
import UserForm from "../../forms/User-Form/Userform";
import { withFormLogic } from "../../hoc/withFormLogic";

const EditUser = withFormLogic(UserForm, useEditUserForm);
export default EditUser;
